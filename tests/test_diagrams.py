import copy
import pytest

from src.diagrams import diagram_summary, empty_diagram, validate_diagram


def sample():
    value=empty_diagram("conceptual_erd")
    value["entities"]=[
        {"id":"a","name":"Patient","role":"entity","annotation":"","position":{"x":0,"y":20},"fields":[]},
        {"id":"b","name":"Appointment","role":"entity","annotation":"Visit","position":{"x":300,"y":20},"fields":[{"id":"f","name":"id","data_type":"int","pk":True,"fk":False}]},
    ]
    value["relationships"]=[{"id":"r","source":"a","target":"b","label":"books","source_cardinality":"one","target_cardinality":"many","source_optional":False,"target_optional":True}]
    return value


def test_empty_and_field_free_conceptual_diagrams():
    assert validate_diagram(empty_diagram("conceptual_erd"))["entities"] == []
    assert "Patient" in diagram_summary(sample())
    assert "Appointment" in diagram_summary(sample())
    assert "0..*" in diagram_summary(sample())


def test_deleted_entity_requires_relationship_cleanup():
    value=sample()
    value["entities"].pop()
    with pytest.raises(ValueError,match="endpoint"):
        validate_diagram(value)
    value["relationships"].clear()
    assert validate_diagram(value)["entities"][0]["name"] == "Patient"


def test_duplicate_ids_and_wrong_kind_rejected():
    value=sample()
    with pytest.raises(ValueError,match="kind"):
        validate_diagram(value,"star_schema")
    value=copy.deepcopy(value)
    value["entities"][1]["id"]="a"
    with pytest.raises(ValueError,match="Duplicate"):
        validate_diagram(value)


@pytest.mark.parametrize("bad_value", [[], {}, True, None])
def test_malformed_enums_raise_validation_errors(bad_value):
    value = sample()
    value["entities"][0]["role"] = bad_value
    with pytest.raises(ValueError, match="role"):
        validate_diagram(value)
    value = sample()
    value["relationships"][0]["source_cardinality"] = bad_value
    with pytest.raises(ValueError, match="cardinality"):
        validate_diagram(value)


def test_optional_defaults_are_normalized_without_mutating_input():
    value = sample()
    for key in ("role", "annotation", "fields"):
        del value["entities"][0][key]
    value["entities"][1]["fields"] = [{"id": "f", "name": "id"}]
    del value["relationships"][0]["label"]
    normalized = validate_diagram(value)
    assert normalized["entities"][0]["fields"] == []
    assert normalized["entities"][0]["annotation"] == ""
    assert normalized["entities"][1]["fields"][0]["pk"] is False
    assert normalized["relationships"][0]["label"] == ""
    assert "fields" not in value["entities"][0]


def test_relationship_handles_are_validated_and_preserved():
    value = sample()
    value["relationships"][0].update(source_handle="bottom", target_handle="top")
    assert validate_diagram(value)["relationships"][0]["source_handle"] == "bottom"
    value["relationships"][0]["target_handle"] = "bottom"
    with pytest.raises(ValueError, match="handle"):
        validate_diagram(value)


def test_boolean_version_is_not_a_version_number():
    value = sample()
    value["version"] = True
    with pytest.raises(ValueError, match="format"):
        validate_diagram(value)
