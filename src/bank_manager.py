"""Operations for previewing, combining, archiving, and installing challenge banks."""
from __future__ import annotations

import json
import re
import shutil
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from .config import IMPORTS_DIR, SOURCE_PATH, VERSIONS_DIR
from .json_validator import validate_bank


def prepare_append(current: dict[str, Any], incoming: dict[str, Any]) -> tuple[dict[str, Any], dict[str, Any]]:
    # Check the input's shape, but resolve references against the combined bank.
    validate_bank(incoming)
    from .sql_runner import validate_reference_queries
    for challenge in incoming["challenges"]:
        if isinstance(challenge, dict) and challenge.get("sql_playground"):
            validate_reference_queries(json.dumps(challenge["sql_playground"], sort_keys=True))
    return validate_bank(merge_banks(current, incoming))


def merge_banks(current: dict[str, Any], incoming: dict[str, Any]) -> dict[str, Any]:
    """Append incoming challenges and merge their rubrics and learning metadata."""
    merged=json.loads(json.dumps(current))
    old_challenges=merged.get("challenges",[])
    new_challenges=incoming.get("challenges",[])
    if not isinstance(new_challenges,list) or not new_challenges:
        raise ValueError("The uploaded bank must contain at least one challenge object.")
    if any(not isinstance(c,dict) or not isinstance(c.get("id"),str) or not c["id"].strip() for c in new_challenges):
        raise ValueError("Every added challenge needs a non-empty string ID.")
    old_ids={c.get("id") for c in old_challenges if isinstance(c,dict)}
    new_ids=[c.get("id") for c in new_challenges if isinstance(c,dict)]
    collisions=sorted(old_ids & set(new_ids))
    if collisions:
        raise ValueError("Challenge ID conflicts with the current bank: " + ", ".join(collisions))
    duplicates=sorted(cid for cid, count in Counter(new_ids).items() if count > 1)
    if duplicates:
        raise ValueError("The uploaded file has duplicate challenge IDs: " + ", ".join(duplicates))
    merged["challenges"].extend(new_challenges)

    for name,rubric in incoming.get("rubrics",{}).items():
        if name in merged.setdefault("rubrics",{}) and merged["rubrics"][name] != rubric:
            raise ValueError(f"Rubric '{name}' differs from the current bank. Use Replace or rename the incoming rubric.")
        merged["rubrics"][name]=rubric

    for key in ("mistake_categories",):
        values=merged.setdefault(key,[])
        for value in incoming.get(key,[]):
            if value not in values: values.append(value)
    for key in ("prompt_templates",):
        merged.setdefault(key,{})
        for name,value in incoming.get(key,{}).items(): merged[key].setdefault(name,value)

    current_bank=merged.setdefault("bank",{})
    incoming_bank=incoming.get("bank",{})
    current_bank["challenge_count"]=len(merged["challenges"])
    families={item.get("prefix"):item for item in current_bank.get("challenge_families",[]) if isinstance(item,dict)}
    for item in incoming_bank.get("challenge_families",[]):
        if not isinstance(item,dict) or not item.get("prefix"): continue
        if item["prefix"] not in families:
            families[item["prefix"]]=item
        elif not families[item["prefix"]].get("intent") and item.get("intent"):
            families[item["prefix"]]["intent"]=item["intent"]
    current_bank["challenge_families"]=list(families.values())
    conventions=current_bank.setdefault("type_conventions",{})
    incoming_conventions=incoming_bank.get("type_conventions",{})
    if isinstance(incoming_conventions,dict):
        for key in ("families",):
            conventions.setdefault(key,{}).update(incoming_conventions.get(key,{}))
        for key in ("types_in_family",):
            destination=conventions.setdefault(key,{})
            for prefix,types in incoming_conventions.get(key,{}).items():
                values=destination.setdefault(prefix,[])
                for value in types:
                    if value not in values: values.append(value)
    for key in ("type_enum","artifact_formats"):
        values=current_bank.setdefault(key,[])
        for value in incoming_bank.get(key,[]):
            if value not in values: values.append(value)

    paths={item.get("name"):item for item in current_bank.get("learning_paths",[]) if isinstance(item,dict)}
    for item in incoming_bank.get("learning_paths",[]):
        if not isinstance(item,dict) or not item.get("name"): continue
        if item["name"] not in paths: paths[item["name"]]=item
        else:
            path=paths[item["name"]]
            for cid in item.get("challenges",[]):
                if cid not in path.setdefault("challenges",[]): path["challenges"].append(cid)
    current_bank["learning_paths"]=list(paths.values())

    for key in ("prerequisite_graph","topic_index"):
        target=current_bank.setdefault(key,{})
        for name,values in incoming_bank.get(key,{}).items():
            current_values=target.setdefault(name,[])
            if isinstance(values,list):
                for value in values:
                    if value not in current_values: current_values.append(value)
    for key in ("glossary","mistake_category_examples"):
        target=current_bank.setdefault(key,{})
        values=incoming_bank.get(key,{})
        if isinstance(target,dict) and isinstance(values,dict): target.update(values)
    for key in ("source_scope",):
        values=current_bank.setdefault(key,[])
        for value in incoming_bank.get(key,[]):
            if value not in values: values.append(value)
    return merged


