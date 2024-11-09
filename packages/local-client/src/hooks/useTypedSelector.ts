import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../state";
import { createSelector } from "@reduxjs/toolkit";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const order = (state: RootState) => state.cells.order;
const data = (state: RootState) => state.cells.data;

export const useCreateSelector = createSelector([order, data], (order, data) =>
  order.map((id) => data[id]),
);
