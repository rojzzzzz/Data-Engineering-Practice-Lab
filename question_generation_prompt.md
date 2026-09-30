# Prompt for generating an uploadable question bank

For executable SQL exercises, also follow `SQL_PLAYGROUND.md` and its complete `sql_playground` JSON example. Use DuckDB 1.5.5, structured tables, deterministic visible and private fixtures, named SELECT answer tasks, explicit output contracts, and private reference queries. Keep `assessment` inside `sql_playground`; never put solutions into student-facing fields. Questions without this optional metadata retain the written-answer workflow.

Replace `[]` with your topic, then copy everything below the divider into your AI. The default is 10 questions in English; change those inputs if needed. Save the AI's JSON response as a UTF-8 `.json` file and upload it under **Challenge Bank → Append questions**.

For the strongest duplicate check, optionally attach your current `data/challenges.json` to the AI along with this prompt. Do not upload this Markdown prompt to the app.

---

You are an expert educator and assessment designer. Create a self-contained JSON question bank for my Practice Lab application.

INPUTS
- Topic: []
- Number of new questions: 10
- Language: English
- Audience: a learner who knows the basics and wants practical application, reasoning, and retention.
- Difficulty: progress from introductory application to challenging synthesis, using integer levels 1–5.
- Batch identifier: generate a fresh 12-character uppercase hexadecimal token for this request. Use it consistently wherever BATCH appears below. Do not reuse a token from an earlier response.

OUTPUT
Return only one complete, valid JSON object. No Markdown fences, introduction, comments, trailing commas, ellipses, or text after the JSON. It must be ready to save as a UTF-8 `.json` file. Generate exactly the requested number of new questions; do not reproduce an existing bank.

QUESTION DESIGN
1. Cover distinct subtopics of the requested topic. Prefer realistic scenarios, practical tasks, diagnosis, comparisons, and decisions that require an explanation. Avoid repetitive paraphrases and definition-only questions.
2. Make every exercise self-contained. Include all facts, sample data, schemas, units, assumptions, or code fragments needed to solve it in the student-facing fields. Do not require an unavailable attachment, paid resource, or external database. For SQL or code tasks, state the language/dialect and relevant version assumptions.
3. Use clear, measurable tasks and deliverables that match the estimated time. Normal scenarios should take about 15–45 minutes; longer case studies may take 60–120 minutes.
4. Keep answers, evaluation guidance, topic tags, and common traps out of the student-facing fields. Put evaluation guidance in `internal`. Do not prescribe the intended solution when choosing an approach is part of the assessment.
5. Supply exactly three hints, ordered from a conceptual nudge to more specific guidance. Do not provide the full solution. Add one or two optional follow-up complications and a short focused review exercise.
6. Allow multiple defensible answers where appropriate. State enough evaluation guidance to distinguish a valid alternative from an incorrect answer.

COMPATIBILITY RULES
- Top-level keys must be `bank`, `mistake_categories`, `prompt_templates`, `rubrics`, and `challenges`, with the types shown in the template below.
- Each challenge must have every field shown in the template. `student.scenario` is a string; `requirements`, `tasks`, `constraints`, and `deliverables` are arrays of strings. Hints and follow-up complications are arrays of strings. Do not add structured objects inside those arrays.
- Use IDs `SCN-BATCH-001`, `SCN-BATCH-002`, etc. for normal scenarios. For genuine extended case studies, use `CASE-BATCH-001`, etc. The first segment must remain `SCN` or `CASE`, since the app uses it to select practice modes.
- Every ID must be unique within this upload. If a current bank is attached, also check against all existing IDs and avoid duplicating its questions. Without an attached bank, use the fresh batch token; do not claim that you checked unseen existing IDs.
- For normal scenarios, choose the dominant deliverable type from `DESIGN`, `MODEL`, `PIPELINE`, `ARCH`, `SQL`, `NORMALIZE`, `INCIDENT`, `EVOLVE`, `GOVERN`, `REVIEW`, `CONCEPTUAL`, `LOGICAL`, `PHYSICAL`, `CLEAN`, or `GREENFIELD`. Use `CASE` for extended case studies. For topics outside data engineering, use `REVIEW` for analysis/critique or `DESIGN` for applied problem solving.
- `difficulty` must be an integer from 1 to 5. `estimated_minutes` must be a positive integer, not a string.
- Each `rubric_ref` must exactly match a key included in this upload's `rubrics`. Use fresh names such as `practice_BATCH` to avoid conflicts with existing rubric names. Every rubric is a flat object of numeric category scores totaling exactly 100. The example rubric can be reused or adapted to the topic while keeping the total at 100.
- `artifacts_required` must be an array drawn from `prose`, `bullet_outline`, `diagram_drawn`, `diagram_ascii`, `table_ddl`, `query_sql`, `pseudocode`, `matrix`, and `checklist`. Choose only formats that make sense for the exercise.
- `bank.challenge_count` must equal the actual number of generated challenges. Each `challenge_families` count must equal the number whose IDs start with that prefix. Include only families used in this upload.
- `bank.type_enum`, `bank.artifact_formats`, and `bank.type_conventions.types_in_family` must describe the values actually used. Preserve the shown object/array shapes.
- All challenge ID references in `learning_paths`, `prerequisite_graph`, and `topic_index` must refer to challenges included in this upload or the attached current bank. References are resolved against the combined bank; without an attached bank, reference only this upload.
- `internal.prerequisites` contains concept names, not challenge IDs. `bank.prerequisite_graph` contains challenge IDs; use empty arrays where no earlier exercise is required. Keep the graph acyclic.
- Use consistent snake_case topic tags in `internal.topics` and `bank.topic_index`. Index every challenge under all of its topic tags. Order the learning path from easier exercises to more demanding ones.
- Include nonempty string templates for `student`, `hint`, and `evaluation`. The app adds challenge details and the learner's answer itself, so these templates should contain general instructions, not interpolation variables. Existing templates are retained when this upload is appended.

