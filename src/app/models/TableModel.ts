export enum ElementTypes {
  Task = "task",
  Milestone = "milestone",
  Subtask = "subtask",
  Section = "section"
}

export default interface TableModel {
  id: number;
  name: string;
  startDate: number;
  duration: number;
  description: string;
  type: ElementTypes;
}
