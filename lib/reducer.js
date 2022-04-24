import _ from "lodash";
import { ActionType } from "./types";
/**
 * Reducer function
 * This function applies actions in the current state
 *
 * @param state - previous state to apply action
 * @param action - information about the action in the previous state
 */
export const reducer = (state, action) => {
    /* Make state immutable */
    const stateCopy = _.cloneDeep(state);
    if (stateCopy.todos === undefined) {
        stateCopy.todos = [];
    }
    switch (action.type) {
        case ActionType.CreateToDo:
            stateCopy.todos.push(action.data);
            break;
        case ActionType.ChangeToDo:
            stateCopy.todos = stateCopy.todos.map((todo) => todo.id === action.data.id ? action.data : todo);
            break;
        case ActionType.RemoveToDo:
            stateCopy.todos = stateCopy.todos.filter((todo) => todo.id !== action.data.id);
            break;
    }
    return stateCopy;
};
