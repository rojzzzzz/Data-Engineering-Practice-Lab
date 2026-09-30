from __future__ import annotations
import json, logging
from datetime import datetime, timezone
from pathlib import Path
import streamlit as st
from src.config import BUNDLED_CHALLENGES_PATH, CHALLENGES_PATH, DB_PATH, SOURCE_PATH, VALIDATION_REPORT_PATH
from src.bank_manager import archive_active_source, archive_import, prepare_append, sync_bundled_sql, write_active_source
from src.database import export_progress, get_attempt, init_db, list_attempts, merge_progress, save_attempt, save_diagram, save_settings, save_attempt_details
from src.erd_component import erd_editor
from src.sql_ui import schema_browser, render_workspace, stop_sql_job
from src.diagrams import validate_diagram
from src.json_validator import validate_bank, validate_file
from src.prompt_builder import student_prompt, evaluation_prompt
from src.progression import unlock_next
from src.selector import eligible_challenges, select_challenge
from src.statistics import overview, weak_topic_summary

logging.basicConfig(level=logging.INFO)
st.set_page_config(page_title="Data Engineering Practice Lab", page_icon="🧪", layout="wide", initial_sidebar_state="expanded")
# Keep the native header: it contains the only sidebar reopen control.
st.markdown("<style>" + (Path(__file__).parent / "src" / "styles.css").read_text(encoding="utf-8") + "</style>", unsafe_allow_html=True)

def now() -> str: return datetime.now(timezone.utc).isoformat(timespec="microseconds")

def parse_time(value: str) -> datetime:
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    return parsed.replace(tzinfo=timezone.utc) if parsed.tzinfo is None else parsed

