import { Action } from "@ngrx/store";
import { TableModel } from "../../models/TableModel";

export const SELECT = "[Films] Select";

export const ADD_ONE = "[Films] Add One";

export class Select implements Action {
  readonly type = SELECT;
  constructor(public payload: number) {}
}

export class AddOne implements Action {
  readonly type = ADD_ONE;
  constructor(public payload: TableModel) {}
}

export type Action = AddOne | Select;
