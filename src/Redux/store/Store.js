import { createStore } from "redux";
import { cartReducer } from "../Reducers/cartReducers";

export const store = createStore(cartReducer)