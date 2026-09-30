from __future__ import annotations
import json
from typing import Any
from src.diagrams import diagram_summary
from src.sql_models import ddl, public_exercise, answer_hash, fingerprint

def _list(items: Any) -> str:
    return "\n".join(f"- {x}" for x in (items or [])) or "- None specified"

def student_prompt(challenge: dict[str, Any], template: str) -> str:
    s = challenge.get("student", {})
    schema = s.get("create_table_block", "")
    sql_context = ""
    if challenge.get("sql_playground"):
        sql_context = "\nSQL WORKSPACE (DuckDB)\n" + json.dumps(public_exercise(challenge["sql_playground"]), ensure_ascii=False, indent=2)
    return f"""{template.strip()}

CHALLENGE {challenge.get('id','')}: {challenge.get('title','')}
Difficulty: {challenge.get('difficulty','')} / 5 | Estimated time: {challenge.get('estimated_minutes','')} minutes

SCENARIO
{s.get('scenario','')}

REQUIREMENTS\n{_list(s.get('requirements'))}
TASKS\n{_list(s.get('tasks'))}
CONSTRAINTS\n{_list(s.get('constraints'))}
EXPECTED DELIVERABLES\n{_list(s.get('deliverables'))}
REQUIRED ARTIFACTS\n{_list(challenge.get('artifacts_required'))}
\nSUPPLIED SCHEMA\n{schema}{sql_context}

Do not solve this challenge. Do not reveal or infer hidden topics. Do not suggest technologies, schemas, facts, dimensions, or keys unless I explicitly request a hint. Let me complete every task, and wait until I explicitly request evaluation."""

def evaluation_prompt(challenge: dict[str, Any], answer: str, rubric: dict[str, int], template: str, used_complications: list[str] | None = None, mistake_categories: list[str] | None = None, diagram: dict[str,Any] | None = None, sql_workspace: dict | None = None) -> str:
    cats = "\n".join(f"- {name.replace('_',' ').title()}: {points} points" for name,points in rubric.items())
    s=challenge.get("student",{})
    source_context={k:challenge.get(k) for k in ("id","title","type","difficulty","estimated_minutes","rubric_ref","artifacts_required","student","internal","review_exercise") if k in challenge}
    diagram_block=f"\n\nSTUDENT ER DIAGRAM\n{diagram_summary(diagram)}" if challenge.get("diagram_kind") or diagram else ""
    sql_block = ""
    if challenge.get("sql_playground"):
        exercise = challenge["sql_playground"]
        source_context["sql_playground"] = public_exercise(exercise)
        drafts = (sql_workspace or {}).get("drafts", {})
        sql_block = "\n\nSUBMITTED SQL\n" + "\n\n".join(f"{task['title']}:\n{drafts.get(task['id'], '')}" for task in exercise["tasks"])
        assessment = (sql_workspace or {}).get("assessment")
        current = assessment and assessment["exercise_hash"] == fingerprint(exercise) and assessment["query_hash"] == answer_hash(exercise, drafts)
        sql_block += "\nCorrectness checks: " + (json.dumps(assessment["results"]) if current else "Not checked or outdated")
        sql_block += "\nChecks assess result correctness only, not production performance or reasoning."
    return f"""{template.strip()}

Evaluate challenge {challenge.get('id')}: {challenge.get('title')} (difficulty {challenge.get('difficulty')}/5).
Expected artifacts: {_list(challenge.get('artifacts_required'))}
Expected deliverables: {_list(s.get('deliverables'))}
Original challenge and evaluation context:
{json.dumps(source_context, ensure_ascii=False, indent=2)}
Rubric (score each category, respecting its maximum):
{cats}
Total must be out of 100. Include: correct elements, important omissions, technical mistakes, improvement recommendations, mistake categories (choose from: {', '.join(mistake_categories or [])}), weak topics, a suggested focused review exercise, whether the answer is internally consistent, and whether alternative solutions are defensible. Do not penalize a valid alternative design.

Optional complications the student chose to include: {_list(used_complications)}

STUDENT ANSWER
{answer}{diagram_block}{sql_block}"""
