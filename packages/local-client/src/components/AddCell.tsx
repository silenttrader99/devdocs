import { HiCode } from "react-icons/hi";
import { MdTextFormat } from "react-icons/md";
import { useActions } from "../hooks/useActions";

interface AddCellProps {
  previousCellId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ previousCellId }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className="relative my-2">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="flex space-x-4 bg-white px-4">
          <button
            onClick={() => insertCellAfter(previousCellId, "code")}
            className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-100"
          >
            <HiCode className="mr-2 h-5 w-5" />
            <span className="font-inter">Code</span>
          </button>

          <button
            onClick={() => insertCellAfter(previousCellId, "text")}
            className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 transition-colors hover:bg-gray-100"
          >
            <MdTextFormat className="mr-2 h-5 w-5" />
            <span className="font-inter">Text</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCell;
