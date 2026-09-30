"""Disposable DuckDB worker; invoked only through sql_runner's bounded IPC."""
from __future__ import annotations

from collections import Counter
from datetime import date, datetime
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
import json
import os
import sys
import threading
import time

import duckdb

from src.sql_models import ddl, validate_exercise

MAX_BYTES = 2_000_000
MAX_CHECK_ROWS = 10_000


class ResourceLimit(ValueError):
    pass


def connection(exercise: dict, fixture: dict):
    con = duckdb.connect(":memory:", config={
        "threads": "2", "memory_limit": "256MB", "enable_external_access": "false",
        "autoinstall_known_extensions": "false", "autoload_known_extensions": "false",
        "python_enable_replacements": "false", "temp_directory": "",
        "max_temp_directory_size": "0B", "allow_community_extensions": "false",
    })
    try:
        con.execute(ddl(exercise))
        for table in exercise["tables"]:
            rows = fixture[table["name"]]
            if rows:
                placeholders = ",".join("?" for _ in table["columns"])
                con.executemany(f'INSERT INTO "{table["name"]}" VALUES ({placeholders})', rows)
        con.execute("SET lock_configuration = true")
        return con
    except BaseException:
        con.close()
        raise


def select_only(con, sql: str) -> None:
    if not isinstance(sql, str) or not sql.strip() or len(sql) > 50_000:
        raise ValueError("Enter a SELECT query (maximum 50,000 characters).")
    statements = con.extract_statements(sql)
    if len(statements) != 1 or statements[0].type != duckdb.StatementType.SELECT:
        raise ValueError("Only one SELECT query is allowed, including WITH and WITH RECURSIVE.")


def query(exercise: dict, fixture: dict, sql: str, *, explain=False, checking=False) -> dict:
    # Hard watchdog covers setup, parsing, execution and fetching, not just execute().
    timer = threading.Timer(10, lambda: os._exit(124))
    timer.daemon = True
    timer.start()
    con = None
    try:
        con = connection(exercise, fixture)
        select_only(con, sql)
        started = time.perf_counter()
        cursor = con.execute(("EXPLAIN " if explain else "") + sql)
        columns = [item[0] for item in cursor.description]
        types = [str(item[1]) for item in cursor.description]
        limit = MAX_CHECK_ROWS if checking else 1000
        rows, byte_count, truncated = [], 0, False
        while True:
            batch = cursor.fetchmany(128)
            if not batch:
                break
            for row in batch:
                encoded = json.dumps(row, default=str, ensure_ascii=False)
                byte_count += len(encoded.encode())
                if len(rows) >= limit or byte_count > MAX_BYTES:
                    if checking:
                        raise ResourceLimit("Assessment output exceeds its bounded result limit")
                    truncated = True
                    break
                rows.append(list(row))
            if truncated:
                break
        return {"columns": columns, "types": types, "rows": rows, "truncated": truncated,
                "elapsed_ms": round((time.perf_counter() - started) * 1000, 2)}
    finally:
        if con is not None:
            con.close()
        timer.cancel()


def _cell(value, column):
    if value is None:
        return None
    kind = column["type"]
    if kind == "integer":
        if isinstance(value, bool) or not isinstance(value, (int, Decimal)) or value != int(value):
            raise ValueError("integer required")
        return int(value)
    if kind in ("decimal", "number"):
        if isinstance(value, bool) or not isinstance(value, (int, float, Decimal)):
            raise ValueError("numeric value required")
        if kind == "decimal" and isinstance(value, float):
            raise ValueError("money must use exact decimal arithmetic")
        number = Decimal(str(value))
        if not number.is_finite():
            raise ValueError("finite number required")
        return number.quantize(Decimal(1).scaleb(-column["scale"]), rounding=ROUND_HALF_UP)
    if kind == "date":
        if not isinstance(value, date) or isinstance(value, datetime):
            raise ValueError("date required")
        return value.isoformat()
    if kind == "timestamp":
        if not isinstance(value, datetime):
            raise ValueError("timestamp required")
        return value.isoformat()
    if kind == "boolean":
        if type(value) is not bool:
            raise ValueError("boolean required")
        return value
    if not isinstance(value, str):
        raise ValueError("text required")
    return value


def compare(actual: dict, expected: dict, task: dict) -> str:
    if actual["columns"] != [c["name"] for c in task["columns"]]:
        return "output shape"
    try:
        def normalize(result):
            return [tuple(_cell(v, c) for v, c in zip(row, task["columns"])) for row in result["rows"]]
        observed, wanted = normalize(actual), normalize(expected)
    except (ValueError, TypeError, InvalidOperation):
        return "output shape"
    if Counter(observed) != Counter(wanted):
        return "incorrect rows"
    if task["ordered"] and observed != wanted:
        return "ordering"
    return "passed"


def assess(exercise: dict, drafts: dict, *, validate_only=False) -> dict:
    outcomes = {}
    fixtures = [exercise["visible_fixture"], *exercise["assessment"]["fixtures"]]
    for task in exercise["tasks"]:
        outcome = "passed"
        for fixture in fixtures:
            # Reference and student SQL ALWAYS use different connections. No reference
            # SQL, expected rows, or private descriptions are returned to the browser.
            expected = query(exercise, fixture, exercise["assessment"]["reference_queries"][task["id"]], checking=True)
            if compare(expected, expected, task) != "passed":
                raise ValueError("Reference query does not satisfy the declared output contract")
            if validate_only:
                continue
            try:
                actual = query(exercise, fixture, drafts.get(task["id"], ""), checking=True)
                outcome = compare(actual, expected, task)
            except (ResourceLimit, duckdb.OutOfMemoryException):
                outcome = "resource limit"
            except Exception:
                outcome = "execution failure"
            if outcome != "passed":
                break
        outcomes[task["id"]] = outcome
    return {"results": outcomes}


def main():
    request = json.loads(sys.stdin.buffer.read(5_000_001))
    try:
        exercise = validate_exercise(request["exercise"])
        operation = request["operation"]
        if operation in ("check", "validate"):
            result = assess(exercise, request.get("drafts", {}), validate_only=operation == "validate")
        elif operation in ("run", "explain"):
            result = query(exercise, exercise["visible_fixture"], request["sql"], explain=operation == "explain")
        else:
            raise ValueError("Unknown SQL operation")
        result["ok"] = True
    except Exception as exc:
        private = request.get("operation") in ("check", "validate")
        result = {"ok": False, "error": "Assessment could not execute. Check the exercise configuration." if private else str(exc)[:2000]}
    print(json.dumps(result, default=str, ensure_ascii=False))


if __name__ == "__main__":
    main()
