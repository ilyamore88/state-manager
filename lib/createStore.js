import _ from 'lodash';
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
export function createStore(reducer, initialState = {}) {
    const currentReducer = reducer;
    let state = _.cloneDeep(initialState);
    const currentListeners = [];
    /**
     * Function for subscribing on state changes
     *
     * @param listener - function, that will execute every state change
     *
     * @returns {() => void} unsubscribe function
     */
    const subscribe = (listener) => {
        currentListeners.push(listener);
        return () => {
            currentListeners.splice(currentListeners.indexOf(listener), 1);
        };
    };
    /**
     * Dispatch action on the current state
     *
     * @param action - action that will be dispatched
     */
    const dispatch = (action) => {
        state = currentReducer(state, action);
        currentListeners.forEach((listener) => {
            listener();
        });
    };
    /**
     * Function returns current state
     */
    const getState = () => state;
    return {
        subscribe,
        dispatch,
        getState,
    };
}