JSON STRUCTURE
The following is a structural template with ONE illustrative record, not a completed exercise. Replace every placeholder, expand the challenge array to the requested count, and update every count, index, reference, and list accordingly. Optional metadata not shown here may be omitted; do not change the shown field types.

{
  "bank": {
    "name": "TOPIC practice questions",
    "version": "1.0.0",
    "language": "English",
    "challenge_count": 1,
    "source_scope": ["TOPIC"],
    "type_enum": ["DESIGN"],
    "type_conventions": {
      "prefix_rule": "The ID prefix denotes the challenge family; type denotes the dominant deliverable.",
      "families": {"SCN": "Short applied scenarios"},
      "types_in_family": {"SCN": ["DESIGN"]}
    },
    "artifact_formats": ["prose", "bullet_outline"],
    "challenge_families": [
      {"prefix": "SCN", "count": 1, "intent": "Applied practice in TOPIC"}
    ],
    "learning_paths": [
      {
        "name": "TOPIC — BATCH",
        "goal": "Specific learning outcome for this batch",
        "challenges": ["SCN-BATCH-001"],
        "estimated_hours": 0.5
      }
    ],
    "prerequisite_graph": {"SCN-BATCH-001": []},
    "topic_index": {"topic_tag": ["SCN-BATCH-001"]}
  },
  "mistake_categories": [
    "KNOWLEDGE", "APPLICATION", "REQUIREMENTS", "DESIGN", "SQL", "TRADEOFF", "COMMUNICATION"
  ],
  "prompt_templates": {
    "student": "Act as a practice coach. Present the supplied exercise without solving it. Let the learner reason independently and wait for an explicit request before offering hints or evaluation.",
    "hint": "Give only the next requested hint. Preserve the learner's opportunity to solve the exercise independently.",
    "evaluation": "Evaluate the submitted work against the supplied rubric and requirements. Explain deductions, recognize defensible alternatives, identify weak topics and mistake categories, and recommend focused practice. Score out of 100."
  },
  "rubrics": {
    "practice_BATCH": {
      "correctness": 35,
      "reasoning": 25,
      "requirements_coverage": 20,
      "edge_cases_and_tradeoffs": 10,
      "clarity": 10
    }
  },
  "challenges": [
    {
      "id": "SCN-BATCH-001",
      "title": "Specific exercise title",
      "type": "DESIGN",
      "difficulty": 2,
      "estimated_minutes": 30,
      "rubric_ref": "practice_BATCH",
      "artifacts_required": ["prose", "bullet_outline"],
      "student": {
        "scenario": "Complete situation with all information needed to solve the exercise.",
        "requirements": ["A concrete success criterion"],
        "tasks": ["A specific action the learner must perform and explain"],
        "constraints": ["A meaningful limitation or boundary condition"],
        "deliverables": ["An observable output that can be evaluated"]
      },
      "internal": {
        "domains": ["domain_tag"],
        "topics": ["topic_tag"],
        "prerequisites": ["prerequisite_concept"],
        "assessment_focus": "What a strong response must demonstrate, including acceptable alternatives and important correctness criteria.",
        "common_traps": ["A likely mistake and why it is wrong"]
      },
      "hints": [
        "A light conceptual nudge",
        "A more specific direction",
        "A concrete next step without the complete answer"
      ],
      "follow_up_complications": ["An optional change that requires deeper reasoning"],
      "review_exercise": "A short targeted follow-up for a learner who struggles with this concept."
    }
  ]
}

Before responding, check JSON syntax, the requested question count, unique IDs, rubric totals, field types, family counts, topic coverage, all references, and the absence of placeholders. Correct any inconsistency. Return the completed JSON only.