def sync_bundled_sql(current: dict[str, Any], bundled: dict[str, Any]) -> dict[str, Any]:
    """Refresh image-shipped SQL questions in a persisted bank without dropping custom questions."""
    merged = json.loads(json.dumps(current))
    by_id = {c.get("id"): i for i, c in enumerate(merged.get("challenges", [])) if isinstance(c, dict)}
    sql_challenges = [c for c in bundled.get("challenges", []) if c.get("sql_playground")]
    sql_ids = {c["id"] for c in sql_challenges}
    for challenge in sql_challenges:
        if challenge["id"] in by_id:
            merged["challenges"][by_id[challenge["id"]]] = challenge
        else:
            by_id[challenge["id"]] = len(merged["challenges"])
            merged["challenges"].append(challenge)

    for name, rubric in bundled.get("rubrics", {}).items():
        if any(c.get("rubric_ref") == name for c in sql_challenges):
            merged.setdefault("rubrics", {})[name] = rubric
    metadata = merged.setdefault("bank", {})
    source_metadata = bundled.get("bank", {})
    families = {item.get("prefix"): item for item in metadata.get("challenge_families", []) if isinstance(item, dict)}
    for item in source_metadata.get("challenge_families", []):
        if item.get("prefix") == "SQL":
            families[item["prefix"]] = item
    metadata["challenge_families"] = list(families.values())
    for field in ("learning_paths",):
        paths = {item.get("name"): item for item in metadata.get(field, []) if isinstance(item, dict)}
        for item in source_metadata.get(field, []):
            sql_refs = [cid for cid in item.get("challenges", []) if cid in sql_ids]
            if not sql_refs:
                continue
            target = paths.setdefault(item["name"], {**item, "challenges": []})
            target["challenges"] = list(dict.fromkeys(target.get("challenges", []) + sql_refs))
        metadata[field] = list(paths.values())
    for field in ("topic_index", "prerequisite_graph"):
        target = metadata.setdefault(field, {})
        for key, refs in source_metadata.get(field, {}).items():
            selected = [ref for ref in refs if ref in sql_ids]
            if field == "prerequisite_graph" and key in sql_ids:
                target[key] = list(refs)
            elif selected:
                target.setdefault(key, [])
                target[key] = list(dict.fromkeys(target[key] + selected))
    metadata["challenge_count"] = len(merged["challenges"])
    return merged


def archive_import(payload: bytes, original_name: str) -> Path:
    IMPORTS_DIR.mkdir(parents=True,exist_ok=True)
    safe_name=re.sub(r"[^A-Za-z0-9._-]+","_",Path(original_name).name).strip("._") or "challenge_bank.json"
    stamp=datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S%fZ")
    destination=IMPORTS_DIR/f"{stamp}_{safe_name}"
    destination.write_bytes(payload)
    return destination


def archive_active_source() -> Path | None:
    if not SOURCE_PATH.exists(): return None
    VERSIONS_DIR.mkdir(parents=True,exist_ok=True)
    stamp=datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%S%fZ")
    destination=VERSIONS_DIR/f"active_bank_{stamp}.json"
    shutil.copy2(SOURCE_PATH,destination)
    return destination


def write_active_source(payload: bytes) -> None:
    SOURCE_PATH.parent.mkdir(parents=True,exist_ok=True)
    temporary=SOURCE_PATH.with_suffix(".json.tmp")
    temporary.write_bytes(payload)
    temporary.replace(SOURCE_PATH)
