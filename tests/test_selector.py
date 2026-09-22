from src.selector import eligible_challenges, select_challenge
import json
from pathlib import Path

def bank():
    return [{"id":"SCN-1","type":"DESIGN","difficulty":2,"estimated_minutes":20,"internal":{"topics":["x"]}},{"id":"SQL-1","type":"SQL","difficulty":4,"estimated_minutes":45,"internal":{"topics":["y"]}}]

def test_filters():
    assert [c["id"] for c in eligible_challenges(bank(),family="SCN",max_minutes=30)]==["SCN-1"]
    assert eligible_challenges(bank(),challenge_type="SQL",difficulty=2)==[]

def test_seed_and_seen_avoidance():
    a=select_challenge(bank(),seed=4); b=select_challenge(bank(),seed=4)
    assert a["id"]==b["id"]
    choice=select_challenge(bank(),[{"challenge_id":a["id"]}],seed=4)
    assert choice["id"]!=a["id"]

def test_adaptive_selection_is_valid_and_deterministic():
    history=[{"challenge_id":"SCN-1","score":40,"weak_topics":["x"]},{"challenge_id":"SCN-1","score":50,"weak_topics":["x"]}]
    c=select_challenge(bank(),history,adaptive=True,weak_topics=["x"],seed=9)
    assert c["id"] in {"SCN-1","SQL-1"}

def test_new_bank_families_are_selectable():
    bank_data=json.loads((Path(__file__).resolve().parents[1]/"data"/"challenges.json").read_text(encoding="utf-8"))
    candidates=eligible_challenges(bank_data["challenges"],family="DM")
    assert len(candidates)==6
    assert all(c["id"].startswith("DM-") for c in candidates)
