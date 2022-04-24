import { Store, Reducer, State } from './types';
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
declare function createStore(reducer: Reducer, initialState?: State): Store;
export default createStore;
