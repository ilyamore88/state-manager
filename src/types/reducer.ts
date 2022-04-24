import { Action } from "./action";
import {State} from "./store";

export type Reducer = (state: State, action: Action) => State;
