import { ToDo } from './toDo';
export declare enum ActionType {
    CreateToDo = 0,
    ChangeToDo = 1,
    RemoveToDo = 2
}
interface CreateToDoAction {
    type: ActionType.CreateToDo;
    data: ToDo;
}
interface ChangeToDoAction {
    type: ActionType.ChangeToDo;
    data: ToDo;
}
interface RemoveToDoAction {
    type: ActionType.RemoveToDo;
    data: {
        id: number;
    };
}
export declare type Action = CreateToDoAction | ChangeToDoAction | RemoveToDoAction;
export {};
