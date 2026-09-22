"""Validate and normalize challenge-bank JSON without altering challenge bodies."""
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path
from typing import Any

REQUIRED = ("id", "title", "type", "difficulty", "estimated_minutes", "rubric_ref", "student")
STUDENT_FIELDS = ("scenario", "requirements", "tasks", "constraints", "deliverables")


def validate_bank(source: dict[str, Any]) -> tuple[dict[str, Any], dict[str, Any]]:
    bank = json.loads(json.dumps(source))
    issues: list[dict[str, Any]] = []
    def issue(kind: str, message: str, **details: Any) -> None:
        issues.append({"kind": kind, "message": message, **details})

    challenges = bank.get("challenges")
    if not isinstance(challenges, list):
        raise ValueError("The top-level 'challenges' field must be an array")
    ids = [str(c.get("id", "")) for c in challenges if isinstance(c, dict)]
    id_counts = Counter(ids)
    id_set = set(ids)
    if bank.get("bank", {}).get("challenge_count") != len(challenges):
        old = bank.get("bank", {}).get("challenge_count")
        bank.setdefault("bank", {})["challenge_count"] = len(challenges)
        issue("derived_metadata_corrected", "bank.challenge_count corrected to actual array length", declared=old, actual=len(challenges))
    for cid, count in id_counts.items():
        if not cid or count > 1:
            issue("duplicate_or_missing_id", "Challenge IDs must be present and unique", challenge_id=cid, count=count)
    for i, c in enumerate(challenges):
        if not isinstance(c, dict):
            issue("invalid_challenge", "Challenge entry is not an object", index=i); continue
        for f in REQUIRED:
            if f not in c or c[f] in (None, ""):
                issue("missing_required_field", f"Missing required field: {f}", challenge_id=c.get("id"), field=f)
        if c.get("difficulty") not in (1, 2, 3, 4, 5):
            issue("invalid_difficulty", "Difficulty must be an integer from 1 to 5", challenge_id=c.get("id"), value=c.get("difficulty"))
        if c.get("rubric_ref") not in bank.get("rubrics", {}):
            issue("unknown_rubric", "Challenge references an unknown rubric", challenge_id=c.get("id"), rubric_ref=c.get("rubric_ref"))
        if not isinstance(c.get("student"), dict):
            issue("missing_student_body", "Student-facing content must be an object", challenge_id=c.get("id"))
        else:
            for f in STUDENT_FIELDS:
                if f not in c["student"]:
                    issue("missing_student_field", f"Student field absent: {f}", challenge_id=c.get("id"), field=f)
        hints = c.get("hints", [])
        if hints and (not isinstance(hints, list) or len(hints) != 3):
            issue("hint_count", "Supplied hints should contain exactly three progressive levels", challenge_id=c.get("id"), actual=len(hints) if isinstance(hints,list) else None)
    for name, rubric in bank.get("rubrics", {}).items():
        if not isinstance(rubric, dict) or sum(v for v in rubric.values() if isinstance(v, (int,float))) != 100:
            issue("rubric_total", "Rubric categories must total 100 points", rubric=name, total=sum(v for v in rubric.values() if isinstance(v,(int,float))) if isinstance(rubric,dict) else None)

    families = bank.get("bank", {}).get("challenge_families", [])
    actual_families = Counter(cid.split("-")[0] for cid in ids if cid)
    for fam in families:
        prefix, declared = fam.get("prefix"), fam.get("count")
        actual = actual_families.get(prefix, 0)
        if declared != actual:
            issue("family_count_mismatch", "Declared family count differs from actual challenge IDs", prefix=prefix, declared=declared, actual=actual)
            fam["count"] = actual
            issue("derived_metadata_corrected", "Declared family count recalculated from challenge IDs", prefix=prefix, previous=declared, actual=actual)

    def clean_refs(container: Any, path: str) -> None:
        if isinstance(container, dict):
            for k, v in container.items():
                if isinstance(v, list) and (k in {"challenges", "prerequisites"} or path == "topic_index"):
                    kept = [ref for ref in v if ref in id_set]
                    for ref in v:
                        if ref not in id_set:
                            issue("dangling_reference", "Removed reference to nonexistent challenge", location=f"{path}.{k}", reference=ref)
                    container[k] = kept
                else:
                    clean_refs(v, f"{path}.{k}")
        elif isinstance(container, list):
            for n, item in enumerate(container): clean_refs(item, f"{path}[{n}]")
    for lp in bank.get("bank", {}).get("learning_paths", []):
        if isinstance(lp.get("challenges"), list):
            kept = [ref for ref in lp["challenges"] if ref in id_set]
            for ref in lp["challenges"]:
                if ref not in id_set: issue("dangling_reference", "Removed reference to nonexistent challenge", location=f"learning_paths.{lp.get('name')}", reference=ref)
            lp["challenges"] = kept
    graph = bank.get("bank", {}).get("prerequisite_graph", {})
    if isinstance(graph, dict):
        for key, vals in list(graph.items()):
            if key not in id_set:
                issue("dangling_reference", "Removed prerequisite graph node for nonexistent challenge", location="prerequisite_graph", reference=key)
                del graph[key]
                continue
            if isinstance(vals, list):
                kept = [v for v in vals if v in id_set]
                for v in vals:
                    if v not in id_set: issue("dangling_reference", "Removed reference to nonexistent challenge", location=f"prerequisite_graph.{key}", reference=v)
                graph[key] = kept
    topics = bank.get("bank", {}).get("topic_index", {})
    if isinstance(topics, dict):
        for topic, vals in list(topics.items()):
            if isinstance(vals, list):
                kept = [v for v in vals if v in id_set]
                for v in vals:
                    if v not in id_set: issue("dangling_reference", "Removed reference to nonexistent challenge", location=f"topic_index.{topic}", reference=v)
                topics[topic] = kept
    templates = bank.get("prompt_templates", {})
    for name in ("student", "hint", "evaluation"):
        if not isinstance(templates.get(name), str) or not templates[name].strip():
            issue("prompt_template", "Missing or empty prompt template", template=name)
    valid_count=0
    for c in challenges:
        if not isinstance(c,dict): continue
        student=c.get("student")
        if (all(f in c and c[f] not in (None,"") for f in REQUIRED)
            and isinstance(c.get("id"),str) and id_counts[c["id"]]==1
            and c.get("difficulty") in (1,2,3,4,5)
            and c.get("rubric_ref") in bank.get("rubrics",{})
            and isinstance(student,dict) and all(f in student for f in STUDENT_FIELDS)):
            valid_count+=1
    report = {"json_syntax": "valid", "source_challenge_count": len(challenges), "declared_challenge_count": source.get("bank", {}).get("challenge_count"), "normalized_challenge_count": len(challenges), "actual_family_counts": dict(actual_families), "rubric_totals": {k: sum(v.values()) for k,v in bank.get("rubrics", {}).items() if isinstance(v,dict) and all(isinstance(n,(int,float)) for n in v.values())}, "duplicate_ids": [cid for cid,n in id_counts.items() if not cid or n > 1], "issues": issues, "issue_count": len(issues), "valid_challenges": valid_count}
    return bank, report


def validate_file(source_path: Path, output_path: Path, report_path: Path) -> dict[str, Any]:
    source = json.loads(source_path.read_text(encoding="utf-8"))
    normalized, report = validate_bank(source)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(normalized, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    report_path.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return report
