from __future__ import annotations
import json
import math
import sqlite3
from contextlib import contextmanager
from collections.abc import Iterator
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from src.diagrams import validate_diagram
from src.sql_models import validate_workspace


@contextmanager
def connect(path: Path | str) -> Iterator[sqlite3.Connection]:
    """Commit or roll back the operation, and always release the connection."""
    database_path = Path(path)
    database_path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(database_path, timeout=10)
    connection.row_factory = sqlite3.Row
    try:
        with connection:
            yield connection
    finally:
        connection.close()


def init_db(path: Path | str) -> None:
    with connect(path) as con:
        con.executescript(
            """CREATE TABLE IF NOT EXISTS attempts (
            attempt_id INTEGER PRIMARY KEY AUTOINCREMENT, challenge_id TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'Not started', started_at TEXT, updated_at TEXT NOT NULL, completed_at TEXT, evaluated_at TEXT, answer TEXT NOT NULL DEFAULT '', diagram TEXT, score REAL, confidence INTEGER, minutes_taken REAL, hints_used TEXT NOT NULL DEFAULT '[]', complications_used TEXT NOT NULL DEFAULT '[]', weak_topics TEXT NOT NULL DEFAULT '[]', mistake_categories TEXT NOT NULL DEFAULT '[]', rubric_scores TEXT NOT NULL DEFAULT '{}', evaluation_feedback TEXT NOT NULL DEFAULT '', personal_notes TEXT NOT NULL DEFAULT '');
            CREATE INDEX IF NOT EXISTS idx_attempts_challenge ON attempts(challenge_id);
            CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT NOT NULL);"""
        )
        columns = {
            row["name"] for row in con.execute("PRAGMA table_info(attempts)").fetchall()
        }
        if "rubric_scores" not in columns:
            con.execute(
                "ALTER TABLE attempts ADD COLUMN rubric_scores TEXT NOT NULL DEFAULT '{}' "
            )
        if "diagram" not in columns:
            con.execute("ALTER TABLE attempts ADD COLUMN diagram TEXT")
        if "sql_workspace" not in columns:
            con.execute("ALTER TABLE attempts ADD COLUMN sql_workspace TEXT")


ATTEMPT_FIELDS = (
    "challenge_id",
    "status",
    "started_at",
    "updated_at",
    "completed_at",
    "evaluated_at",
    "answer",
    "diagram",
    "sql_workspace",
    "score",
    "confidence",
    "minutes_taken",
    "hints_used",
    "complications_used",
    "weak_topics",
    "mistake_categories",
    "rubric_scores",
    "evaluation_feedback",
    "personal_notes",
)
JSON_DEFAULTS = {
    "hints_used": [],
    "complications_used": [],
    "weak_topics": [],
    "mistake_categories": [],
    "rubric_scores": {},
    "diagram": None,
    "sql_workspace": None,
}
TEXT_DEFAULTS = {
    "status": "Not started",
    "updated_at": "",
    "answer": "",
    "evaluation_feedback": "",
    "personal_notes": "",
}


def _save_attempt(connection: sqlite3.Connection, data: dict[str, Any]) -> int:
    # An ordinary answer/status save must not read and rewrite the diagram.
    fields = [
        field
        for field in ATTEMPT_FIELDS
        if field not in ("diagram", "sql_workspace") or field in data or not data.get("attempt_id")
    ]
    payload = {field: data.get(field) for field in fields}
    for field, default in TEXT_DEFAULTS.items():
        if payload[field] is None:
            payload[field] = default
    for field, default in JSON_DEFAULTS.items():
        if field not in payload:
            continue
        value = payload[field]
        if field in ("diagram", "sql_workspace"):
            if value is not None:
                value = json.loads(value) if isinstance(value, str) else value
                validate = validate_diagram if field == "diagram" else validate_workspace
                payload[field] = json.dumps(validate(value), ensure_ascii=False)
        elif not isinstance(value, str):
            payload[field] = json.dumps(default if value is None else value)
    values = [payload[field] for field in fields]
    if data.get("attempt_id"):
        assignments = ", ".join(f"{field} = ?" for field in fields)
        result = connection.execute(
            f"UPDATE attempts SET {assignments} WHERE attempt_id = ?",
            values + [data["attempt_id"]],
        )
        if result.rowcount != 1:
            raise ValueError("Attempt not found")
        return int(data["attempt_id"])
    columns = ", ".join(fields)
    placeholders = ", ".join("?" for _ in fields)
    result = connection.execute(
        f"INSERT INTO attempts ({columns}) VALUES ({placeholders})", values
    )
    return int(result.lastrowid)


