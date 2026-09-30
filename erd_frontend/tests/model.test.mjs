import assert from "node:assert/strict";
import test from "node:test";
import { removeElements, arrangeEntities } from "../src/model.ts";
import { quoteIdentifier, selectQuery } from "../src/sql_helpers.ts";

test("SELECT builder quotes identifiers and uses only selected columns", () => {
  assert.equal(quoteIdentifier('a"b'), '"a""b"');
  assert.equal(
    selectQuery("order", ["id", "amount"]),
    'SELECT\n  "id",\n  "amount"\nFROM "order"\nLIMIT 100;',
  );
  assert.equal(
    selectQuery("sales", []),
    'SELECT\n  *\nFROM "sales"\nLIMIT 100;',
  );
});

const diagram = {
  version: 1,
  kind: "conceptual_erd",
  entities: ["a", "b", "c"].map((id) => ({ id })),
  relationships: [
    { id: "ab", source: "a", target: "b" },
    { id: "bc", source: "b", target: "c" },
    { id: "ac", source: "a", target: "c" },
  ],
};

test("tidy layout leaves room for tall tables and preserves model content", () => {
  const input = {
    ...diagram,
    entities: diagram.entities.map((e, i) => ({
      ...e,
      position: { x: 0, y: 0 },
      fields: Array(i === 0 ? 30 : 2).fill({}),
      annotation: i === 0 ? "Notes" : "",
    })),
  };
  const result = arrangeEntities(input);
  assert.equal(result.entities[0].position.y, result.entities[1].position.y);
  assert.ok(
    result.entities[2].position.y >
      result.entities[0].position.y + 30 * 30 + 140,
  );
  assert.equal(result.relationships, input.relationships);
  assert.equal(result.entities[0].fields, input.entities[0].fields);
  assert.deepEqual(input.entities[0].position, { x: 0, y: 0 });
  assert.deepEqual(arrangeEntities(result), result);
  assert.deepEqual(arrangeEntities({ ...input, entities: [] }).entities, []);
});

test("deleting an entity removes only its incident relationships", () => {
  const result = removeElements(diagram, ["b"]);
  assert.deepEqual(
    result.entities.map((entity) => entity.id),
    ["a", "c"],
  );
  assert.deepEqual(
    result.relationships.map((relation) => relation.id),
    ["ac"],
  );
  assert.equal(diagram.entities.length, 3);
  assert.equal(diagram.relationships.length, 3);
});

test("deleting a relationship preserves all entities", () => {
  const result = removeElements(diagram, [], ["ab"]);
  assert.deepEqual(result.entities, diagram.entities);
  assert.deepEqual(
    result.relationships.map((relation) => relation.id),
    ["bc", "ac"],
  );
});

test("a mixed selection deletes entities and unrelated selected edges", () => {
  const result = removeElements(diagram, ["b"], ["ac"]);
  assert.equal(result.entities.length, 2);
  assert.deepEqual(result.relationships, []);
});
