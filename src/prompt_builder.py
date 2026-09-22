from __future__ import annotations
import json
from typing import Any

def _list(items: Any) -> str:
    return "\n".join(f"- {x}" for x in (items or [])) or "- None specified"

def student_prompt(challenge: dict[str, Any], template: str) -> str:
    s = challenge.get("student", {})
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

Do not solve this challenge. Do not reveal or infer hidden topics. Do not suggest technologies, schemas, facts, dimensions, or keys unless I explicitly request a hint. Let me complete every task, and wait until I explicitly request evaluation."""

def evaluation_prompt(challenge: dict[str, Any], answer: str, rubric: dict[str, int], template: str, used_complications: list[str] | None = None, mistake_categories: list[str] | None = None) -> str:
    cats = "\n".join(f"- {name.replace('_',' ').title()}: {points} points" for name,points in rubric.items())
    s=challenge.get("student",{})
    source_context={k:challenge.get(k) for k in ("id","title","type","difficulty","estimated_minutes","rubric_ref","artifacts_required","student","internal","review_exercise") if k in challenge}
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
{answer}"""