def save_attempt(path: Path | str, data: dict[str, Any]) -> int:
    with connect(path) as connection:
        return _save_attempt(connection, data)


def save_attempt_details(path: Path | str, data: dict[str, Any]) -> int:
    """Save prose/status without overwriting independently saved canvas edits."""
    return save_attempt(
        path, {key: value for key, value in data.items() if key not in ("diagram", "sql_workspace")}
    )


def _decode_attempt(row: sqlite3.Row) -> dict[str, Any]:
    item = dict(row)
    for field, default in JSON_DEFAULTS.items():
        try:
            item[field] = json.loads(item[field]) if item[field] else default
        except json.JSONDecodeError:
            item[field] = default
    return item


def list_attempts(
    path: Path | str, challenge_id: str | None = None, *, include_diagrams: bool = True
) -> list[dict[str, Any]]:
    columns = "*" if include_diagrams else "attempt_id, " + ", ".join(
        field for field in ATTEMPT_FIELDS if field not in ("diagram", "sql_workspace")
    ) + ", NULL AS diagram, NULL AS sql_workspace"
    query = f"SELECT {columns} FROM attempts"
    parameters = ()
    if challenge_id is not None:
        query += " WHERE challenge_id = ?"
        parameters = (challenge_id,)
    query += " ORDER BY updated_at DESC, attempt_id DESC"
    with connect(path) as connection:
        return [_decode_attempt(row) for row in connection.execute(query, parameters)]


def get_attempt(path: Path | str, attempt_id: int) -> dict[str, Any] | None:
    with connect(path) as connection:
        row = connection.execute(
            "SELECT * FROM attempts WHERE attempt_id = ?", (attempt_id,)
        ).fetchone()
    return _decode_attempt(row) if row is not None else None


def save_diagram(path: Path | str, attempt_id: int, diagram: dict[str, Any]) -> None:
    serialized = json.dumps(validate_diagram(diagram), ensure_ascii=False)
    with connect(path) as con:
        result = con.execute(
            "UPDATE attempts SET diagram = ?, updated_at = ? WHERE attempt_id = ?",
            (
                serialized,
                datetime.now(timezone.utc).isoformat(timespec="seconds"),
                attempt_id,
            ),
        )
        if result.rowcount != 1:
            raise ValueError("Attempt not found")


def _save_settings(connection: sqlite3.Connection, settings: dict[str, Any]) -> None:
    connection.executemany(
        "INSERT INTO settings(key,value) VALUES(?,?) "
        "ON CONFLICT(key) DO UPDATE SET value=excluded.value "
        "WHERE settings.value != excluded.value",
        [(str(key), json.dumps(value)) for key, value in settings.items()],
    )


def save_sql_workspace(path: Path | str, attempt_id: int, workspace: dict) -> None:
    serialized = json.dumps(validate_workspace(workspace), ensure_ascii=False)
    with connect(path) as connection:
        result = connection.execute(
            "UPDATE attempts SET sql_workspace=?, updated_at=? WHERE attempt_id=?",
            (serialized, datetime.now(timezone.utc).isoformat(timespec="microseconds"), attempt_id),
        )
        if result.rowcount != 1:
            raise ValueError("Attempt not found")


def save_settings(path: Path | str, settings: dict[str, Any]) -> None:
    with connect(path) as connection:
        _save_settings(connection, settings)


def save_setting(path: Path | str, key: str, value: Any) -> None:
    save_settings(path, {key: value})


def get_settings(path: Path | str) -> dict[str, Any]:
    with connect(path) as con:
        rows = con.execute("SELECT key,value FROM settings").fetchall()
    return {r["key"]: json.loads(r["value"]) for r in rows}


def export_progress(path: Path | str) -> dict[str, Any]:
    return {
        "format": "data-engineering-practice-lab-progress",
        "version": 1,
        "exported_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "attempts": list_attempts(path),
        "settings": get_settings(path),
    }


def _timestamp(value: str | None) -> datetime:
    if not value:
        return datetime.min.replace(tzinfo=timezone.utc)
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    return parsed.replace(tzinfo=timezone.utc) if parsed.tzinfo is None else parsed.astimezone(timezone.utc)