def move_attempt_to_not_started(attempt: dict) -> None:
    attempt.update(status="Not started",updated_at=now())
    save_attempt_details(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Not started"
    st.session_state.pop("active_attempt",None)

def mark_attempt_complete(attempt: dict, started_at: str) -> None:
    finished=now()
    elapsed=max(0,(datetime.fromisoformat(finished)-parse_time(started_at)).total_seconds()/60)
    attempt.update(status="Completed",completed_at=finished,updated_at=finished,minutes_taken=elapsed)
    save_attempt_details(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Completed"
    st.session_state.active_attempt=attempt["attempt_id"]
    st.session_state.status_notice="Challenge marked complete. You can now create an evaluation prompt below."

def save_evaluation_result(attempt: dict, score: float, rubric_scores: dict, weak: list, mistakes: list, feedback: str, notes: str) -> None:
    attempt.update(status="Evaluated",score=score,rubric_scores=rubric_scores,evaluated_at=now(),updated_at=now(),weak_topics=weak,mistake_categories=mistakes,evaluation_feedback=feedback,personal_notes=notes)
    save_attempt_details(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Evaluated"
    st.session_state.active_attempt=attempt["attempt_id"]
    st.session_state.status_notice="Evaluation saved to your local progress database."

@st.cache_data
def load_bank() -> dict:
    if not CHALLENGES_PATH.exists():
        source=BUNDLED_CHALLENGES_PATH if BUNDLED_CHALLENGES_PATH.exists() else SOURCE_PATH
        if not source.exists(): raise FileNotFoundError("Working challenge bank is missing")
        validate_file(source,CHALLENGES_PATH,VALIDATION_REPORT_PATH)
    elif BUNDLED_CHALLENGES_PATH.exists() and BUNDLED_CHALLENGES_PATH.resolve() != CHALLENGES_PATH.resolve():
        active=json.loads(CHALLENGES_PATH.read_text(encoding="utf-8"))
        bundled=json.loads(BUNDLED_CHALLENGES_PATH.read_text(encoding="utf-8"))
        refreshed=sync_bundled_sql(active,bundled)
        refreshed,report=validate_bank(refreshed)
        if refreshed != active:
            write_active_source((json.dumps(refreshed,ensure_ascii=False,indent=2)+"\n").encode("utf-8"))
        VALIDATION_REPORT_PATH.write_text(json.dumps(report,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    return json.loads(CHALLENGES_PATH.read_text(encoding="utf-8"))

def safe_init() -> None:
    try: init_db(DB_PATH)
    except Exception as e:
        logging.exception("Database initialization failed")
        st.error(f"Could not initialize local progress database: {e}"); st.stop()

def challenge_family(cid: str) -> str: return cid.split("-")[0]

def render_validation_issues(report: dict) -> None:
    issues=report.get("issues",[])
    if not issues:
        st.success("Validation passed with no findings.")
        return
    st.dataframe([{"Kind":item.get("kind"),"Finding":item.get("message"),"Location":item.get("location",item.get("challenge_id",item.get("rubric",""))),"Details":json.dumps({key:value for key,value in item.items() if key not in ("kind","message")},ensure_ascii=False)} for item in issues],width="stretch",hide_index=True)
    with st.expander("Full validation report JSON"):
        st.json(report)

def render_bank_manager(current_bank: dict) -> None:
    st.header("Challenge Bank")
    st.caption("Upload a challenge bank JSON with new, unique question IDs, review the combined bank, then choose Append questions. Both the uploaded file and current bank are archived when you apply the import.")
    try:
        current_report=json.loads(VALIDATION_REPORT_PATH.read_text(encoding="utf-8"))
    except (OSError,json.JSONDecodeError):
        _,current_report=validate_bank(current_bank)
    st.subheader("Current bank validation")
    summary=st.columns(3)
    summary[0].metric("Challenges",current_report.get("normalized_challenge_count",len(current_bank.get("challenges",[]))))
    summary[1].metric("Validation findings",current_report.get("issue_count",0))
    summary[2].metric("Usable challenges",current_report.get("valid_challenges",len(current_bank.get("challenges",[]))))
    with st.expander("Bank validation details",expanded=False):
        render_validation_issues(current_report)
    st.divider()
    upload_key=f"challenge_bank_upload_{st.session_state.get('challenge_bank_upload_generation',0)}"
    uploaded=st.file_uploader("Upload a challenge bank JSON file",type=["json"],key=upload_key)
    if not uploaded: return
    payload=uploaded.getvalue()
    try:
        incoming=json.loads(payload.decode("utf-8"))
        if not isinstance(incoming,dict) or not isinstance(incoming.get("challenges"),list):
            raise ValueError("Expected a JSON object containing a challenges array.")
        if not incoming["challenges"]:
            raise ValueError("The uploaded file contains no challenge objects.")
        candidate,candidate_report=prepare_append(current_bank,incoming)
    except (UnicodeDecodeError,json.JSONDecodeError,ValueError,TypeError,AttributeError) as exc:
        st.error(f"Could not prepare this challenge bank: {exc}")
        return
    st.subheader("Preview before applying")
    summary=st.columns(3)
    summary[0].metric("Questions after append",candidate_report["normalized_challenge_count"])
    summary[1].metric("Usable challenges",candidate_report["valid_challenges"])
    summary[2].metric("Validation findings",candidate_report["issue_count"])
    render_validation_issues(candidate_report)
    if candidate_report.get("duplicate_ids") or candidate_report["valid_challenges"] != len(candidate["challenges"]) or any(issue["kind"] == "rubric_total" for issue in candidate_report["issues"]):
        st.error("Resolve invalid challenges and duplicate or missing IDs before applying this bank.")
        return
    if candidate_report.get("issue_count",0):
        st.warning("This bank has validation findings. Review them above; findings will remain in the saved report.")
    if st.button("Append questions",type="primary",key="append_challenge_questions"):
        try:
            archive_import(payload,uploaded.name)
            archive_active_source()
            active_payload=(json.dumps(candidate,ensure_ascii=False,indent=2)+"\n").encode("utf-8")
            write_active_source(active_payload)
            validate_file(SOURCE_PATH,CHALLENGES_PATH,VALIDATION_REPORT_PATH)
            load_bank.clear()
            st.session_state.challenge_bank_upload_generation=st.session_state.get("challenge_bank_upload_generation",0)+1
            st.session_state.bank_manager_notice="Questions appended to the challenge bank successfully."
            st.rerun()
        except Exception as exc:
            logging.exception("Could not apply uploaded challenge bank")
            st.error(f"The challenge bank could not be applied: {exc}")

try:
    bank=load_bank(); challenges=bank["challenges"]; safe_init()
except Exception as exc:
    logging.exception("Application startup failed"); st.error(f"The challenge bank could not be loaded. Check data/challenges.json and the validation report. Details: {exc}"); st.stop()

attempts=list_attempts(DB_PATH,include_diagrams=False); stats=overview(attempts); paths=bank.get("bank",{}).get("learning_paths",[])
st.sidebar.markdown("<div class='brand-lockup'><div class='brand-mark'>▦</div><div class='brand-name'>Practice Lab</div><div class='brand-note'>DATA ENGINEERING</div></div>",unsafe_allow_html=True)
page=st.sidebar.radio("Navigate",["Practice","Progress","Challenge Bank"])
if page != "Practice":
    stop_sql_job()
page_hero={
    "Practice":("Practice","Build skill through practice.","Choose a focused session and work through realistic data engineering challenges."),
    "Progress":("Progress","See how your practice is adding up.","Review completed work, scores, consistency, and the topics to revisit."),
    "Challenge Bank":("Question bank","Grow your question bank.","Append new challenge sets and review the quality of your current bank."),
}
eyebrow,title,description=page_hero[page]
st.markdown(f"<div class='page-hero'><p class='eyebrow'>{eyebrow} · Data Engineering</p><h1>{title}</h1><p class='subline'>{description}</p></div>",unsafe_allow_html=True)
st.sidebar.divider()
families=["All families"]+sorted({challenge_family(c["id"]) for c in challenges})
types=["All types"]+sorted({c.get("type","Other") for c in challenges})
path_names=["All paths"]+[p["name"] for p in paths]
with st.sidebar.expander("Challenge filters",expanded=page=="Practice"):
    family=st.selectbox("Challenge family",families); ctype=st.selectbox("Challenge type",types)
    difficulty=st.selectbox("Difficulty",["Any",1,2,3,4,5]); max_minutes=st.number_input("Maximum time (minutes)",min_value=10,max_value=600,value=180,step=10)
    path=st.selectbox("Learning path",path_names); exclude_completed=st.checkbox("Exclude completed",value=False); include_attempted=st.checkbox("Include attempted",value=True)
settings={"preferred_difficulty":difficulty if isinstance(difficulty,int) else 3,"maximum_session_time":max_minutes,"last_learning_path":path,"exclude_completed":exclude_completed}
if settings != st.session_state.get("saved_filter_settings"):
    save_settings(DB_PATH,settings)
    st.session_state.saved_filter_settings=settings.copy()
filters={"family":family,"challenge_type":ctype,"difficulty":difficulty if isinstance(difficulty,int) else None,"max_minutes":max_minutes,"learning_path":path,"paths":paths}
pool=eligible_challenges(challenges,**filters)
completed_ids={a["challenge_id"] for a in attempts if a.get("status") in ("Completed","Evaluated")}
attempted_ids={a["challenge_id"] for a in attempts}
if exclude_completed: pool=[c for c in pool if c["id"] not in completed_ids]
if not include_attempted: pool=[c for c in pool if c["id"] not in attempted_ids]

if page=="Challenge Bank":
    if "bank_manager_notice" in st.session_state:
        st.success(st.session_state.pop("bank_manager_notice"))
    render_bank_manager(bank)
elif page=="Progress":
    st.header("Progress overview")
    st.caption("Your practice history, scores, and next steps.")
    if "backup_restore_notice" in st.session_state:
        st.success(st.session_state.pop("backup_restore_notice"))
    with st.expander("Back up or restore progress"):
        backup=export_progress(DB_PATH)
        st.download_button("Download progress backup",json.dumps(backup,ensure_ascii=False,indent=2),file_name=f"practice_lab_backup_{datetime.now().date().isoformat()}.json",mime="application/json")
        st.caption("Restoring merges attempts into your existing progress. Matching attempts are updated only when the backup is newer; unrelated local attempts remain.")
        uploaded_backup=st.file_uploader("Choose a Practice Lab backup",type=["json"],key="progress_backup")
        if uploaded_backup and st.button("Merge progress backup",key="merge_progress_backup"):
            try:
                backup_data=json.loads(uploaded_backup.getvalue().decode("utf-8"))
                merge_result=merge_progress(DB_PATH,backup_data)
                st.session_state.backup_restore_notice=f"Backup merged: {merge_result['added']} added, {merge_result['updated']} updated, {merge_result['unchanged']} already current."
                st.rerun()
            except (UnicodeDecodeError,json.JSONDecodeError,ValueError) as exc:
                st.error(f"Could not restore this backup: {exc}")
    col=st.columns(4)
    col[0].metric("Challenges completed",f"{stats['completed']} / {len(challenges)}")
    col[1].metric("In progress",stats["in_progress"])
    col[2].metric("Average score",f"{stats['average_score']}" if stats["average_score"] is not None else "—",help=f"Based on {stats['score_count']} scored attempts")
    conf=[a["confidence"] for a in attempts if a.get("confidence") is not None]; mins=[a["minutes_taken"] for a in attempts if a.get("minutes_taken") is not None]
    col[3].metric("Average confidence",f"{sum(conf)/len(conf):.1f} / 5" if conf else "—",help=f"{len(conf)} attempts")
    t1,t2=st.columns(2)
    with t1:
        st.subheader("Attempts over time")
        bydate={}
        for a in attempts:
            date=(a.get("updated_at") or "")[:10]
            if date: bydate[date]=bydate.get(date,0)+1
        if bydate: st.line_chart({"Attempts":dict(sorted(bydate.items()))})
        else: st.info("No activity yet. Start a challenge to build your history.")
        st.subheader("Completion by family")
        counts={}
        for c in challenges:
            fam=challenge_family(c["id"]); counts.setdefault(fam,[0,0]); counts[fam][1]+=1
            if c["id"] in completed_ids: counts[fam][0]+=1
        st.bar_chart({"Completed":{k:v[0] for k,v in counts.items()},"Available":{k:v[1] for k,v in counts.items()}})
    with t2:
        st.subheader("Topic performance")
        topic_rows=stats["weak_topics"]
        if topic_rows:
            scored=[r for r in topic_rows if r["average_score"] is not None]
            if scored: st.bar_chart({"Average score":{r["topic"]:r["average_score"] for r in scored}})
            st.dataframe(topic_rows,width="stretch",hide_index=True)
        else: st.info("Weak topics appear here after you record an evaluation.")
        st.metric("Average time",f"{sum(mins)/len(mins):.0f} min" if mins else "—",help=f"{len(mins)} attempts")
        st.metric("Hint views",sum(len(a.get("hints_used",[])) for a in attempts))
        scores_by_topic={}
        for attempt in attempts:
            if attempt.get("score") is None: continue
            for topic, ids in bank.get("bank",{}).get("topic_index",{}).items():
                if attempt.get("challenge_id") in ids:
                    scores_by_topic.setdefault(topic,[]).append(float(attempt["score"]))
        topic_means={topic:sum(vals)/len(vals) for topic,vals in scores_by_topic.items()}
        if topic_means:
            topic_counts={topic:len(scores_by_topic[topic]) for topic in topic_means}
            st.subheader("Topic strengths and review areas")
            st.caption("Each topic shows its supporting scored attempts; use caution with small samples.")
            strong=sorted(topic_means,key=topic_means.get,reverse=True)[:5]
            weak=sorted(topic_means,key=topic_means.get)[:5]
            st.dataframe([{"Group":"Strongest","Topic":t,"Average score":round(topic_means[t],1),"Attempts":topic_counts[t]} for t in strong]+[{"Group":"Needs review","Topic":t,"Average score":round(topic_means[t],1),"Attempts":topic_counts[t]} for t in weak],width="stretch",hide_index=True)
    st.subheader("Recent activity")
    st.dataframe([{"Challenge":a["challenge_id"],"Status":a["status"],"Score":a["score"],"Updated":a["updated_at"]} for a in attempts[:10]],width="stretch",hide_index=True) if attempts else st.info("No attempts recorded yet.")
    recent_done=[a for a in attempts if a.get("status") in ("Completed","Evaluated")][:10]
    st.subheader("Recently completed challenges")
    st.dataframe([{"Challenge":a["challenge_id"],"Status":a["status"],"Score":a["score"],"Completed":a.get("completed_at")} for a in recent_done],width="stretch",hide_index=True) if recent_done else st.caption("No completed challenges yet.")
    if topic_rows:
        recommended=select_challenge(pool,attempts,adaptive=True,weak_topics=[topic_rows[0]["topic"]])
        st.info(f"Recommended next challenge: {recommended['id']} · {recommended['title']}" if recommended else "No challenge matches the current filters.")
else:
    if "status_notice" in st.session_state:
        st.success(st.session_state.pop("status_notice"))
    overview_cols=st.columns(4)
    overview_cols[0].metric("Available challenges",len(challenges))
    overview_cols[1].metric("Completed",stats["completed"])
    overview_cols[2].metric("In progress",stats["in_progress"])
    overview_cols[3].metric("Average score",f"{stats['average_score']}" if stats["average_score"] is not None else "—",help=f"{stats['score_count']} scored attempts")
    if stats["weak_topics"] and st.session_state.get("mode") != "Review Weak Area":
        st.caption("Current review topics: "+", ".join(x["topic"] for x in stats["weak_topics"][:3]))
    if attempts:
        st.caption("Recent activity: "+" · ".join(f"{a['challenge_id']} ({a['status']})" for a in attempts[:3]))
    st.header("Choose your next session")
    st.caption("Pick a focused route, then adjust the filters in the sidebar.")
    action_cols=st.columns(5)
    active_mode=st.session_state.get("mode","Daily Scenario")
    actions=[
        ("◷","Daily Scenario","A focused, realistic scenario."),
        ("▤","Complete Case Study","Work through an end-to-end case."),
        ("↗","Review Weak Area","Practice a topic that needs attention."),
        ("✦","Surprise Me","Get a fresh challenge at random."),
        ("⌘","SQL Practice","Query real datasets and check your results."),
    ]
    for i,(icon,name,copy) in enumerate(actions):
        with action_cols[i]:
            card_class="mode-card is-active" if name==active_mode else "mode-card"
            st.markdown(f"<div class='{card_class}'><div class='mode-icon'>{icon}</div><div class='mode-title'>{name}</div><div class='mode-copy'>{copy}</div></div>",unsafe_allow_html=True)
            action_label=["Practice a scenario","Open a case study","Review a topic","Surprise me","Open SQL practice"][i]
            if st.button(action_label,key=f"choose_{i}",type="primary" if name==active_mode else "secondary",use_container_width=True):
                stop_sql_job()
                st.session_state.mode=name
                st.session_state.pop("active_challenge",None)
                st.session_state.pop("active_attempt",None)
                st.rerun()
    mode=st.session_state.get("mode","Daily Scenario")
    candidate_pool=pool
    if mode=="Daily Scenario": candidate_pool=[c for c in pool if challenge_family(c["id"])=="SCN"] or pool
    elif mode=="Complete Case Study": candidate_pool=[c for c in pool if challenge_family(c["id"])=="CASE"] or pool
    elif mode=="SQL Practice":
        candidate_pool=[c for c in pool if c.get("sql_playground")]
        if candidate_pool:
            def select_sql_exercise():
                stop_sql_job()
                st.session_state.pop("active_attempt",None)
                st.session_state.active_challenge=st.session_state.sql_challenge_choice
            ids=[c["id"] for c in candidate_pool]
            labels={c["id"]:f"{c['id']} · {c['title']}" for c in candidate_pool}
            chosen=st.selectbox("SQL exercise",ids,format_func=labels.get,key="sql_challenge_choice",on_change=select_sql_exercise)
            if not st.session_state.get("active_attempt"):
                st.session_state.active_challenge=chosen
    weak_rows=stats["weak_topics"]
    weak_topic=weak_rows[0]["topic"] if weak_rows else None
    if mode=="Review Weak Area" and weak_topic:
        weak_pool=[c for c in pool if weak_topic in c.get("internal",{}).get("topics",[])]
        repeated=next((row.get("attempts",0) for row in weak_rows if row["topic"]==weak_topic),0)>=2
        if weak_pool and repeated and difficulty=="Any":
            easier=[c for c in weak_pool if c.get("difficulty",3)<3]
            if easier: weak_pool=easier
        if weak_pool: candidate_pool=weak_pool
        st.caption("Recommended exercise selected from your recorded review topics.")
    if not candidate_pool: st.warning("No challenges match these filters. Adjust the sidebar filters.")
    challenge_by_id={c["id"]:c for c in challenges}
    reopened_attempt=get_attempt(DB_PATH,st.session_state.active_attempt) if st.session_state.get("active_attempt") else None
    if reopened_attempt and reopened_attempt["challenge_id"] in challenge_by_id:
        st.session_state.active_challenge=reopened_attempt["challenge_id"]
    elif st.session_state.get("active_challenge") not in {c["id"] for c in candidate_pool}:
        selected_challenge=select_challenge(candidate_pool,attempts,preferred_difficulty=settings["preferred_difficulty"],adaptive=mode=="Review Weak Area",weak_topics=[weak_topic] if weak_topic else None,seed=None)
        st.session_state.active_challenge=selected_challenge["id"] if selected_challenge else None
        st.session_state.pop("active_attempt",None)
    active_id=st.session_state.get("active_challenge")
    with st.expander("Reopen a previous attempt",expanded=False):
        options=[a for a in attempts if a["challenge_id"] in challenge_by_id and a.get("status") in ("Not started","In progress","Completed","Evaluated")]
        if options:
            labels={f"{a['challenge_id']} · {a['status']} · {a['updated_at'][:10]} · Attempt {a['attempt_id']}":a for a in options}
            selected=st.selectbox("Saved attempts",list(labels))
            if st.button("Open saved attempt"): st.session_state.active_challenge=labels[selected]["challenge_id"]; st.session_state.active_attempt=labels[selected]["attempt_id"]; st.rerun()
        else: st.caption("Your saved attempts will be listed here.")
    if active_id in challenge_by_id:
        c=challenge_by_id[active_id]; saved=reopened_attempt
        if saved and saved.get("challenge_id") != c["id"]:
            saved=None
            st.session_state.pop("active_attempt",None)
        st.divider(); st.subheader(c["title"])
        st.caption(f"{c['id']}  ·  {'★' * c.get('difficulty',1)}  ·  {c.get('estimated_minutes','?')} min")
        student=c.get("student",{})
        for heading,key in [("Scenario","scenario"),("Requirements","requirements"),("Tasks","tasks"),("Constraints","constraints"),("Deliverables","deliverables")]:
            st.markdown(f"**{heading}**")
            value=student.get(key,[] if key!="scenario" else "")
            st.markdown(value if isinstance(value,str) else "\n".join(f"- {x}" for x in value) or "- None specified")
        st.markdown("**Required artifacts** · "+", ".join(c.get("artifacts_required",[])))
        if c.get("sql_playground"):
            schema_browser(c["sql_playground"])
        else:
            stop_sql_job()
        attempt_data=saved or next((a for a in attempts if a["challenge_id"]==c["id"] and a["status"] in ("Not started","In progress")),None)
        if not attempt_data:
            st.info("This is a preview. Starting it will add it to In Progress; choosing a practice mode alone won’t create an attempt.")
            if st.button("Start challenge",type="primary",key=f"start_{c['id']}"):
                started_at=now()
                attempt_id=save_attempt(DB_PATH,{"challenge_id":c["id"],"status":"In progress","started_at":started_at,"updated_at":started_at})
                st.session_state.active_attempt=attempt_id
                st.rerun()
            st.stop()
        attempt_data=get_attempt(DB_PATH,attempt_data["attempt_id"])
        aid=attempt_data["attempt_id"]
        key=f"answer_{aid or c['id']}"
        started=(attempt_data or {}).get("started_at") or now()
        st.caption(f"Started: {started} · Elapsed: {max(0,int((datetime.now(timezone.utc)-parse_time(started)).total_seconds()//60))} min")
        if c.get("diagram_kind"):
            st.markdown("**Your ER diagram**")
            st.caption("Build a diagram here. It saves to this attempt and will be included in your evaluation prompt.")
            try:
                diagram_value=erd_editor(aid,c["diagram_kind"],attempt_data.get("diagram"))
                if diagram_value is not None and diagram_value != attempt_data.get("diagram"):
                    validate_diagram(diagram_value,c["diagram_kind"])
                    save_diagram(DB_PATH,aid,diagram_value)
                    attempt_data=get_attempt(DB_PATH,aid)
            except (ValueError,OSError) as exc:
                st.error(f"Could not save the ER diagram: {exc}")
        if c.get("sql_playground"):
            render_workspace(DB_PATH,attempt_data,c["sql_playground"])
            attempt_data=get_attempt(DB_PATH,aid)
        answer=st.text_area("Your solution",value=st.session_state.get(key,(attempt_data or {}).get("answer","")),height=300,key=key,placeholder="Work through the tasks and record your reasoning here…")
        status_key=f"status_{aid}"
        if status_key not in st.session_state:
            initial_status=(attempt_data or {}).get("status","In progress")
            st.session_state[status_key]=initial_status if initial_status in ("Not started","In progress","Completed","Evaluated") else "In progress"
        status_value=st.selectbox("Attempt status",["Not started","In progress","Completed","Evaluated"],key=status_key)
        confidence=st.slider("Confidence",1,5,int((attempt_data or {}).get("confidence") or 3),key=f"confidence_{aid}")
        hints_used=(attempt_data or {}).get("hints_used",[]); complications_used=(attempt_data or {}).get("complications_used",[])
        latest={**attempt_data,"attempt_id":aid,"challenge_id":c["id"],"status":status_value,"started_at":started,"updated_at":now(),"answer":answer,"confidence":confidence,"hints_used":hints_used,"complications_used":complications_used}
        if any(latest.get(field) != attempt_data.get(field) for field in ("answer","status","confidence","started_at")):
            save_attempt_details(DB_PATH,latest)
        else:
            latest["updated_at"]=attempt_data["updated_at"]
        if status_value != "Not started":
            st.button("Move to Not started",key=f"remove_status_{aid}",on_click=move_attempt_to_not_started,args=(latest,))
        elif status_value == "Not started":
            st.caption("This attempt is kept as a draft and is excluded from In Progress and completed totals.")
        with st.expander("Optional hint (unlocks progressively)"):
            if len(hints_used)<len(c.get("hints",[])) and st.button(f"Reveal Hint {len(hints_used)+1}",key=f"hint_{c['id']}_{aid}"):
                _,hints_used=unlock_next(c.get("hints",[]),hints_used); latest["hints_used"]=hints_used; latest["updated_at"]=now(); save_attempt_details(DB_PATH,latest); st.session_state[f"show_hint_{aid}"]=True
            revealed=st.session_state.get(f"show_hint_{aid}",False)
            if revealed and hints_used: st.info(c.get("hints",[])[hints_used[-1]-1] if len(c.get("hints",[]))>=hints_used[-1] else "No hint supplied for this level.")
        with st.expander("Make it harder · optional stretch work"):
            next_ix=len(complications_used)
            if next_ix<len(c.get("follow_up_complications",[])) and st.button(f"Open complication {next_ix+1}",key=f"comp_{aid}"):
                _,complications_used=unlock_next(c.get("follow_up_complications",[]),complications_used); latest["complications_used"]=complications_used; latest["updated_at"]=now(); save_attempt_details(DB_PATH,latest); st.session_state[f"show_comp_{aid}"]=True
            if st.session_state.get(f"show_comp_{aid}") and complications_used and complications_used[-1] <= len(c.get("follow_up_complications",[])): st.info(c["follow_up_complications"][complications_used[-1]-1])
            st.caption("Stretch work is optional and is not included in the base score unless you choose to include it in your answer.")
        p=student_prompt(c,bank.get("prompt_templates",{}).get("student",""))
        with st.expander("Generate student prompt"):
            st.code(p,language="text"); st.download_button("Download student prompt",p,file_name=f"{c['id']}_student_prompt.txt",mime="text/plain")
        st.button("Mark Complete",type="primary",key=f"complete_{aid}",on_click=mark_attempt_complete,args=(latest,started))
        if status_value in ("Completed","Evaluated"):
            rubric=bank.get("rubrics",{}).get(c.get("rubric_ref"),{})
            ep=evaluation_prompt(c,answer,rubric,bank.get("prompt_templates",{}).get("evaluation",""),[c["follow_up_complications"][i-1] for i in complications_used if i<=len(c.get("follow_up_complications",[]))],bank.get("mistake_categories",[]),attempt_data.get("diagram"),attempt_data.get("sql_workspace"))
            with st.expander("Evaluation prompt and result entry",expanded=True):
                st.code(ep,language="text"); st.download_button("Download evaluation prompt",ep,file_name=f"{c['id']}_evaluation_prompt.txt",mime="text/plain")
                st.markdown("**Record evaluator results**")
                saved_rubric_scores=(attempt_data or {}).get("rubric_scores",{})
                category_mode=st.checkbox("Enter a score for each rubric category",value=bool(saved_rubric_scores),key=f"category_mode_{aid}")
                rubric_scores={}
                if category_mode:
                    rubric_scores={category:st.number_input(category.replace("_"," ").title(),min_value=0.0,max_value=float(maximum),value=float(saved_rubric_scores.get(category,0.0)),step=1.0,key=f"rubric_{aid}_{category}") for category,maximum in rubric.items()}
                    total=sum(rubric_scores.values())
                    st.metric("Rubric total",f"{total:.0f} / 100")
                else:
                    total=st.number_input("Total score / 100",0.0,100.0,float((attempt_data or {}).get("score") or 0.0),step=1.0,key=f"total_score_{aid}")
                topic_options=sorted(set(bank.get("bank",{}).get("topic_index",{})) | set(attempt_data.get("weak_topics",[])))
                mistake_options=list(dict.fromkeys(bank.get("mistake_categories",[])+attempt_data.get("mistake_categories",[])))
                weak=st.multiselect("Weak topics",topic_options,default=(attempt_data or {}).get("weak_topics",[]))
                mistakes=st.multiselect("Mistake categories",mistake_options,default=(attempt_data or {}).get("mistake_categories",[]))
                feedback=st.text_area("Evaluator feedback",value=(attempt_data or {}).get("evaluation_feedback", "")); notes=st.text_area("Personal notes",value=(attempt_data or {}).get("personal_notes", ""))
                st.button("Save evaluation",key=f"eval_{aid}",on_click=save_evaluation_result,args=(latest,total,rubric_scores if category_mode else saved_rubric_scores,weak,mistakes,feedback,notes))
                if c.get("review_exercise"): st.info("Focused review exercise: "+c["review_exercise"])
