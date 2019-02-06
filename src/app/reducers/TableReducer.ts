import { Action } from '@ngrx/store';
import TableModel from './../models/TableModel';
import * as TableActions from './../actions/Table';

// Section 1
const initialState: TableModel = {
  name: 'Initial Tutorial',
  url: 'http://google.com',
  id: 1,
  description: ''
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
