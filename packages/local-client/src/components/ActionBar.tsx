import { HiArrowUp, HiArrowDown, HiTrash } from "react-icons/hi";
import { useActions } from "../hooks/useActions";

interface ActionBarProps {
  id: string;
}

const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
  const { moveCell, deleteCell } = useActions();

  return (
    <div className="absolute right-0 top-0">
      <button
        onClick={() => moveCell(id, "up")}
        className="rounded-md p-2 transition-colors hover:bg-gray-100"
      >
        <HiArrowUp className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={() => moveCell(id, "down")}
        className="rounded-md p-2 transition-colors hover:bg-gray-100"
      >
        <HiArrowDown className="h-5 w-5 text-gray-600" />
      </button>
      <button
        onClick={() => deleteCell(id)}
        className="rounded-md p-2 transition-colors hover:bg-red-100"
      >
        <HiTrash className="h-5 w-5 text-red-500" />
      </button>
    </div>
  );
};

export default ActionBar;
