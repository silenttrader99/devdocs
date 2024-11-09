import { ActionType } from "../action-types";
import { Cell, CellTypes } from "../cell";

export type Direction = "up" | "down";

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: { id: string; direction: Direction };
}
export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}
export interface InsertCellAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: { id: string | null; type: CellTypes };
}
export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: { id: string; content: string };
}

export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    id: string;
  };
}

export interface BundleCompletedAction {
  type: ActionType.BUNDLE_COMPLETED;
  payload: {
    id: string;
    bundle: {
      code: string;
      error: string;
    };
  };
}

export interface FetchCellsAction {
  type: ActionType.FETCH_CELLS;
}

export interface FetchCellsCompleteAction {
  type: ActionType.FETCH_CELLS_COMPLETE;
  payload: Cell[];
}

export interface FetchCellsErrorAction {
  type: ActionType.FETCH_CELLS_ERROR;
  payload: string;
}

export interface SaveCellsErrorAction {
  type: ActionType.SAVE_CELLS_ERROR;
  payload: string;
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompletedAction
  | FetchCellsAction
  | FetchCellsCompleteAction
  | FetchCellsErrorAction
  | SaveCellsErrorAction;
