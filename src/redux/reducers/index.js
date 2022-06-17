import { userReducers } from "./userReducers";
import { combineReducers } from "redux";

const reducers = combineReducers({
  userReducers,
});

export default reducers;
