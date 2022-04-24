import { Action } from "./action";
import { State } from "./store";
export declare type Reducer = (state: State, action: Action) => State;
