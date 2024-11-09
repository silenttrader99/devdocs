import { produce } from "immer";
import { Action } from "../actions";
import { ActionType } from "../action-types";

export interface BundleState {
  [key: string]:
    | {
        isLoading: boolean;
        code: string;
        error: string;
      }
    | undefined;
}

const initialState: BundleState = {};

const bundleReducer = produce(
  (state: BundleState = initialState, action: Action): BundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.id] = {
          isLoading: true,
          code: "",
          error: "",
        }; //assigning to object
        return state;
      case ActionType.BUNDLE_COMPLETED:
        state[action.payload.id] = {
          isLoading: false,
          code: action.payload.bundle.code,
          error: action.payload.bundle.error,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default bundleReducer;
