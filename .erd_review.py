import streamlit as st
from src.erd_component import erd_editor
from src.diagrams import empty_diagram
st.set_page_config(layout="wide")
if "draft" not in st.session_state:
    value = empty_diagram("logical_erd")
    value["entities"] = [{"id": name, "name": name, "role": "table", "annotation": "", "position": {"x": index * 320, "y": 30}, "fields": []} for index, name in enumerate(["Customers", "Orders"])]
    value["relationships"] = [{"id": "r", "source": "Customers", "target": "Orders", "source_handle": "bottom", "target_handle": "top", "label": "places", "source_cardinality": "one", "target_cardinality": "many", "source_optional": False, "target_optional": True}]
    st.session_state.draft = value
value = erd_editor(1, "logical_erd", st.session_state.draft)
if value is not None:
    st.session_state.draft = value
st.json(st.session_state.draft)
