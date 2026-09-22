from __future__ import annotations
import json, logging
from datetime import datetime, timezone
from pathlib import Path
import streamlit as st
from src.config import CHALLENGES_PATH, DB_PATH, SOURCE_PATH, VALIDATION_REPORT_PATH
from src.bank_manager import archive_active_source, archive_import, merge_banks, write_active_source
from src.database import export_progress, get_attempt, init_db, list_attempts, merge_progress, save_attempt, save_setting
from src.json_validator import validate_bank, validate_file
from src.prompt_builder import student_prompt, evaluation_prompt
from src.progression import unlock_next
from src.selector import eligible_challenges, select_challenge
from src.statistics import overview, weak_topic_summary

logging.basicConfig(level=logging.INFO)
st.set_page_config(page_title="Data Engineering Practice Lab", page_icon="🧪", layout="wide")

def now() -> str: return datetime.now(timezone.utc).isoformat(timespec="seconds")

def move_attempt_to_not_started(attempt: dict) -> None:
    attempt.update(status="Not started",updated_at=now())
    save_attempt(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Not started"
    st.session_state.pop("active_attempt",None)

def mark_attempt_complete(attempt: dict, started_at: str) -> None:
    finished=now()
    elapsed=max(0,(datetime.fromisoformat(finished)-datetime.fromisoformat(started_at)).total_seconds()/60)
    attempt.update(status="Completed",completed_at=finished,updated_at=finished,minutes_taken=elapsed)
    save_attempt(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Completed"
    st.session_state.active_attempt=attempt["attempt_id"]
    st.session_state.status_notice="Challenge marked complete. You can now create an evaluation prompt below."

def save_evaluation_result(attempt: dict, score: float, rubric_scores: dict, weak: list, mistakes: list, feedback: str, notes: str) -> None:
    attempt.update(status="Evaluated",score=score,rubric_scores=rubric_scores,evaluated_at=now(),updated_at=now(),weak_topics=weak,mistake_categories=mistakes,evaluation_feedback=feedback,personal_notes=notes)
    save_attempt(DB_PATH,attempt)
    st.session_state[f"status_{attempt['attempt_id']}"]="Evaluated"
    st.session_state.active_attempt=attempt["attempt_id"]
    st.session_state.status_notice="Evaluation saved to your local progress database."

@st.cache_data
def load_bank() -> dict:
    if not CHALLENGES_PATH.exists():
        source=SOURCE_PATH if SOURCE_PATH.exists() else CHALLENGES_PATH.parent / "final.json"
        if not source.exists(): raise FileNotFoundError("Working challenge bank is missing")
        validate_file(source,CHALLENGES_PATH,VALIDATION_REPORT_PATH)
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
    st.caption("Add challenges to your current bank or replace the bank. The uploaded file and the previous active bank are archived before applying changes.")
    try:
        current_report=json.loads(VALIDATION_REPORT_PATH.read_text(encoding="utf-8"))
    except (OSError,json.JSONDecodeError):
        _,current_report=validate_bank(current_bank)
    st.subheader("Current bank validation")
    summary=st.columns(3)
    summary[0].metric("Challenges",current_report.get("normalized_challenge_count",len(current_bank.get("challenges",[]))))
    summary[1].metric("Validation findings",current_report.get("issue_count",0))
    summary[2].metric("Usable challenges",current_report.get("valid_challenges",len(current_bank.get("challenges",[]))))
    render_validation_issues(current_report)
    st.divider()
    upload_key=f"challenge_bank_upload_{st.session_state.get('challenge_bank_upload_generation',0)}"
    uploaded=st.file_uploader("Upload a challenge bank JSON file",type=["json"],key=upload_key)
    mode=st.radio("Import action",["Add challenges to current bank","Replace current bank"],horizontal=True,key="challenge_bank_import_mode")
    if not uploaded: return
    payload=uploaded.getvalue()
    try:
        incoming=json.loads(payload.decode("utf-8"))
        if not isinstance(incoming,dict) or not isinstance(incoming.get("challenges"),list):
            raise ValueError("Expected a JSON object containing a challenges array.")
        incoming_normalized,incoming_report=validate_bank(incoming)
        if not incoming_normalized["challenges"]:
            raise ValueError("The uploaded file contains no challenge objects.")
        candidate=incoming_normalized
        if mode=="Add challenges to current bank":
            candidate=merge_banks(current_bank,incoming_normalized)
        candidate,candidate_report=validate_bank(candidate)
    except (UnicodeDecodeError,json.JSONDecodeError,ValueError,TypeError,AttributeError) as exc:
        st.error(f"Could not prepare this challenge bank: {exc}")
        if "incoming_report" in locals():
            st.subheader("Uploaded file validation")
            render_validation_issues(incoming_report)
        return
    st.subheader("Preview before applying")
    summary=st.columns(3)
    summary[0].metric("Challenges after import",candidate_report["normalized_challenge_count"])
    summary[1].metric("Usable challenges",candidate_report["valid_challenges"])
    summary[2].metric("Validation findings",candidate_report["issue_count"])
    render_validation_issues(candidate_report)
    if candidate_report.get("duplicate_ids"):
        st.error("Resolve duplicate or missing challenge IDs before applying this bank.")
        return
    if candidate_report.get("issue_count",0):
        st.warning("This bank has validation findings. Review them above; findings will remain in the saved report.")
    if st.button("Apply challenge bank",type="primary",key="apply_challenge_bank"):
        try:
            archive_import(payload,uploaded.name)
            archive_active_source()
            active_payload=payload if mode=="Replace current bank" else (json.dumps(candidate,ensure_ascii=False,indent=2)+"\n").encode("utf-8")
            write_active_source(active_payload)
            validate_file(SOURCE_PATH,CHALLENGES_PATH,VALIDATION_REPORT_PATH)
            load_bank.clear()
            st.session_state.challenge_bank_upload_generation=st.session_state.get("challenge_bank_upload_generation",0)+1
            st.session_state.bank_manager_notice=f"Challenge bank applied successfully using {mode.lower()}."
            st.rerun()
        except Exception as exc:
            logging.exception("Could not apply uploaded challenge bank")
            st.error(f"The challenge bank could not be applied: {exc}")

try:
    bank=load_bank(); challenges=bank["challenges"]; safe_init()
except Exception as exc:
    logging.exception("Application startup failed"); st.error(f"The challenge bank could not be loaded. Check data/challenges.json and the validation report. Details: {exc}"); st.stop()

attempts=list_attempts(DB_PATH); stats=overview(attempts); paths=bank.get("bank",{}).get("learning_paths",[])
st.title("Data Engineering Practice Lab")
st.caption("A local, structured practice space. Your answers and progress stay in this folder.")
page=st.sidebar.radio("Navigate",["Practice","Progress","Challenge Bank"])
st.sidebar.divider()
families=["All families"]+sorted({challenge_family(c["id"]) for c in challenges})
types=["All types"]+sorted({c.get("type","Other") for c in challenges})
path_names=["All paths"]+[p["name"] for p in paths]
family=st.sidebar.selectbox("Challenge family",families); ctype=st.sidebar.selectbox("Challenge type",types)
difficulty=st.sidebar.selectbox("Difficulty",["Any",1,2,3,4,5]); max_minutes=st.sidebar.number_input("Maximum estimated time (minutes)",min_value=10,max_value=600,value=180,step=10)
path=st.sidebar.selectbox("Learning path",path_names); exclude_completed=st.sidebar.checkbox("Exclude completed challenges",value=False); include_attempted=st.sidebar.checkbox("Include previously attempted challenges",value=True)
settings={"preferred_difficulty":difficulty if isinstance(difficulty,int) else 3,"maximum_session_time":max_minutes,"last_learning_path":path,"exclude_completed":exclude_completed}
for k,v in settings.items(): save_setting(DB_PATH,k,v)
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
    st.header("Your progress")
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
        topic_rows=weak_topic_summary(attempts)
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
        recommended=select_challenge(challenges,attempts,adaptive=True,weak_topics=[topic_rows[0]["topic"]],**filters)
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
    st.header("Choose a practice mode")
    action_cols=st.columns(4)
    actions=["Daily Scenario","Complete Case Study","Review Weak Area","Surprise Me"]
    for i,name in enumerate(actions):
        if action_cols[i].button(name,use_container_width=True):
            st.session_state.mode=name
            st.session_state.pop("active_challenge",None)
            st.session_state.pop("active_attempt",None)
            st.rerun()
    mode=st.session_state.get("mode","Daily Scenario")
    candidate_pool=pool
    if mode=="Daily Scenario": candidate_pool=[c for c in pool if challenge_family(c["id"])=="SCN"] or pool
    elif mode=="Complete Case Study": candidate_pool=[c for c in pool if challenge_family(c["id"])=="CASE"] or pool
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
    if st.session_state.get("active_challenge") not in {c["id"] for c in candidate_pool} and candidate_pool:
        selected_challenge=select_challenge(candidate_pool,attempts,preferred_difficulty=settings["preferred_difficulty"],adaptive=mode=="Review Weak Area",weak_topics=[weak_topic] if weak_topic else None,seed=None)
        st.session_state.active_challenge=selected_challenge["id"] if selected_challenge else None
    active_id=st.session_state.get("active_challenge")
    with st.expander("Reopen a previous attempt",expanded=False):
        options=[a for a in attempts if a.get("status") in ("Not started","In progress","Completed","Evaluated")]
        if options:
            labels={f"{a['challenge_id']} · {a['status']} · {a['updated_at'][:10]}":a for a in options}
            selected=st.selectbox("Saved attempts",list(labels))
            if st.button("Open saved attempt"): st.session_state.active_challenge=labels[selected]["challenge_id"]; st.session_state.active_attempt=labels[selected]["attempt_id"]; st.rerun()
        else: st.caption("Your saved attempts will be listed here.")
    if active_id in challenge_by_id:
        c=challenge_by_id[active_id]; saved= get_attempt(DB_PATH,st.session_state.get("active_attempt",0)) if st.session_state.get("active_attempt") else None
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
        attempt_data=saved or next((a for a in attempts if a["challenge_id"]==c["id"] and a["status"] in ("Not started","In progress")),None)
        if not attempt_data:
            st.info("This is a preview. Starting it will add it to In Progress; choosing a practice mode alone won’t create an attempt.")
            if st.button("Start challenge",type="primary",key=f"start_{c['id']}"):
                started_at=now()
                attempt_id=save_attempt(DB_PATH,{"challenge_id":c["id"],"status":"In progress","started_at":started_at,"updated_at":started_at})
                st.session_state.active_attempt=attempt_id
                st.rerun()
            st.stop()
        aid=attempt_data.get("attempt_id") if attempt_data else None
        key=f"answer_{aid or c['id']}"
        started=(attempt_data or {}).get("started_at") or now()
        st.caption(f"Started: {started} · Elapsed: {max(0,int((datetime.now(timezone.utc)-datetime.fromisoformat(started)).total_seconds()//60))} min")
        answer=st.text_area("Your solution",value=st.session_state.get(key,(attempt_data or {}).get("answer","")),height=300,key=key,placeholder="Work through the tasks and record your reasoning here…")
        status_key=f"status_{aid}"
        if status_key not in st.session_state:
            initial_status=(attempt_data or {}).get("status","In progress")
            st.session_state[status_key]=initial_status if initial_status in ("Not started","In progress","Completed","Evaluated") else "In progress"
        status_value=st.selectbox("Attempt status",["Not started","In progress","Completed","Evaluated"],key=status_key)
        confidence=st.slider("Confidence",1,5,int((attempt_data or {}).get("confidence") or 3))
        hints_used=(attempt_data or {}).get("hints_used",[]); complications_used=(attempt_data or {}).get("complications_used",[])
        latest={**attempt_data,"attempt_id":aid,"challenge_id":c["id"],"status":status_value,"started_at":started,"updated_at":now(),"answer":answer,"confidence":confidence,"hints_used":hints_used,"complications_used":complications_used}
        save_attempt(DB_PATH,latest)
        if status_value != "Not started":
            st.button("Move to Not started",key=f"remove_status_{aid}",on_click=move_attempt_to_not_started,args=(latest,))
        elif status_value == "Not started":
            st.caption("This attempt is kept as a draft and is excluded from In Progress and completed totals.")
        with st.expander("Optional hint (unlocks progressively)"):
            if len(hints_used)<3 and st.button(f"Reveal Hint {len(hints_used)+1}",key=f"hint_{c['id']}_{aid}"):
                _,hints_used=unlock_next(c.get("hints",[]),hints_used); latest["hints_used"]=hints_used; save_attempt(DB_PATH,latest); st.session_state[f"show_hint_{aid}"]=True
            revealed=st.session_state.get(f"show_hint_{aid}",False)
            if revealed and hints_used: st.info(c.get("hints",[])[hints_used[-1]-1] if len(c.get("hints",[]))>=hints_used[-1] else "No hint supplied for this level.")
        with st.expander("Make it harder · optional stretch work"):
            next_ix=len(complications_used)
            if next_ix<len(c.get("follow_up_complications",[])) and st.button(f"Open complication {next_ix+1}",key=f"comp_{aid}"):
                _,complications_used=unlock_next(c.get("follow_up_complications",[]),complications_used); latest["complications_used"]=complications_used; save_attempt(DB_PATH,latest); st.session_state[f"show_comp_{aid}"]=True
            if st.session_state.get(f"show_comp_{aid}") and complications_used: st.info(c["follow_up_complications"][complications_used[-1]-1])
            st.caption("Stretch work is optional and is not included in the base score unless you choose to include it in your answer.")
        p=student_prompt(c,bank.get("prompt_templates",{}).get("student",""))
        with st.expander("Generate student prompt"):
            st.code(p,language="text"); st.download_button("Download student prompt",p,file_name=f"{c['id']}_student_prompt.txt",mime="text/plain")
        st.button("Mark Complete",type="primary",key=f"complete_{aid}",on_click=mark_attempt_complete,args=(latest,started))
        if (attempt_data or {}).get("status") in ("Completed","Evaluated") or st.session_state.get("active_attempt")==aid and get_attempt(DB_PATH,aid).get("status") in ("Completed","Evaluated"):
            rubric=bank.get("rubrics",{}).get(c.get("rubric_ref"),{})
            ep=evaluation_prompt(c,answer,rubric,bank.get("prompt_templates",{}).get("evaluation",""),[c["follow_up_complications"][i-1] for i in complications_used if i<=len(c.get("follow_up_complications",[]))],bank.get("mistake_categories",[]))
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
                topic_options=sorted(bank.get("bank",{}).get("topic_index",{})); mistake_options=bank.get("mistake_categories",[])
                weak=st.multiselect("Weak topics",topic_options,default=(attempt_data or {}).get("weak_topics",[]))
                mistakes=st.multiselect("Mistake categories",mistake_options,default=(attempt_data or {}).get("mistake_categories",[]))
                feedback=st.text_area("Evaluator feedback",value=(attempt_data or {}).get("evaluation_feedback", "")); notes=st.text_area("Personal notes",value=(attempt_data or {}).get("personal_notes", ""))
                st.button("Save evaluation",key=f"eval_{aid}",on_click=save_evaluation_result,args=(latest,total,rubric_scores if category_mode else saved_rubric_scores,weak,mistakes,feedback,notes))
                if c.get("review_exercise"): st.info("Focused review exercise: "+c["review_exercise"])
