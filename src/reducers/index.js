import { combineReducers } from "redux";
import balance from "./balance";
import bitcoin from "./bitcoin";

const rootReducer = combineReducers({
  balance,
  bitcoin
});

export default rootReducer;
