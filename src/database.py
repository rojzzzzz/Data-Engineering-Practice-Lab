from __future__ import annotations
import json, sqlite3
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

def connect(path: Path|str) -> sqlite3.Connection:
    p=Path(path); p.parent.mkdir(parents=True,exist_ok=True)
    con=sqlite3.connect(p,timeout=10); con.row_factory=sqlite3.Row; return con

def init_db(path: Path|str) -> None:
    with connect(path) as con:
        con.executescript("""CREATE TABLE IF NOT EXISTS attempts (
            attempt_id INTEGER PRIMARY KEY AUTOINCREMENT, challenge_id TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Not started', started_at TEXT, updated_at TEXT NOT NULL, completed_at TEXT, evaluated_at TEXT, answer TEXT NOT NULL DEFAULT '', score REAL, confidence INTEGER, minutes_taken REAL, hints_used TEXT NOT NULL DEFAULT '[]', complications_used TEXT NOT NULL DEFAULT '[]', weak_topics TEXT NOT NULL DEFAULT '[]', mistake_categories TEXT NOT NULL DEFAULT '[]', rubric_scores TEXT NOT NULL DEFAULT '{}', evaluation_feedback TEXT NOT NULL DEFAULT '', personal_notes TEXT NOT NULL DEFAULT '');
            CREATE INDEX IF NOT EXISTS idx_attempts_challenge ON attempts(challenge_id);
            CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);""")
        columns={row["name"] for row in con.execute("PRAGMA table_info(attempts)").fetchall()}
        if "rubric_scores" not in columns:
            con.execute("ALTER TABLE attempts ADD COLUMN rubric_scores TEXT NOT NULL DEFAULT '{}' ")

def save_attempt(path: Path|str, data: dict[str,Any]) -> int:
    fields=["challenge_id","status","started_at","updated_at","completed_at","evaluated_at","answer","score","confidence","minutes_taken","hints_used","complications_used","weak_topics","mistake_categories","rubric_scores","evaluation_feedback","personal_notes"]
    payload={k:data.get(k) for k in fields}
    for key in ("status", "updated_at", "answer", "evaluation_feedback", "personal_notes"):
        if payload[key] is None: payload[key] = {"status":"Not started", "updated_at":"", "answer":"", "evaluation_feedback":"", "personal_notes":""}[key]
    for k in ("hints_used","complications_used","weak_topics","mistake_categories","rubric_scores"):
        if not isinstance(payload[k],str): payload[k]=json.dumps(payload[k] or ({} if k=="rubric_scores" else []))
    with connect(path) as con:
        if data.get("attempt_id"):
            assignments=", ".join(f"{f} = ?" for f in fields)
            con.execute(f"UPDATE attempts SET {assignments} WHERE attempt_id = ?",[payload[f] for f in fields]+[data["attempt_id"]])
            return int(data["attempt_id"])
        cols=", ".join(fields); marks=", ".join("?" for _ in fields)
        cur=con.execute(f"INSERT INTO attempts ({cols}) VALUES ({marks})",[payload[f] for f in fields]); return int(cur.lastrowid)

def list_attempts(path: Path|str, challenge_id: str|None=None) -> list[dict[str,Any]]:
    with connect(path) as con:
        rows=con.execute("SELECT * FROM attempts WHERE (? IS NULL OR challenge_id = ?) ORDER BY updated_at DESC, attempt_id DESC",(challenge_id,challenge_id)).fetchall()
    result=[]
    for row in rows:
        item=dict(row)
        for key in ("hints_used","complications_used","weak_topics","mistake_categories","rubric_scores"):
            try: item[key]=json.loads(item[key] or ("{}" if key=="rubric_scores" else "[]"))
            except json.JSONDecodeError: item[key]={} if key=="rubric_scores" else []
        result.append(item)
    return result

def get_attempt(path: Path|str, attempt_id: int) -> dict[str,Any]|None:
    return next((a for a in list_attempts(path) if a["attempt_id"]==attempt_id),None)

def save_setting(path: Path|str, key: str, value: Any) -> None:
    with connect(path) as con: con.execute("INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",(key,json.dumps(value)))

def get_settings(path: Path|str) -> dict[str,Any]:
    with connect(path) as con: rows=con.execute("SELECT key,value FROM settings").fetchall()
    return {r["key"]:json.loads(r["value"]) for r in rows}

def export_progress(path: Path|str) -> dict[str,Any]:
    return {"format":"data-engineering-practice-lab-progress","version":1,"exported_at":datetime.now(timezone.utc).isoformat(timespec="seconds"),"attempts":list_attempts(path),"settings":get_settings(path)}

def merge_progress(path: Path|str, backup: dict[str,Any]) -> dict[str,int]:
    if not isinstance(backup,dict) or backup.get("format")!="data-engineering-practice-lab-progress" or backup.get("version")!=1:
        raise ValueError("This file is not a supported Practice Lab progress backup.")
    rows=backup.get("attempts",[]); settings=backup.get("settings",{})
    if not isinstance(rows,list) or not isinstance(settings,dict):
        raise ValueError("The backup must contain an attempts list and a settings object.")
    allowed_status={"Not started","In progress","Completed","Evaluated"}
    for row in rows:
        if not isinstance(row,dict) or not isinstance(row.get("challenge_id"),str) or not row["challenge_id"]:
            raise ValueError("Every backup attempt must include a challenge_id.")
        if row.get("status") not in allowed_status:
            raise ValueError(f"Unsupported attempt status for {row.get('challenge_id')}.")
        if "rubric_scores" in row and (not isinstance(row["rubric_scores"],dict) or any(not isinstance(value,(int,float)) for value in row["rubric_scores"].values())):
            raise ValueError(f"Invalid rubric scores for {row.get('challenge_id')}.")
    existing=list_attempts(path)
    by_identity={(a.get("challenge_id"),a.get("started_at")):a for a in existing if a.get("started_at")}
    result={"added":0,"updated":0,"unchanged":0}
    for row in rows:
        identity=(row["challenge_id"],row.get("started_at"))
        current=by_identity.get(identity) if identity[1] else None
        imported={key:value for key,value in row.items() if key in {"challenge_id","status","started_at","updated_at","completed_at","evaluated_at","answer","score","confidence","minutes_taken","hints_used","complications_used","weak_topics","mistake_categories","rubric_scores","evaluation_feedback","personal_notes"}}
        if current:
            if (row.get("updated_at") or "") <= (current.get("updated_at") or ""):
                result["unchanged"]+=1
                continue
            imported["attempt_id"]=current["attempt_id"]
            save_attempt(path,imported)
            current.update(imported)
            result["updated"]+=1
        else:
            new_id=save_attempt(path,imported)
            imported["attempt_id"]=new_id
            result["added"]+=1
        if identity[1]: by_identity[identity]=imported
    for key,value in settings.items():
        save_setting(path,str(key),value)
    return result
