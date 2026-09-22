import pytest
from src.bank_manager import merge_banks

def challenge(cid):
    return {"id":cid,"title":cid,"type":"MODEL","difficulty":2,"estimated_minutes":15,"rubric_ref":"model","student":{"scenario":"Scenario","requirements":[],"tasks":[],"constraints":[],"deliverables":[]}}

def test_add_mode_merges_challenges_rubrics_paths_and_topics():
    current={"bank":{"challenge_count":1,"challenge_families":[{"prefix":"A","count":1}],"learning_paths":[{"name":"Core","challenges":["A-1"]}],"topic_index":{"grain":["A-1"]}},"rubrics":{"model":{"correctness":100}},"challenges":[challenge("A-1")]}
    incoming={"bank":{"challenge_families":[{"prefix":"B","count":1}],"learning_paths":[{"name":"Core","challenges":["B-1"]}],"topic_index":{"grain":["B-1"]}},"rubrics":{"model":{"correctness":100},"sql":{"correctness":100}},"challenges":[challenge("B-1")]}
    merged=merge_banks(current,incoming)
    assert [c["id"] for c in merged["challenges"]]==["A-1","B-1"]
    assert "sql" in merged["rubrics"]
    assert merged["bank"]["learning_paths"][0]["challenges"]==["A-1","B-1"]
    assert merged["bank"]["topic_index"]["grain"]==["A-1","B-1"]

def test_add_mode_rejects_id_and_rubric_conflicts():
    current={"bank":{},"rubrics":{"model":{"correctness":100}},"challenges":[challenge("A-1")]}
    with pytest.raises(ValueError,match="Challenge ID conflicts"):
        merge_banks(current,{"bank":{},"rubrics":{},"challenges":[challenge("A-1")]})
    with pytest.raises(ValueError,match="Rubric 'model' differs"):
        merge_banks(current,{"bank":{},"rubrics":{"model":{"correctness":90}},"challenges":[challenge("B-1")]})
