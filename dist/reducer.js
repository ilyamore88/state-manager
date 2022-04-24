"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const lodash_1 = __importDefault(require("lodash"));
const types_1 = require("./types");
/**
 * Reducer function
 * This function applies actions in the current state
 *
 * @param state - previous state to apply action
 * @param action - information about the action in the previous state
 */
const reducer = (state, action) => {
    /* Make state immutable */
    const stateCopy = lodash_1.default.cloneDeep(state);
    if (stateCopy.todos === undefined) {
        stateCopy.todos = {};
    }
    switch (action.type) {
        case types_1.ActionType.CreateToDo:
        case types_1.ActionType.ChangeToDo:
            stateCopy.todos[action.data.id] = action.data;
            break;
        case types_1.ActionType.RemoveToDo:
            delete stateCopy.todos[action.data.id];
            break;
    }
    return stateCopy;
};
exports.reducer = reducer;
