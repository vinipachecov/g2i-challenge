import { combineReducers } from "redux";
import question from "./ducks/question";

const rootReducer = combineReducers({
  question
});

export default rootReducer;
