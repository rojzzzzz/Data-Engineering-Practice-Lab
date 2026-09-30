"""The locally bundled Streamlit v2 ERD component."""

from pathlib import Path
import streamlit as st

from src.diagrams import empty_diagram, validate_diagram

ASSETS = Path(__file__).parent / "erd_assets"


@st.cache_resource
def _component():
    return st.components.v2.component(
        "study_helper_erd",
        html='<div class="erd-root"></div>',
        js="/* bundled editor */\n"
        + (ASSETS / "editor.js").read_text(encoding="utf-8"),
        css="/* bundled editor */\n"
        + (ASSETS / "editor.css").read_text(encoding="utf-8"),
    )


def erd_editor(attempt_id: int, kind: str, diagram: dict | None):
    value = (
        validate_diagram(diagram, kind) if diagram is not None else empty_diagram(kind)
    )
    result = _component()(
        key=f"erd_{attempt_id}",
        data={"attemptId": attempt_id, "kind": kind, "diagram": value},
        default={"diagram": value},
        on_diagram_change=lambda: None,
        height=620,
    )
    return result.diagram
