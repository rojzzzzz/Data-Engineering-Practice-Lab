import assert from "node:assert/strict";
import test from "node:test";
import { removeElements } from "../src/model.ts";

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
