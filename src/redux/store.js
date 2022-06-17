import { createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { applyMiddleware } from "redux";
import { initialState } from "./reducers/userReducers";
const store = createStore(reducers, initialState, applyMiddleware(thunk));
export default store;
