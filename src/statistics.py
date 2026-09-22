from __future__ import annotations
from collections import defaultdict
from datetime import datetime, timezone
from typing import Any

def weak_topic_summary(attempts: list[dict[str,Any]]) -> list[dict[str,Any]]:
    stats=defaultdict(lambda:{"scores":[],"mistakes":0,"confidence":[],"last":None,"attempts":0})
    for a in attempts:
        for topic in a.get("weak_topics",[]) or []:
            x=stats[topic]; x["attempts"]+=1
            if a.get("score") is not None: x["scores"].append(float(a["score"]))
            x["mistakes"]+=len(a.get("mistake_categories",[]) or [])
            if a.get("confidence") is not None: x["confidence"].append(float(a["confidence"]))
            x["last"]=max(x["last"] or "",a.get("updated_at") or "")
    out=[]
    for topic,x in stats.items():
        avg=sum(x["scores"])/len(x["scores"]) if x["scores"] else 65
        conf=sum(x["confidence"])/len(x["confidence"]) if x["confidence"] else 3
        try:
            practiced=datetime.fromisoformat(x["last"].replace("Z","+00:00"))
            if practiced.tzinfo is None: practiced=practiced.replace(tzinfo=timezone.utc)
            days_since=max(0,(datetime.now(timezone.utc)-practiced.astimezone(timezone.utc)).days)
        except (ValueError, TypeError, AttributeError): days_since=0
        priority=(100-avg)*.55+x["mistakes"]*4+(5-conf)*3+min(days_since,30)*.2
        out.append({"topic":topic,"attempts":x["attempts"],"average_score":round(avg,1) if x["scores"] else None,"mistake_count":x["mistakes"],"confidence_average":round(conf,1) if x["confidence"] else None,"last_practiced":x["last"],"review_priority":round(priority,1)})
    return sorted(out,key=lambda r:r["review_priority"],reverse=True)

def overview(attempts: list[dict[str,Any]]) -> dict[str,Any]:
    completed={a["challenge_id"] for a in attempts if a.get("status") in ("Completed","Evaluated")}
    scores=[float(a["score"]) for a in attempts if a.get("score") is not None]
    return {"completed":len(completed),"in_progress":len({a["challenge_id"] for a in attempts if a.get("status")=="In progress"}),"average_score":round(sum(scores)/len(scores),1) if scores else None,"score_count":len(scores),"weak_topics":weak_topic_summary(attempts)}
