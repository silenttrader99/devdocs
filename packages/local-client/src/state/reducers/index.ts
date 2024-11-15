import { combineReducers } from "redux";
import cellsReducer from "./cellsReducer";
import bundleReducer from "./bundlesReducer";

const reducers = combineReducers({
  cells: cellsReducer,
  bundle: bundleReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
