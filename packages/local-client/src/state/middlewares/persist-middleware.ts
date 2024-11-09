import { Middleware } from "redux";
import { Action } from "../actions";
import { ActionType } from "../action-types";
import { saveCells } from "../action-creators";
import { RootState } from "../reducers";

// Middleware function
export const persistMiddleware: Middleware<{}, RootState> = ({
  dispatch,
  getState,
}) => {
  let timer: any;

  return (next) => (action: unknown) => {
    next(action);

    if (typeof action === "object" && action !== null && "type" in action) {
      const typedAction = action as Action;

      if (
        [
          ActionType.MOVE_CELL,
          ActionType.UPDATE_CELL,
          ActionType.INSERT_CELL_AFTER,
          ActionType.DELETE_CELL,
        ].includes(typedAction.type)
      ) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 250);
      }
    }
  };
};
