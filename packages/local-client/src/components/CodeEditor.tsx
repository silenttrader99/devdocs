import { Editor, OnMount } from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import Preview from "./Preview";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Spinner from "./Spinner";
import { useCumulativeCode } from "../hooks/useCumulativeCode";

interface CodeEditorProps {
  cell: Cell;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ cell }) => {
  const editorRef = useRef<any>();
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [cumulativeCode, cell.id, createBundle]);

  const handleMount: OnMount = (editor) => {
    editorRef.current = editor;

    const model = editor.getModel();
    model?.onDidChangeContent(() => {
      updateCell(cell.id, model?.getValue());
    });
  };

  return (
    <div className="flex h-48 max-h-[400px] min-h-60 resize-y flex-row overflow-y-hidden">
      <div className="w-1/2 min-w-64 max-w-[1000px] resize-x overflow-y-hidden border border-gray-300 p-2">
        <Editor
          onMount={handleMount}
          height="300px"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={cell.content}
          theme="light"
          options={{
            wordWrap: "on",
            minimap: { enabled: false },
            showUnused: false,
            folding: false,
            lineNumbersMinChars: 3,
            fontSize: 16,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            scrollbar: {
              vertical: "hidden",
              verticalScrollbarSize: 0,
            },
          }}
        />
      </div>

      <div className="flex-1">
        {!bundle || bundle.isLoading ? (
          <Spinner />
        ) : (
          <Preview code={bundle.code} error={bundle.error} />
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
