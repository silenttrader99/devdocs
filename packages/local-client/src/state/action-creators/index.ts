import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import {
  DeleteCellAction,
  Direction,
  InsertCellAction,
  MoveCellAction,
  UpdateCellAction,
  Action,
} from "../actions";
import { Cell, CellTypes } from "../cell";
import bundle from "../../bundler";
import axios from "axios";
import { RootState } from "../reducers";

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};
export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionType.DELETE_CELL,
    payload: id,
  };
};
export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: ActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};
export const insertCellAfter = (
  id: string | null,
  type: CellTypes,
): InsertCellAction => {
  return { type: ActionType.INSERT_CELL_AFTER, payload: { id, type } };
};

export const createBundle = (id: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {
        id,
      },
    });

    const result = await bundle(input);
    dispatch({
      type: ActionType.BUNDLE_COMPLETED,
      payload: {
        id,
        bundle: result,
      },
    });
  };
};

export const fetchCells = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_CELLS });

    try {
      const { data }: { data: Cell[] } = await axios.get("/cells");
      dispatch({ type: ActionType.FETCH_CELLS_COMPLETE, payload: data });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.FETCH_CELLS_ERROR,
          payload: error.message,
        });
      }
    }
  };
};

export const saveCells = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const {
      cells: { data, order },
    } = getState();
    const cells = order.map((id) => data[id]); //maybe?

    try {
      await axios.post("/cells", { cells });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionType.SAVE_CELLS_ERROR,
          payload: error.message,
        });
      }
    }
  };
};
