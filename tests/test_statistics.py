from src.statistics import overview, weak_topic_summary

def test_empty_history_is_safe():
    result=overview([])
    assert result["completed"]==0 and result["in_progress"]==0
    assert result["average_score"] is None and result["weak_topics"]==[]
    assert weak_topic_summary([])==[]

def test_weak_topic_priority_uses_review_signals():
    rows=weak_topic_summary([
        {"weak_topics":["joins"],"mistake_categories":["SQL"],"score":45,"confidence":1,"updated_at":"2020-01-01T00:00:00+00:00"},
        {"weak_topics":["joins"],"mistake_categories":[],"score":55,"confidence":2,"updated_at":"2020-01-02T00:00:00+00:00"},
    ])
    assert rows[0]["topic"]=="joins" and rows[0]["attempts"]==2
