import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { updateCell } = useActions();

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={ref} data-color-mode="light">
        <MDEditor
          value={cell.content}
          onChange={(v) => updateCell(cell.id, v || "")}
        />
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => setEditing(true)}
        data-color-mode="light"
        className="cursor-pointer p-2"
      >
        <MDEditor.Markdown
          source={cell.content || "click to edit"}
          style={{ fontFamily: "Inter", fontSize: "20px" }}
        />
      </div>
    </>
  );
};

export default TextEditor;
