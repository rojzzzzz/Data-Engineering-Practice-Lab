from src.prompt_builder import student_prompt, evaluation_prompt

def challenge():
    return {"id":"X-1","title":"Example","difficulty":2,"estimated_minutes":12,"artifacts_required":["query_sql"],"student":{"scenario":"Do a task","requirements":["r"],"tasks":["t"],"constraints":[],"deliverables":["SQL"]},"internal":{"topics":["secret_topic"],"common_traps":["secret_trap"]}}

def test_student_prompt_excludes_hidden_metadata():
    p=student_prompt(challenge(),"Instructor template")
    assert "secret_topic" not in p and "secret_trap" not in p
    assert "Do not solve" in p and "SQL" in p

def test_evaluation_prompt_includes_answer_and_rubric():
    p=evaluation_prompt(challenge(),"My answer",{"correctness":100},"Evaluate",["Complication"])
    assert "My answer" in p and "Correctness: 100 points" in p and "Complication" in p
    assert "internally consistent" in p
