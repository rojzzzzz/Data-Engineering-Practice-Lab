import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  Background,
  Controls,
  MiniMap,
  type Connection,
  type EdgeChange,
  type Node,
  type NodeChange,
  type ReactFlowInstance,
} from "@xyflow/react";

import {
  removeElements,
  arrangeEntities,
  type Diagram,
  type Entity,
  type Field,
  type Relationship,
} from "./model";
import { nodeTypes, edgeTypes } from "./CanvasElements";

type Props = {
  diagram: Diagram;
  attemptId: number;
  kind: string;
  onSave: (diagram: Diagram) => void;
};

const uid = () => crypto.randomUUID();
const defaultRole = (kind: string): Entity["role"] =>
  kind === "conceptual_erd"
    ? "entity"
    : kind === "star_schema"
      ? "dimension"
      : "table";
const defaultRelation = (source: string, target: string): Relationship => ({
  id: uid(),
  source,
  target,
  label: "",
  source_cardinality: "one",
  target_cardinality: "many",
  source_optional: false,
  target_optional: true,
});

export default function Editor({
  diagram: initial,
  attemptId,
  kind,
  onSave,
}: Props) {
  const [diagram, setDiagram] = useState<Diagram>(initial);
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);
  const [selectedRelation, setSelectedRelation] = useState<string | null>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [flow, setFlow] = useState<ReactFlowInstance | null>(null);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [history, setHistory] = useState<{
    past: Diagram[];
    future: Diagram[];
  }>({ past: [], future: [] });
  const lastEdit = useRef(0);
  const current = useRef(diagram);
  useEffect(() => {
    setDiagram(initial);
    current.current = initial;
    setSelectedEntity(null);
    setSelectedRelation(null);
    setHistory({ past: [], future: [] });
    setSearch("");
  }, [attemptId]);
  useEffect(() => {
    setNodes((previous) => {
      const byId = new Map(previous.map((node) => [node.id, node]));
      return diagram.entities.map((e) =>
        byId.get(e.id)?.data.entity === e &&
        byId.get(e.id)?.selected === (selectedEntity === e.id)
          ? byId.get(e.id)!
          : {
              ...byId.get(e.id),
              id: e.id,
              type: "entity",
              selected: selectedEntity === e.id,
              position: e.position,
              data: { entity: e },
            },
      );
    });
  }, [diagram.entities, selectedEntity]);
  const commit = useCallback(
    (next: Diagram) => {
      const previous = current.current;
      const now = Date.now();
      // Group rapid typing into one undo step; structural edits always get a step.
      const structural =
        previous.entities.length !== next.entities.length ||
        previous.relationships.length !== next.relationships.length ||
        previous.entities.some(
          (e, i) =>
            e.fields.length !== next.entities[i]?.fields.length ||
            e.position !== next.entities[i]?.position,
        );
      const newStep = now - lastEdit.current > 600 || structural;
      setHistory((h) => ({
        past:
          newStep || !h.past.length ? [...h.past.slice(-49), previous] : h.past,
        future: [],
      }));
      lastEdit.current = now;
      current.current = next;
      setDiagram(next);
      onSave(next);
    },
    [onSave],
  );
  const travel = (direction: "past" | "future") => {
    const stack = history[direction];
    if (!stack.length) return;
    const next = stack[stack.length - 1];
    setHistory(
      direction === "past"
        ? {
            past: stack.slice(0, -1),
            future: [...history.future, current.current],
          }
        : {
            past: [...history.past, current.current],
            future: stack.slice(0, -1),
          },
    );
    current.current = next;
    lastEdit.current = 0;
    setDiagram(next);
    onSave(next);
  };
  const focusEntity = (id: string) => {
    setSelectedEntity(id);
    setSelectedRelation(null);
    void flow?.fitView({
      nodes: [{ id }],
      padding: 0.7,
      maxZoom: 1.1,
      duration: 250,
    });
  };
  const editEntity = (id: string, changes: Partial<Entity>) =>
    commit({
      ...current.current,
      entities: current.current.entities.map((e) =>
        e.id === id ? { ...e, ...changes } : e,
      ),
    });
  const editRelation = (id: string, changes: Partial<Relationship>) =>
    commit({
      ...current.current,
      relationships: current.current.relationships.map((r) =>
        r.id === id ? { ...r, ...changes } : r,
      ),
    });
  const selected = diagram.entities.find((e) => e.id === selectedEntity);
  const entityNames = useMemo(
    () => new Map(diagram.entities.map((entity) => [entity.id, entity.name])),
    [diagram.entities],
  );
  const relation = diagram.relationships.find((r) => r.id === selectedRelation);
  const edges = useMemo(
    () =>
      diagram.relationships.map((r) => ({
        id: r.id,
        source: r.source,
        target: r.target,
        sourceHandle: r.source_handle ?? "right",
        targetHandle: r.target_handle ?? "left",
        selected: r.id === selectedRelation,
        type: "relation",
        data: { relation: r },
      })),
    [diagram.relationships, selectedRelation],
  );
  const onConnect = useCallback(
    (c: Connection) => {
      if (
        c.source &&
        c.target &&
        c.source !== c.target &&
        current.current.relationships.length < 300 &&
        !current.current.relationships.some(
          (r) => r.source === c.source && r.target === c.target,
        )
      ) {
        const r: Relationship = {
          ...defaultRelation(c.source, c.target),
          source_handle: c.sourceHandle as Relationship["source_handle"],
          target_handle: c.targetHandle as Relationship["target_handle"],
        };
        commit({
          ...current.current,
          relationships: [...current.current.relationships, r],
        });
        setSelectedRelation(r.id);
        setSelectedEntity(null);
      }
    },
    [commit],
  );
  const addEntity = () => {
    if (current.current.entities.length >= 100) return;
    const e: Entity = {
      id: uid(),
      name: `${kind === "star_schema" ? "dimension" : kind === "conceptual_erd" ? "entity" : "table"}_${diagram.entities.length + 1}`,
      role: defaultRole(kind),
      annotation: "",
      position: {
        x: 80 + (diagram.entities.length % 4) * 260,
        y: 80 + Math.floor(diagram.entities.length / 4) * 180,
      },
      fields: [],
    };
    commit({ ...current.current, entities: [...current.current.entities, e] });
    setSelectedEntity(e.id);
    setSelectedRelation(null);
    setSearch("");
    requestAnimationFrame(
      () =>
        void flow?.fitView({
          nodes: [{ id: e.id }],
          padding: 0.7,
          maxZoom: 1.1,
          duration: 250,
        }),
    );
  };
  const removeEntity = () => {
    if (!selected) return;
    commit(removeElements(current.current, [selected.id]));
    setSelectedEntity(null);
  };
  const addField = () => {
    if (!selected || selected.fields.length >= 100) return;
    editEntity(selected.id, {
      fields: [
        ...selected.fields,
        { id: uid(), name: "new_field", data_type: "", pk: false, fk: false },
      ],
    });
  };
  const editField = (fieldId: string, changes: Partial<Field>) => {
    if (selected)
      editEntity(selected.id, {
        fields: selected.fields.map((f) =>
          f.id === fieldId ? { ...f, ...changes } : f,
        ),
      });
  };
  const nodeChanges = (changes: NodeChange[]) =>
    setNodes((old) => applyNodeChanges(changes, old));
  const edgeChanges = (changes: EdgeChange[]) => {
    for (const change of changes) {
      if (change.type === "select") {
        setSelectedRelation((selected) =>
          change.selected
            ? change.id
            : selected === change.id
              ? null
              : selected,
        );
      }
    }
  };
  return (
    <div
      className={`erd-editor ${expanded ? "erd-expanded" : ""}`}
      onKeyDown={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("input, textarea, select, [contenteditable=true]"))
          return;
        if (
          (event.ctrlKey || event.metaKey) &&
          event.key.toLowerCase() === "z"
        ) {
          event.preventDefault();
          travel(event.shiftKey ? "future" : "past");
        }
      }}
    >
      <div className="erd-toolbar">
        <div className="erd-brand">
          <span className="erd-brand-icon">▦</span>
          <div>
            <strong>Schema studio</strong>
            <small>{kind.replaceAll("_", " ")}</small>
          </div>
        </div>
        <button
          className="erd-primary"
          type="button"
          disabled={diagram.entities.length >= 100}
          onClick={addEntity}
        >
          + Add {kind === "conceptual_erd" ? "entity" : "table"}
        </button>
        <div className="erd-toolbar-group">
          <button
            type="button"
            title="Undo (Ctrl/Cmd+Z outside text fields)"
            disabled={!history.past.length}
            onClick={() => travel("past")}
          >
            ↶ Undo
          </button>
          <button
            type="button"
            title="Redo (Ctrl/Cmd+Shift+Z)"
            disabled={!history.future.length}
            onClick={() => travel("future")}
          >
            ↷ Redo
          </button>
        </div>
        <button
          type="button"
          disabled={!diagram.entities.length}
          onClick={() => {
            commit(arrangeEntities(current.current));
            requestAnimationFrame(
              () => void flow?.fitView({ padding: 0.2, duration: 250 }),
            );
          }}
        >
          Tidy layout
        </button>
        <button
          type="button"
          onClick={() => void flow?.fitView({ padding: 0.2, duration: 250 })}
        >
          Fit view
        </button>
        <button
          type="button"
          className="erd-expand"
          aria-pressed={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Compact view" : "Expand canvas"}
        </button>
      </div>
      <div className="erd-body">
        <aside className="erd-panel">
          <div className="erd-section-heading">
            Explorer{" "}
            <span className="erd-count">{diagram.entities.length}</span>
          </div>
          <input
            className="erd-search"
            aria-label="Find a table or field"
            placeholder="Find a table or field…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="erd-list">
            {diagram.entities
              .filter((e) =>
                `${e.name} ${e.fields.map((f) => f.name).join(" ")}`
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              )
              .map((e) => (
                <button
                  type="button"
                  className={selectedEntity === e.id ? "active" : ""}
                  key={e.id}
                  onClick={() => {
                    focusEntity(e.id);
                  }}
                >
                  <span className={`erd-role-dot ${e.role}`} />{" "}
                  <span>{e.name || "Untitled"}</span>
                  <small>{e.fields.length}</small>
                </button>
              ))}
          </div>
          {search &&
            !diagram.entities.some((e) =>
              `${e.name} ${e.fields.map((f) => f.name).join(" ")}`
                .toLowerCase()
                .includes(search.toLowerCase()),
            ) && <p className="erd-muted">No matching tables or fields.</p>}
          {selected && (
            <div className="erd-details">
              <div className="erd-section-heading">
                <h4>Properties</h4>
                <button
                  type="button"
                  disabled={diagram.entities.length >= 100}
                  onClick={() => {
                    const copy = {
                      ...selected,
                      id: uid(),
                      name: `${selected.name.slice(0, 195)}_copy`,
                      fields: selected.fields.map((f) => ({ ...f, id: uid() })),
                      position: {
                        x: selected.position.x + 320,
                        y: selected.position.y + 40,
                      },
                    };
                    commit({
                      ...current.current,
                      entities: [...current.current.entities, copy],
                    });
                    setSelectedEntity(copy.id);
                  }}
                >
                  Duplicate
                </button>
              </div>
              <label>
                Name
                <input
                  maxLength={200}
                  aria-label="Entity name"
                  value={selected.name}
                  onChange={(e) =>
                    editEntity(selected.id, { name: e.target.value })
                  }
                />
              </label>
              <label>
                Role
                <select
                  aria-label="Entity role"
                  value={selected.role}
                  onChange={(e) =>
                    editEntity(selected.id, {
                      role: e.target.value as Entity["role"],
                    })
                  }
                >
                  {(kind === "star_schema"
                    ? ["fact", "dimension"]
                    : kind === "logical_erd"
                      ? ["table"]
                      : ["entity"]
                  ).map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </select>
              </label>
              <label>
                {kind === "star_schema" ? "Grain / annotation" : "Annotation"}
                <textarea
                  maxLength={1000}
                  aria-label="Entity annotation"
                  value={selected.annotation}
                  onChange={(e) =>
                    editEntity(selected.id, { annotation: e.target.value })
                  }
                />
              </label>
              <label>
                Connect to another table
                <select
                  aria-label="Connect to another table"
                  value=""
                  disabled={diagram.relationships.length >= 300}
                  onChange={(event) => {
                    if (event.target.value)
                      onConnect({
                        source: selected.id,
                        target: event.target.value,
                        sourceHandle: "right",
                        targetHandle: "left",
                      });
                  }}
                >
                  <option value="">Choose a table…</option>
                  {diagram.entities
                    .filter(
                      (e) =>
                        e.id !== selected.id &&
                        !diagram.relationships.some(
                          (r) => r.source === selected.id && r.target === e.id,
                        ),
                    )
                    .map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    ))}
                </select>
              </label>
              <div className="erd-section-heading">
                Fields{" "}
                <button
                  type="button"
                  disabled={selected.fields.length >= 100}
                  onClick={addField}
                >
                  + Field
                </button>
              </div>
              {selected.fields.map((f) => (
                <div className="erd-field-edit" key={f.id}>
                  <input
                    maxLength={200}
                    aria-label="Field name"
                    value={f.name}
                    onChange={(e) => editField(f.id, { name: e.target.value })}
                  />
                  <input
                    maxLength={100}
                    aria-label="Field data type"
                    placeholder="Type"
                    list={`erd-types-${attemptId}`}
                    value={f.data_type}
                    onChange={(e) =>
                      editField(f.id, { data_type: e.target.value })
                    }
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={f.pk}
                      onChange={(e) =>
                        editField(f.id, { pk: e.target.checked })
                      }
                    />{" "}
                    PK
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={f.fk}
                      onChange={(e) =>
                        editField(f.id, { fk: e.target.checked })
                      }
                    />{" "}
                    FK
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      editEntity(selected.id, {
                        fields: selected.fields.filter((x) => x.id !== f.id),
                      })
                    }
                  >
                    Remove field
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="erd-danger"
                onClick={removeEntity}
              >
                Delete entity
              </button>
            </div>
          )}
          <strong>Relationships</strong>
          <div className="erd-list">
            {diagram.relationships.map((r) => (
              <button
                type="button"
                className={selectedRelation === r.id ? "active" : ""}
                key={r.id}
                onClick={() => {
                  setSelectedRelation(r.id);
                  setSelectedEntity(null);
                }}
              >
                {entityNames.get(r.source)} → {entityNames.get(r.target)}
              </button>
            ))}
          </div>
          {!selected && !relation && (
            <div className="erd-inspector-hint">
              <strong>Your model, one connection at a time.</strong>
              <p>
                Select a table to edit its fields. Drag a green connector to
                another table to add a relationship.
              </p>
              <small>
                PK · Primary key
                <br />
                FK · Foreign key
                <br />
                0..* · Zero or many
              </small>
            </div>
          )}
          {relation && (
            <div className="erd-details">
              <h4>Edit relationship</h4>
              <label>
                Label
                <input
                  maxLength={200}
                  aria-label="Relationship label"
                  value={relation.label}
                  onChange={(e) =>
                    editRelation(relation.id, { label: e.target.value })
                  }
                />
              </label>
              {(["source", "target"] as const).map((end) => (
                <div key={end}>
                  <strong>
                    {end === "source"
                      ? diagram.entities.find((e) => e.id === relation.source)
                          ?.name
                      : diagram.entities.find((e) => e.id === relation.target)
                          ?.name}
                  </strong>
                  <label>
                    Cardinality
                    <select
                      aria-label={`${end} cardinality`}
                      value={relation[`${end}_cardinality`]}
                      onChange={(e) =>
                        editRelation(relation.id, {
                          [`${end}_cardinality`]: e.target.value,
                        })
                      }
                    >
                      <option value="one">One</option>
                      <option value="many">Many</option>
                    </select>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={relation[`${end}_optional`]}
                      onChange={(e) =>
                        editRelation(relation.id, {
                          [`${end}_optional`]: e.target.checked,
                        })
                      }
                    />{" "}
                    Optional
                  </label>
                </div>
              ))}
              <button
                type="button"
                className="erd-danger"
                onClick={() => {
                  commit({
                    ...current.current,
                    relationships: current.current.relationships.filter(
                      (r) => r.id !== relation.id,
                    ),
                  });
                  setSelectedRelation(null);
                }}
              >
                Delete relationship
              </button>
            </div>
          )}
        </aside>
        <div className="erd-canvas">
          {!diagram.entities.length && (
            <div className="erd-empty">
              <span>▦</span>
              <h3>Give your data a structure</h3>
              <p>
                Add your first {kind === "conceptual_erd" ? "entity" : "table"},
                define its fields,
                <br />
                then connect the relationships.
              </p>
              <button type="button" onClick={addEntity}>
                + Create your first{" "}
                {kind === "conceptual_erd" ? "entity" : "table"}
              </button>
            </div>
          )}
          <ReactFlow
            onInit={setFlow}
            onPaneClick={() => {
              setSelectedEntity(null);
              setSelectedRelation(null);
            }}
            minZoom={0.1}
            maxZoom={1.8}
            snapToGrid
            snapGrid={[20, 20]}
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={nodeChanges}
            onEdgesChange={edgeChanges}
            onDelete={({ nodes, edges }) =>
              commit(
                removeElements(
                  current.current,
                  nodes.map((node) => node.id),
                  edges.map((edge) => edge.id),
                ),
              )
            }
            onConnect={onConnect}
            onNodeClick={(_, node) => {
              setSelectedEntity(node.id);
              setSelectedRelation(null);
            }}
            onEdgeClick={(_, edge) => {
              setSelectedRelation(edge.id);
              setSelectedEntity(null);
            }}
            onNodeDragStop={(_, node, movedNodes) => {
              const positions = new Map(
                movedNodes.map((moved) => [moved.id, moved.position]),
              );
              positions.set(node.id, node.position);
              commit({
                ...current.current,
                entities: current.current.entities.map((entity) =>
                  positions.has(entity.id)
                    ? { ...entity, position: positions.get(entity.id)! }
                    : entity,
                ),
              });
            }}
            fitView
            fitViewOptions={{ padding: 0.25 }}
          >
            <Background gap={20} size={1} color="#c9d6dc" />
            <Controls />
            <MiniMap
              pannable
              zoomable
              nodeColor={(node) =>
                (node.data.entity as Entity).role === "fact"
                  ? "#b59ee8"
                  : "#85bcb5"
              }
            />
            <svg>
              <defs>
                <marker
                  id="erd-crowfoot"
                  markerWidth="12"
                  markerHeight="12"
                  refX="11"
                  refY="6"
                  orient="auto"
                >
                  <path
                    d="M1 1 L11 6 L1 11 M1 6 L11 6"
                    stroke="#607889"
                    fill="none"
                  />
                </marker>
                <marker
                  id="erd-crowfoot-start"
                  markerWidth="12"
                  markerHeight="12"
                  refX="1"
                  refY="6"
                  orient="auto-start-reverse"
                >
                  <path
                    d="M11 1 L1 6 L11 11 M11 6 L1 6"
                    stroke="#607889"
                    fill="none"
                  />
                </marker>
                <marker
                  id="erd-one"
                  markerWidth="8"
                  markerHeight="12"
                  refX="7"
                  refY="6"
                  orient="auto"
                >
                  <path d="M6 1 L6 11" stroke="#607889" fill="none" />
                </marker>
                <marker
                  id="erd-one-start"
                  markerWidth="8"
                  markerHeight="12"
                  refX="1"
                  refY="6"
                  orient="auto-start-reverse"
                >
                  <path d="M2 1 L2 11" stroke="#607889" fill="none" />
                </marker>
              </defs>
            </svg>
          </ReactFlow>
        </div>
      </div>
      <div className="erd-status">
        <span>
          <i /> {diagram.entities.length} tables / entities ·{" "}
          {diagram.relationships.length} relationships
        </span>
        <span>Drag to move · Connect from the handles · Scroll to zoom</span>
      </div>
      <datalist id={`erd-types-${attemptId}`}>
        {[
          "INTEGER",
          "BIGINT",
          "VARCHAR",
          "BOOLEAN",
          "DATE",
          "TIMESTAMP",
          "DECIMAL(12,2)",
          "UUID",
        ].map((type) => (
          <option key={type} value={type} />
        ))}
      </datalist>
    </div>
  );
}
