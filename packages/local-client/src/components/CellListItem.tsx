import { Cell } from "../state";
import ActionBar from "./ActionBar";
import CodeEditor from "./CodeEditor";
import TextEditor from "./TextEditor";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="mb-2 h-8 w-full">
          <ActionBar id={cell.id} />
        </div>
        <CodeEditor cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <div className="mb-2 h-8 w-full">
          <ActionBar id={cell.id} />
        </div>
        <TextEditor cell={cell} />
      </>
    );
  }

  return <div className="relative">{child}</div>;
};

export default CellListItem;
