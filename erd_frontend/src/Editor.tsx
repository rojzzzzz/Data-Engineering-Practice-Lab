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
} from "@xyflow/react";

import {
  removeElements,
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
  const current = useRef(diagram);
  useEffect(() => {
    setDiagram(initial);
    current.current = initial;
    setSelectedEntity(null);
    setSelectedRelation(null);
  }, [attemptId]);
  useEffect(() => {
    setNodes((previous) => {
      const byId = new Map(previous.map((node) => [node.id, node]));
      return diagram.entities.map((e) =>
        byId.get(e.id)?.data.entity === e
          ? byId.get(e.id)!
          : {
              ...byId.get(e.id),
              id: e.id,
              type: "entity",
              position: e.position,
              data: { entity: e },
            },
      );
    });
  }, [diagram.entities]);
  const commit = useCallback(
    (next: Diagram) => {
      current.current = next;
      setDiagram(next);
      onSave(next);
    },
    [onSave],
  );
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
      name: kind === "star_schema" ? "New dimension" : "New entity",
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
    <div className="erd-editor">
      <div className="erd-toolbar">
        <button
          type="button"
          disabled={diagram.entities.length >= 100}
          onClick={addEntity}
        >
          + Add {kind === "conceptual_erd" ? "entity" : "table"}
        </button>
        <span>
          {diagram.entities.length} entities · {diagram.relationships.length}{" "}
          relationships
        </span>
        <span className="erd-help">Drag from a node handle to connect</span>
      </div>
      <div className="erd-body">
        <aside className="erd-panel">
          <strong>Entities</strong>
          <div className="erd-list">
            {diagram.entities.map((e) => (
              <button
                type="button"
                className={selectedEntity === e.id ? "active" : ""}
                key={e.id}
                onClick={() => {
                  setSelectedEntity(e.id);
                  setSelectedRelation(null);
                }}
              >
                {e.name}
              </button>
            ))}
          </div>
          {selected && (
            <div className="erd-details">
              <h4>Edit entity</h4>
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
          <ReactFlow
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
            <Background />
            <Controls />
            <MiniMap pannable zoomable />
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
    </div>
  );
}
