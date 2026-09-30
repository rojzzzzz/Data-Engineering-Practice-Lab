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
    with st.expander(f"Dataset reference · {len(exercise['tables'])} tables · schema, samples & DDL", expanded=False):
        st.caption("Explore the supplied practice data. The editor also keeps the schema beside your query.")
        tables = {table["name"]: table for table in exercise["tables"]}
        name = st.selectbox("Browse a table", list(tables), key="sql_schema_" + fingerprint(exercise)[:12])
        table = tables[name]
        rows = exercise["visible_fixture"][name]
        st.write(table["description"])
        st.caption(f"{len(rows):,} supplied rows · {len(table['columns'])} columns · DuckDB")
        structure, samples, definition = st.tabs(["Columns & keys", "Sample data", "Schema DDL"])
        with structure:
            st.dataframe([{"Column": c["name"], "Type": c["type"], "Nullable": "Yes" if c["nullable"] else "No", "Documented key": c.get("key", "") or "—"} for c in table["columns"]], hide_index=True, width="stretch")
        with samples:
            if rows:
                st.dataframe([dict(zip([c["name"] for c in table["columns"]], row)) for row in rows[:25]], hide_index=True, width="stretch")
                st.caption(f"Showing {min(25, len(rows))} of {len(rows)} rows.")
            else:
                st.info("This table has no rows in the visible fixture.")
        with definition:
            schema = ddl(exercise)
            st.code(schema, language="sql")
            st.download_button("Download schema DDL", schema, "exercise_schema.sql", "text/plain")


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
            st.caption("Results appear here after Run. Use the dataset explorer to insert a SELECT, or write your own query. Nothing executes while you type.")
            return
        result = last["result"]
        if not result.get("ok"):
            st.error(result["error"])
        elif last["operation"] in ("run", "explain"):
            stale = last["exercise_hash"] != exercise_hash or last["drafts"].get(last["active"]) != workspace["drafts"].get(last["active"])
            revision = fingerprint(last["sql"])[:8]
            title = next((t["title"] for t in exercise["tasks"] if t["id"] == last["active"]), "Scratch")
            st.subheader("Execution plan" if last["operation"] == "explain" else "Query results")
            st.caption(f"{title} · revision {revision}")
            if stale:
                st.warning("Outdated result — the query or exercise has changed. Run again to refresh.")
            cols = st.columns(3)
            cols[0].metric("Rows displayed", f"{len(result['rows']):,}")
            cols[1].metric("Execution time", f"{result['elapsed_ms']:.1f} ms", help="Query execution and result fetch time; excludes worker startup and fixture preparation.")
            cols[2].metric("Columns", len(result["columns"]))
            with st.expander("Executed SQL & result types"):
                st.code(last["sql"], language="sql")
                st.dataframe([{"Column": n, "Type": t} for n, t in zip(result["columns"], result["types"])], hide_index=True, width="stretch")
            if result["truncated"]:
                st.warning("Result truncated at 1,000 rows or 2 MB. Download contains only the displayed rows.")
            if last["operation"] == "explain":
                st.code("\n".join(str(cell) for row in result["rows"] for cell in row), language="text")
            else:
                # Positional columns preserve duplicate names in arbitrary scratch queries.
                import pandas as pd
                names = result["columns"]
                labels = names if len(set(names)) == len(names) else [f"{i+1}: {name}" for i, name in enumerate(names)]
                frame = pd.DataFrame(result["rows"], columns=labels)
                st.dataframe(frame, hide_index=True, width="stretch")
                if not result["rows"]:
                    st.info("Query completed successfully and returned no rows.")
            contents = io.StringIO()
            writer = csv.writer(contents)
            writer.writerow(result["columns"])
            writer.writerows(result["rows"])
            st.download_button("Download displayed result", contents.getvalue(), "query_result.csv", "text/csv")
    workspace_fragment()
