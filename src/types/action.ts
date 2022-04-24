import {ToDo} from './toDo';

export enum ActionType {
  CreateToDo,
  ChangeToDo,
  RemoveToDo,
}

interface CreateToDoAction {
  type: ActionType.CreateToDo,
  data: ToDo,
}

interface ChangeToDoAction {
  type: ActionType.ChangeToDo,
  data: ToDo,
}

interface RemoveToDoAction {
  type: ActionType.RemoveToDo,
  data: {
    id: number,
  },
}

export type Action = CreateToDoAction | ChangeToDoAction | RemoveToDoAction;
