import { combineReducers } from "redux";
import sponsors from "./sponsors";

const rootReducer = combineReducers({
  sponsors: sponsors,
});

export default rootReducer;
