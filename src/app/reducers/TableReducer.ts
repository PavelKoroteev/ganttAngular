import TableModel from "./../models/TableModel";
import { ElementTypes } from "./../models/TableModel";
import * as TableActions from "./../actions/Table";

// Section 1
const initialState: TableModel = {
  name: "Initial Tutorial",
  id: 1,
  description: "",
  type: ElementTypes.Task,
  startDate: 1550329570032,
  duration: 14400000
};

// Section 2
export function reducer(
  state: TableModel[] = [initialState],
  action: TableActions.Actions
) {
  // Section 3
  switch (action.type) {
    case TableActions.ADD_TUTORIAL:
      return [...state, action.payload];
    default:
      return state;
  }
}
