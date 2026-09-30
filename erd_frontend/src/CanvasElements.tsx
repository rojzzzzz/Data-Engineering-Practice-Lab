import {
  BaseEdge,
  EdgeLabelRenderer,
  Handle,
  Position,
  getBezierPath,
  type EdgeProps,
} from "@xyflow/react";
import type { Entity, Relationship } from "./model";
import { memo } from "react";

function EntityNode({ data }: { data: { entity: Entity } }) {
  const e = data.entity;
  return (
    <div className="erd-node">
      <Handle type="target" position={Position.Left} id="left" />
      <Handle type="source" position={Position.Right} id="right" />
      <Handle type="target" position={Position.Top} id="top" />
      <Handle type="source" position={Position.Bottom} id="bottom" />
      <div className="erd-node-heading">
        <small>{e.role}</small>
        <strong>{e.name}</strong>
      </div>
      {e.annotation && <div className="erd-node-note">{e.annotation}</div>}
      {e.fields.map((f) => (
        <div className="erd-node-field" key={f.id}>
          <span>
            {f.pk ? "🔑 " : f.fk ? "⇢ " : ""}
            {f.name}
          </span>
          <small>{f.data_type}</small>
        </div>
      ))}
    </div>
  );
}

const endText = (optional: boolean, cardinality: string) =>
  optional
    ? cardinality === "many"
      ? "0..*"
      : "0..1"
    : cardinality === "many"
      ? "1..*"
      : "1";
function RelationEdge(props: EdgeProps) {
  const [path, labelX, labelY] = getBezierPath(props);
  const relation = props.data?.relation as Relationship | undefined;
  return (
    <>
      <BaseEdge
        path={path}
        markerEnd={
          relation?.target_cardinality === "many"
            ? "url(#erd-crowfoot)"
            : "url(#erd-one)"
        }
        markerStart={
          relation?.source_cardinality === "many"
            ? "url(#erd-crowfoot-start)"
            : "url(#erd-one-start)"
        }
        style={{ stroke: "#607889", strokeWidth: 2 }}
      />
      {relation && (
        <EdgeLabelRenderer>
          <div
            className="erd-edge-label"
            style={{
              transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            }}
          >
            {relation.label || "relationship"} ·{" "}
            {endText(relation.source_optional, relation.source_cardinality)} :{" "}
            {endText(relation.target_optional, relation.target_cardinality)}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
export const nodeTypes = { entity: memo(EntityNode) };
export const edgeTypes = { relation: memo(RelationEdge) };
