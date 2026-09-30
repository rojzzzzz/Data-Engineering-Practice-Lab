import json
from pathlib import Path

import pytest
from streamlit.testing.v1 import AppTest

from src import config
from src.database import init_db, save_attempt


@pytest.fixture
def app_context(tmp_path, monkeypatch):
    database=tmp_path/"practice.db"
    monkeypatch.setattr(config,"DB_PATH",database)
    init_db(database)
    bank=json.loads(config.CHALLENGES_PATH.read_text(encoding="utf-8"))
    challenge=next(c for c in bank["challenges"] if c["id"].startswith("SCN-"))
    return database,challenge


def widget(widgets,label):
    return next(w for w in widgets if w.label==label)


def test_reopen_same_day_attempts_outside_filters(app_context):
    database,challenge=app_context
    ids=[save_attempt(database,{
        "challenge_id":challenge["id"],"status":"Completed",
        "started_at":f"2026-01-01T0{i}:00:00+00:00",
        "updated_at":"2026-01-01T12:00:00+00:00","answer":f"Answer {i}",
        "weak_topics":["retired topic"],"mistake_categories":["retired category"],
    }) for i in (1,2)]
    app=AppTest.from_file(str(Path(__file__).resolve().parents[1]/"app.py")).run()
    widget(app.selectbox,"Challenge family").select("SQL").run()
    saved=widget(app.selectbox,"Saved attempts")
    assert len(saved.options)==2
    saved.select(next(label for label in saved.options if label.endswith(f"Attempt {ids[0]}")))
    widget(app.button,"Open saved attempt").click().run()
    assert not app.exception
    assert app.session_state["active_challenge"]==challenge["id"]
    assert widget(app.text_area,"Your solution").value=="Answer 1"
    assert widget(app.multiselect,"Weak topics").value==["retired topic"]


def test_empty_filter_pool_clears_previous_preview(app_context):
    app=AppTest.from_file(str(Path(__file__).resolve().parents[1]/"app.py")).run()
    assert app.session_state["active_challenge"]
    widget(app.selectbox,"Challenge family").select("SQL")
    # Scenario challenges and SQL challenges have distinct types in the bank.
    _,challenge=app_context
    widget(app.selectbox,"Challenge type").select(challenge["type"]).run()
    assert not app.exception
    assert app.session_state["active_challenge"] is None
    assert not any(button.label=="Start challenge" for button in app.button)


def test_unchanged_rerun_does_not_save_attempt(app_context, monkeypatch):
    import src.database as database_module
    database, challenge = app_context
    aid = save_attempt(database, {'challenge_id': challenge['id'], 'status': 'In progress',
        'started_at': '2026-01-01', 'updated_at': '2026-01-01', 'confidence': 3})
    app = AppTest.from_file(str(Path(__file__).resolve().parents[1]/'app.py'))
    app.session_state['active_attempt'] = aid
    app.run()
    assert not app.exception
    def unexpected_save(*args, **kwargs):
        pytest.fail('An unchanged rerun must not write an attempt')
    monkeypatch.setattr(database_module, 'save_attempt_details', unexpected_save)
    app.run()
    assert not app.exception


def test_status_change_hides_evaluation_immediately(app_context):
    database, challenge = app_context
    aid = save_attempt(database, {'challenge_id': challenge['id'], 'status': 'Completed',
        'started_at': '2026-01-01', 'updated_at': '2026-01-01'})
    app = AppTest.from_file(str(Path(__file__).resolve().parents[1]/'app.py'))
    app.session_state['active_attempt'] = aid
    app.run()
    assert not app.exception
    widget(app.selectbox, 'Attempt status').select('In progress').run()
    assert not app.exception
    assert not any(button.label == 'Save evaluation' for button in app.button)


def test_sql_route_preview_start_and_filter(app_context):
    from src.database import list_attempts
    database, _ = app_context
    app = AppTest.from_file(str(Path(__file__).resolve().parents[1]/'app.py'), default_timeout=20).run()
    widget(app.button, 'Open SQL practice').click().run()
    assert not app.exception
    assert len(widget(app.selectbox, 'SQL exercise').options) == 9
    assert list_attempts(database) == []
    widget(app.button, 'Start challenge').click().run()
    assert not app.exception
    assert list_attempts(database)[0]['challenge_id'] == 'SQL-001'
    widget(app.button, 'Open SQL practice').click().run()
    widget(app.selectbox, 'Difficulty').select(5).run()
    assert len(widget(app.selectbox, 'SQL exercise').options) == 3
    assert not app.exception


def test_sql_current_draft_event_is_saved_and_run(app_context, monkeypatch):
    from src.database import get_attempt
    import src.sql_ui as sql_ui
    from src.sql_models import new_workspace
    import json
    database, _ = app_context
    bank = json.loads(config.CHALLENGES_PATH.read_text(encoding='utf-8'))
    exercise = next(c['sql_playground'] for c in bank['challenges'] if c['id']=='SQL-001')
    aid = save_attempt(database, {'challenge_id':'SQL-001','status':'In progress'})
    workspace = new_workspace(exercise)
    workspace['drafts']['ranking'] = 'SELECT 123'
    event = {'id':'event-1','action':'run','active':'ranking','drafts':workspace['drafts'],'selection':''}
    monkeypatch.setattr(sql_ui, 'sql_editor', lambda *args: event)
    captured = []
    class Job:
        result = None
        def __init__(self, *args, **kwargs): captured.append(kwargs)
        def cancel(self): pass
    monkeypatch.setattr(sql_ui, 'SQLJob', Job)
    app = AppTest.from_file(str(Path(__file__).resolve().parents[1]/'app.py'), default_timeout=20)
    app.session_state['active_attempt'] = aid
    app.run()
    assert not app.exception
    assert captured[0]['sql'] == 'SELECT 123'
    assert get_attempt(database,aid)['sql_workspace']['drafts']['ranking'] == 'SELECT 123'
    app.run()
    assert len(captured) == 1
