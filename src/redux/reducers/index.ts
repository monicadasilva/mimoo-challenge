import { combineReducers } from "redux";
import brands from "./brands";
import sponsors from "./sponsors";

const rootReducer = combineReducers({
  sponsors: sponsors,
  brands: brands,
});

export default rootReducer;
