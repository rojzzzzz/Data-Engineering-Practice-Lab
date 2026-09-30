from __future__ import annotations
import random
from collections import Counter
from typing import Any

def eligible_challenges(challenges: list[dict[str,Any]], family: str|None=None, challenge_type: str|None=None, difficulty: int|None=None, max_minutes: int|None=None, learning_path: str|None=None, paths: list[dict[str,Any]]|None=None) -> list[dict[str,Any]]:
    path_ids = None
    if learning_path and learning_path != "All paths":
        path_ids = set(next((p.get("challenges",[]) for p in (paths or []) if p.get("name")==learning_path), []))
    return [c for c in challenges if (not family or family=="All families" or c.get("id","").split("-")[0]==family) and (not challenge_type or challenge_type=="All types" or c.get("type")==challenge_type) and (difficulty is None or difficulty==0 or c.get("difficulty")==difficulty) and (max_minutes is None or c.get("estimated_minutes",0)<=max_minutes) and (path_ids is None or c.get("id") in path_ids)]

def select_challenge(challenges: list[dict[str,Any]], attempts: list[dict[str,Any]]|None=None, *, seed: int|None=None, preferred_difficulty: int|None=None, adaptive: bool=False, weak_topics: list[str]|None=None, **filters: Any) -> dict[str,Any]|None:
    pool=eligible_challenges(challenges,**filters)
    if not pool: return None
    hist=attempts or []; seen={a.get("challenge_id") for a in hist}
    if len(pool)>1:
        unseen=[c for c in pool if c.get("id") not in seen]
        if unseen: pool=unseen
    rng=random.Random(seed)
    if not adaptive or len(hist)<2:
        if preferred_difficulty:
            matched=[c for c in pool if c.get("difficulty")==preferred_difficulty]
            if matched: pool=matched
        return rng.choice(pool)
    topic_scores={}
    for a in hist:
        score=a.get("score")
        if score is None: continue
        for t in a.get("weak_topics",[]) or []: topic_scores[t]=min(1.0,topic_scores.get(t,0)+max(0,(70-float(score))/70))
    weak=set(weak_topics or ()) | {t for t,v in topic_scores.items() if v>0}
    counts = Counter(a.get("challenge_id") for a in hist)
    latest = {}
    for index, attempt in enumerate(hist, 1):
        latest.setdefault(attempt.get("challenge_id"), index)
    def score(c: dict[str,Any]) -> float:
        topics=set(c.get("internal",{}).get("topics",[])); weakness=(len(topics&weak)/max(1,len(topics))) if weak else 0
        # History is newest first: use the most recent matching attempt.
        recency=latest.get(c.get("id"),len(hist))/max(1,len(hist))
        coverage=1/(1+counts[c.get("id")])
        target=preferred_difficulty or 3; diff=max(0,1-abs(c.get("difficulty",1)-target)/5)
        return .4*weakness+.25*recency+.15*coverage+.1*diff+.1*rng.random()
    return max(pool,key=score)
