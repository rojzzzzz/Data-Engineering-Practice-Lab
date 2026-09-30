import type {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";
import { createRoot, type Root } from "react-dom/client";
import { useEffect, useRef, useState } from "react";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { sql, PostgreSQL } from "@codemirror/lang-sql";
import { basicSetup } from "codemirror";
import "./sql.css";

type Task = {
  id: string;
  title: string;
  description: string;
  ordered: boolean;
  columns: { name: string; type: string; scale?: number }[];
};
type Data = {
  attemptId: number;
  exerciseHash: string;
  drafts: Record<string, string>;
  tasks: Task[];
  schema: Record<string, string[]>;
  busy: boolean;
  active: string;
  savedDrafts: Record<string, string>;
};
type Event = {
  id: string;
  action: string;
  drafts: Record<string, string>;
  active: string;
  selection: string;
};

function Workspace({
  data,
  emit,
}: {
  data: Data;
  emit: (event: Event) => void;
}) {
  const [active, setActive] = useState(data.active);
  const [drafts, setDrafts] = useState(data.drafts);
  const mount = useRef<HTMLDivElement>(null);
  const view = useRef<EditorView | null>(null);
  const current = useRef(drafts);
  const activeRef = useRef(active);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const props = useRef({ data, emit });
  props.current = { data, emit };
  const send = (action: string) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = undefined;
    const editor = view.current;
    if (editor)
      current.current = {
        ...current.current,
        [activeRef.current]: editor.state.doc.toString(),
      };
    if (props.current.data.busy && ["run", "explain", "check"].includes(action))
      return;
    props.current.emit({
      id: crypto.randomUUID(),
      action,
      drafts: { ...current.current },
      active: activeRef.current,
      selection: editor
        ? editor.state.sliceDoc(
            editor.state.selection.main.from,
            editor.state.selection.main.to,
          )
        : "",
    });
  };
  useEffect(() => {
    if (!mount.current) return;
    const editor = new EditorView({
      parent: mount.current,
      state: EditorState.create({
        doc: current.current[activeRef.current] || "",
        extensions: [
          basicSetup,
          sql({ dialect: PostgreSQL, schema: data.schema }),
          EditorView.contentAttributes.of({
            "aria-label": "SQL query editor",
            spellcheck: "false",
          }),
          keymap.of([
            {
              key: "Mod-Enter",
              run: () => {
                send("run");
                return true;
              },
            },
          ]),
          EditorView.updateListener.of((update) => {
            if (!update.docChanged) return;
            current.current = {
              ...current.current,
              [activeRef.current]: update.state.doc.toString(),
            };
            setDrafts(current.current);
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(() => send("save"), 750);
          }),
          EditorView.domEventHandlers({
            blur: () => {
              if (timer.current) send("save");
            },
          }),
          EditorView.theme({
            "&": { fontSize: "14px", height: "285px" },
            ".cm-scroller": { overflow: "auto" },
          }),
        ],
      }),
    });
    view.current = editor;
    return () => {
      if (timer.current) clearTimeout(timer.current);
      editor.destroy();
      view.current = null;
    };
  }, []);
  const changeTab = (id: string) => {
    send("save");
    activeRef.current = id;
    setActive(id);
    const editor = view.current;
    if (editor)
      editor.dispatch({
        changes: {
          from: 0,
          to: editor.state.doc.length,
          insert: current.current[id] || "",
        },
      });
  };
  const task = data.tasks.find((item) => item.id === active);
  const saved = JSON.stringify(drafts) === JSON.stringify(data.savedDrafts);
  return (
    <div className="sql-workspace">
      <div className="sql-tabs" role="tablist" aria-label="SQL answer tabs">
        {[...data.tasks, { id: "scratch", title: "Scratch · ungraded" }].map(
          (item) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === item.id}
              key={item.id}
              onClick={() => changeTab(item.id)}
            >
              {item.title}
            </button>
          ),
        )}
      </div>
      <div className="sql-contract">
        <p>
          {task?.description ||
            "Explore the visible dataset here. Scratch SQL is never assessed."}
        </p>
        {task && (
          <p>
            <strong>Output:</strong>{" "}
            {task.columns
              .map(
                (c) =>
                  `${c.name} (${c.type}${c.scale === undefined ? "" : `, ${c.scale} decimals`})`,
              )
              .join(" · ")}
            <br />
            {task.ordered
              ? "Row order is assessed as specified above."
              : "Row order is not assessed; duplicates still count."}
          </p>
        )}
      </div>
      <div ref={mount} className="sql-code" />
      <div className="sql-toolbar">
        <button type="button" disabled={data.busy} onClick={() => send("run")}>
          Run
        </button>
        <button
          type="button"
          disabled={data.busy}
          onClick={() => send("explain")}
        >
          Explain
        </button>
        <button
          type="button"
          disabled={data.busy}
          onClick={() => send("check")}
        >
          Check answer
        </button>
        <button
          type="button"
          disabled={!data.busy}
          onClick={() => send("cancel")}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            send("save");
            const contents = [
              ...data.tasks,
              { id: "scratch", title: "Scratch (ungraded)" },
            ]
              .map((t) => `-- ${t.title}\n${current.current[t.id] || ""}`)
              .join("\n\n");
            const url = URL.createObjectURL(
              new Blob([contents], { type: "text/plain;charset=utf-8" }),
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = `attempt_${data.attemptId}.sql`;
            link.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
          }}
        >
          Download SQL
        </button>
        <span aria-live="polite">
          {data.busy
            ? "Running…"
            : saved
              ? "Saved"
              : "Saving draft… previous results may be outdated"}
        </span>
      </div>
      <div className="sql-footnote">
        DuckDB · SELECT / WITH / WITH RECURSIVE · Ctrl/Cmd+Enter runs selection
        or active tab · Checks do not reveal solutions
      </div>
    </div>
  );
}

const roots = new WeakMap<FrontendRendererArgs["parentElement"], Root>();
const render: FrontendRenderer<{ event: Event | null }, Data> = ({
  data,
  parentElement,
  setStateValue,
}) => {
  const mount = parentElement.querySelector(".sql-root");
  if (!mount) throw new Error("SQL mount missing");
  let root = roots.get(parentElement);
  if (!root) {
    root = createRoot(mount);
    roots.set(parentElement, root);
  }
  root.render(
    <Workspace
      key={`${data.attemptId}:${data.exerciseHash}`}
      data={data}
      emit={(event) => setStateValue("event", event)}
    />,
  );
  return () => {
    roots.get(parentElement)?.unmount();
    roots.delete(parentElement);
  };
};
export default render;
