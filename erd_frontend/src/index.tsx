import type {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";
import { createRoot, type Root } from "react-dom/client";
import Editor from "./Editor";
import type { Diagram } from "./model";
import "@xyflow/react/dist/style.css";
import "./style.css";

type State = { diagram: Diagram };
type Data = { diagram: Diagram; attemptId: number; kind: string };
const roots = new WeakMap<FrontendRendererArgs["parentElement"], Root>();
const render: FrontendRenderer<State, Data> = ({
  data,
  parentElement,
  setStateValue,
}) => {
  const mount = parentElement.querySelector(".erd-root");
  if (!mount) throw new Error("ERD mount element missing");
  let root = roots.get(parentElement);
  if (!root) {
    root = createRoot(mount);
    roots.set(parentElement, root);
  }
  root.render(
    <Editor
      {...data}
      onSave={(diagram) => setStateValue("diagram", diagram)}
    />,
  );
  return () => {
    roots.get(parentElement)?.unmount();
    roots.delete(parentElement);
  };
};
export default render;
