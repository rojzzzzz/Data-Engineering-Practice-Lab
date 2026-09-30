"""Locally bundled CodeMirror Streamlit component."""
from pathlib import Path
import streamlit as st


@st.cache_resource
def _component():
    assets = Path(__file__).parent / "sql_assets"
    return st.components.v2.component("study_helper_sql", html='<div class="sql-root"></div>',
        js="/* bundled SQL editor */\n" + (assets / "editor.js").read_text(encoding="utf-8"), css="/* bundled SQL editor */\n" + (assets / "editor.css").read_text(encoding="utf-8"))


def sql_editor(attempt_id, exercise, exercise_hash, workspace, busy, active):
    return _component()(key=f"sql_{attempt_id}", data={
        "attemptId": attempt_id, "exerciseHash": exercise_hash, "drafts": workspace["drafts"],
        "savedDrafts": workspace["drafts"], "active": active,
        "tasks": exercise["tasks"], "schema": {t["name"]: [c["name"] for c in t["columns"]] for t in exercise["tables"]}, "busy": busy,
    }, default={"event": None}, on_event_change=lambda: None, height=600).event
