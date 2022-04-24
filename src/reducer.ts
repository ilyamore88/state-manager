import _ from "lodash";
import {ActionType, Reducer, State} from "./types";

/**
 * Reducer function
 * This function applies actions in the current state
 *
 * @param state - previous state to apply action
 * @param action - information about the action in the previous state
 */
export const reducer: Reducer = (state: State, action): State => {
  /* Make state immutable */
  const stateCopy = _.cloneDeep(state);

  if (stateCopy.todos === undefined) {
    stateCopy.todos = {};
  }

  switch (action.type) {
    case ActionType.CreateToDo:
    case ActionType.ChangeToDo:
      stateCopy.todos[action.data.id] = action.data;
      break;

    case ActionType.RemoveToDo:
      delete stateCopy.todos[action.data.id];
      break;
  }

  return stateCopy;
}
