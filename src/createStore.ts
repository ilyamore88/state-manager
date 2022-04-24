import _ from 'lodash';

import {Store, Action, Reducer, State, Listener} from './types';

/**
 * This function is an entry point to use the store
 * It creates the store with an initial state
 *
 * It returns functions to use the store:
 *  subscribe - function for subscribing to each state changes
 *  dispatch - function for applying actions to the store
 *  getState - function returns a current state of the store
 *
 * @param reducer - current reducer function
 * @param initialState - initial state of the store
 */
function createStore(reducer: Reducer, initialState: State = {}): Store {
    const currentReducer = reducer;
    let state = _.cloneDeep(initialState);
    const currentListeners: Listener[] = [];

    /**
     * Function for subscribing on state changes
     *
     * @param listener - function, that will execute every state change
     *
     * @returns {() => void} unsubscribe function
     */
    const subscribe = (listener: Listener): (() => void) => {
        currentListeners.push(listener);

        return (): void => {
            currentListeners.splice(currentListeners.indexOf(listener), 1);
        };
    };

    /**
     * Dispatch action on the current state
     *
     * @param action - action that will be dispatched
     */
    const dispatch = (action: Action): void => {
        state = currentReducer(state, action);
        currentListeners.forEach((listener) => {
            listener();
        });
    };

    /**
     * Function returns current state
     */
    const getState = (): State => state;

    return {
        subscribe,
        dispatch,
        getState,
    };
}

export default createStore;
