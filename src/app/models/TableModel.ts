export enum ElementTypes {
    Task = "task",
    Milestone = "milestone",
    Subtask = "subtask",
    Section = "section"
}

export const ElementTypesData = [
    { id: ElementTypes.Task, title: "Task" },
    { id: ElementTypes.Milestone, title: "Milestone" },
    { id: ElementTypes.Subtask, title: "Subtask" },
    { id: ElementTypes.Section, title: "Section" }
];

export default interface TableModel {
    id: number;
    name: string;
    startDate: number;
    duration: number;
    description: string;
    type: ElementTypes;
}
