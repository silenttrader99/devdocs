import { Fragment } from "react/jsx-runtime";
import { useCreateSelector, useTypedSelector } from "../hooks/useTypedSelector";
import AddCell from "./AddCell";
import CellListItem from "./CellListItem";
import { useActions } from "../hooks/useActions";
import { useEffect } from "react";

const CellList: React.FC = () => {
  const cells = useTypedSelector(useCreateSelector);
  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
