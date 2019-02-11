export enum ElementTypes {
  Task = 'task',
  Milestone = 'milestone',
  Subtask = 'subtask',
  Section = 'section'
}

export default interface TableModel {
  id: number;
  name: string;
  url: string;
  description: string;
  type: ElementTypes;
}
