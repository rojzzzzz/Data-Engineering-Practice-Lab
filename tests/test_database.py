from src.database import export_progress, init_db, list_attempts, get_attempt, merge_progress, save_attempt
from src.statistics import overview

def test_create_save_update_reopen(tmp_path):
    path=tmp_path/"practice.db"; init_db(path)
    aid=save_attempt(path,{"challenge_id":"SQL-1","status":"In progress","updated_at":"2026-01-01","answer":"draft","hints_used":[1]})
    a=get_attempt(path,aid); assert a["answer"]=="draft" and a["hints_used"]==[1]
    save_attempt(path,{"attempt_id":aid,"challenge_id":"SQL-1","status":"Completed","updated_at":"2026-01-02","answer":"final","hints_used":[1,2]})
    assert get_attempt(path,aid)["status"]=="Completed"
    assert list_attempts(path,"SQL-1")[0]["answer"]=="final"

def test_move_out_of_progress_preserves_draft_and_removes_counter(tmp_path):
    path=tmp_path/"practice.db"; init_db(path)
    aid=save_attempt(path,{"challenge_id":"SQL-1","status":"In progress","updated_at":"2026-01-01","answer":"saved draft","score":82,"weak_topics":["joins"]})
    previous=get_attempt(path,aid)
    previous.update(status="Not started",updated_at="2026-01-02")
    save_attempt(path,previous)
    reopened=get_attempt(path,aid)
    assert reopened["status"]=="Not started"
    assert reopened["answer"]=="saved draft" and reopened["score"]==82
    assert overview(list_attempts(path))["in_progress"]==0
    assert reopened in list_attempts(path)

def test_backup_merge_is_repeatable_and_keeps_rubric_scores(tmp_path):
    source=tmp_path/"source.db"; target=tmp_path/"target.db"
    init_db(source); init_db(target)
    save_attempt(source,{"challenge_id":"DM-1","status":"Evaluated","started_at":"2026-01-01T10:00:00+00:00","updated_at":"2026-01-02T10:00:00+00:00","answer":"design","score":87,"rubric_scores":{"grain":20,"facts":67}})
    backup=export_progress(source)
    first=merge_progress(target,backup)
    second=merge_progress(target,backup)
    attempt=list_attempts(target)[0]
    assert first["added"]==1
    assert second["unchanged"]==1
    assert len(list_attempts(target))==1
    assert attempt["rubric_scores"]=={"grain":20,"facts":67}