def _validate_backup_attempt(row: dict[str, Any]) -> None:
    for field in ("answer", "evaluation_feedback", "personal_notes"):
        if field in row and not isinstance(row[field], str):
            raise ValueError(f"Invalid {field} in backup attempt.")
    for field in ("started_at", "updated_at", "completed_at", "evaluated_at"):
        value = row.get(field)
        if value is not None and not isinstance(value, str):
            raise ValueError(f"Invalid {field} in backup attempt.")
        try:
            _timestamp(value)
        except (ValueError, OverflowError) as exc:
            raise ValueError(f"Invalid {field} in backup attempt.") from exc
    for field, minimum, maximum in (("score", 0, 100), ("confidence", 1, 5), ("minutes_taken", 0, float("inf"))):
        value = row.get(field)
        if value is not None and (
            type(value) not in (int, float) or not math.isfinite(value)
            or not minimum <= value <= maximum
            or (field == "confidence" and value != int(value))
        ):
            raise ValueError(f"Invalid {field} in backup attempt.")
    for field in ("hints_used", "complications_used", "weak_topics", "mistake_categories"):
        values = row.get(field, [])
        if not isinstance(values, list):
            raise ValueError(f"Invalid {field} in backup attempt.")
        if field in ("hints_used", "complications_used"):
            valid = all(type(value) is int and value == index for index, value in enumerate(values, 1))
        else:
            valid = all(isinstance(value, str) for value in values)
        if not valid:
            raise ValueError(f"Invalid {field} in backup attempt.")
    scores = row.get("rubric_scores", {})
    if not isinstance(scores, dict) or any(
        type(value) not in (int, float) or not math.isfinite(value) or not 0 <= value <= 100
        for value in scores.values()
    ) or sum(scores.values()) > 100:
        raise ValueError("Invalid rubric scores in backup attempt.")


def merge_progress(path: Path | str, backup: dict[str, Any]) -> dict[str, int]:
    if (
        not isinstance(backup, dict)
        or backup.get("format") != "data-engineering-practice-lab-progress"
        or backup.get("version") != 1
    ):
        raise ValueError("This file is not a supported Practice Lab progress backup.")
    rows = backup.get("attempts", [])
    settings = backup.get("settings", {})
    if not isinstance(rows, list) or not isinstance(settings, dict):
        raise ValueError(
            "The backup must contain an attempts list and a settings object."
        )
    allowed_status = {"Not started", "In progress", "Completed", "Evaluated"}
    for row in rows:
        if (
            not isinstance(row, dict)
            or not isinstance(row.get("challenge_id"), str)
            or not row["challenge_id"]
        ):
            raise ValueError("Every backup attempt must include a challenge_id.")
        if not isinstance(row.get("status"), str) or row["status"] not in allowed_status:
            raise ValueError(
                f"Unsupported attempt status for {row.get('challenge_id')}."
            )
        _validate_backup_attempt(row)
        if row.get("diagram") is not None:
            validate_diagram(row["diagram"])
        if row.get("sql_workspace") is not None:
            validate_workspace(row["sql_workspace"])
    with connect(path) as connection:
        existing = [
            _decode_attempt(row) for row in connection.execute("SELECT * FROM attempts")
        ]
        by_identity = {
            (a.get("challenge_id"), _timestamp(a.get("started_at"))): a
            for a in existing
            if a.get("started_at")
        }
        result = {"added": 0, "updated": 0, "unchanged": 0}
        for row in rows:
            identity = (row["challenge_id"], _timestamp(row.get("started_at")))
            current = by_identity.get(identity) if row.get("started_at") else None
            imported = {
                key: value for key, value in row.items() if key in ATTEMPT_FIELDS
            }
            if current:
                if _timestamp(row.get("updated_at")) <= _timestamp(current.get("updated_at")):
                    result["unchanged"] += 1
                    continue
                imported["attempt_id"] = current["attempt_id"]
                _save_attempt(connection, imported)
                current.update(imported)
                result["updated"] += 1
            else:
                new_id = _save_attempt(connection, imported)
                imported["attempt_id"] = new_id
                result["added"] += 1
            if row.get("started_at"):
                by_identity[identity] = imported
        _save_settings(connection, settings)
    return result
