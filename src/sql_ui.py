"""SQL UI integration. Private fixtures and reference SQL stay on the server."""
from __future__ import annotations

import csv
import io
import json
import streamlit as st

from src.database import get_attempt, save_sql_workspace
from src.sql_component import sql_editor
from src.sql_models import answer_hash, ddl, fingerprint, new_workspace, validate_workspace
from src.sql_runner import SQLJob


def stop_sql_job():
    job = st.session_state.pop("sql_job", None)
    if job is not None:
        job.cancel()


def schema_browser(exercise):
    with st.expander("SQL schema and sample data", expanded=True):
        st.caption("DuckDB 1.5.5 · Small practice dataset · SELECT queries only")
        for table in exercise["tables"]:
            rows = exercise["visible_fixture"][table["name"]]
            with st.expander(f"{table['name']} · {len(rows)} rows"):
                st.write(table["description"])
                st.dataframe(table["columns"], hide_index=True, width="stretch")
                if rows:
                    st.dataframe([dict(zip([c["name"] for c in table["columns"]], row)) for row in rows[:25]], hide_index=True, width="stretch")
                else:
                    st.caption("This table has no rows.")
        schema = ddl(exercise)
        st.code(schema, language="sql")
        st.download_button("Download schema", schema, "exercise_schema.sql", "text/plain")


def render_workspace(database, attempt, exercise):
    aid = attempt["attempt_id"]
    exercise_hash = fingerprint(exercise)
    if st.session_state.get("sql_owner") != aid:
        stop_sql_job()
        st.session_state.sql_owner = aid
        st.session_state.pop("sql_last_result", None)
        st.session_state.pop("sql_event_id", None)
        st.session_state.sql_active = exercise["tasks"][0]["id"]
    busy = st.session_state.get("sql_job") is not None

    @st.fragment(run_every=0.3 if busy else None)
    def workspace_fragment():
        current = get_attempt(database, aid)
        if current is None:
            st.error("Attempt no longer exists.")
            stop_sql_job()
            return
        workspace = current.get("sql_workspace") or new_workspace(exercise)
        workspace = validate_workspace(workspace)
        for key, text in new_workspace(exercise)["drafts"].items():
            workspace["drafts"].setdefault(key, text)
        job = st.session_state.get("sql_job")
        if job is not None and job.result is not None:
            request = st.session_state.sql_request
            result = job.result
            if job.operation == "check" and result.get("ok"):
                workspace["assessment"] = {"exercise_hash": request["exercise_hash"], "query_hash": request["query_hash"], "results": result["results"]}
                save_sql_workspace(database, aid, workspace)
            st.session_state.sql_last_result = {**request, "result": result}
            st.session_state.pop("sql_job", None)
            st.rerun()
        event = sql_editor(aid, exercise, exercise_hash, workspace, job is not None, st.session_state.sql_active)
        if event and event.get("id") != st.session_state.get("sql_event_id"):
            st.session_state.sql_event_id = event.get("id")
            try:
                updated = validate_workspace({"version": 1, "drafts": event.get("drafts"), "assessment": workspace.get("assessment")})
                expected = {t["id"] for t in exercise["tasks"]} | {"scratch"}
                if not expected.issubset(updated["drafts"]):
                    raise ValueError("Answer tabs are missing from the draft")
                if updated != workspace:
                    save_sql_workspace(database, aid, updated)
                workspace = updated
                active = event.get("active")
                if active not in expected:
                    raise ValueError("Unknown answer tab")
                st.session_state.sql_active = active
                action = event.get("action")
                if action == "cancel":
                    stop_sql_job()
                    st.session_state.sql_last_result = {"operation": "cancel", "result": {"ok": False, "error": "Cancelled."}}
                    st.rerun()
                if action in ("run", "explain", "check") and job is None:
                    selection = event.get("selection", "")
                    query = selection if isinstance(selection, str) and selection.strip() else workspace["drafts"][active]
                    st.session_state.sql_request = {"operation": action, "active": active, "sql": query,
                        "drafts": dict(workspace["drafts"]), "query_hash": answer_hash(exercise, workspace["drafts"]), "exercise_hash": exercise_hash}
                    st.session_state.sql_job = SQLJob(exercise, action, sql=query, drafts=workspace["drafts"])
                    st.rerun()
                if action == "save":
                    # Acknowledge the newly persisted draft in the editor payload.
                    st.rerun(scope="fragment")
            except (ValueError, TypeError) as exc:
                st.error(str(exc))
        assessment = workspace.get("assessment")
        if assessment:
            outdated = assessment["exercise_hash"] != exercise_hash or assessment["query_hash"] != answer_hash(exercise, workspace["drafts"])
            st.markdown("**Correctness checks" + (" · Outdated**" if outdated else "**"))
            titles = {t["id"]: t["title"] for t in exercise["tasks"]}
            st.dataframe([{"Answer": titles.get(k, k), "Result": "Passed" if v == "passed" else "Failed", "Category": v} for k, v in assessment["results"].items()], hide_index=True, width="stretch")
            st.caption("Assessment-style feedback. Checks do not award rubric points for reasoning or production performance.")
        last = st.session_state.get("sql_last_result")
        if not last:
            return
        result = last["result"]
        if not result.get("ok"):
            st.error(result["error"])
        elif last["operation"] in ("run", "explain"):
            stale = last["exercise_hash"] != exercise_hash or last["drafts"].get(last["active"]) != workspace["drafts"].get(last["active"])
            revision = fingerprint(last["sql"])[:8]
            st.markdown(f"**{'Execution plan' if last['operation']=='explain' else 'Query results'} · revision {revision}" + (" · Outdated**" if stale else "**"))
            st.caption(f"{len(result['rows'])} rows displayed · {result['elapsed_ms']:.1f} ms execution · " + ", ".join(f"{n}: {t}" for n, t in zip(result["columns"], result["types"])))
            if result["truncated"]:
                st.warning("Result truncated at 1,000 rows or 2 MB. Download contains only the displayed rows.")
            if last["operation"] == "explain":
                st.code("\n".join(str(cell) for row in result["rows"] for cell in row), language="text")
            else:
                # Positional columns preserve duplicate names in arbitrary scratch queries.
                import pandas as pd
                frame = pd.DataFrame(result["rows"], columns=[f"{i+1}: {name}" for i, name in enumerate(result["columns"])])
                st.dataframe(frame, hide_index=True, width="stretch")
            contents = io.StringIO()
            writer = csv.writer(contents)
            writer.writerow(result["columns"])
            writer.writerows(result["rows"])
            st.download_button("Download displayed result", contents.getvalue(), "query_result.csv", "text/csv")
    workspace_fragment()
