import { combineReducers } from "redux";
import { studentReducer } from "./studentReducer";
export const reducers = combineReducers({
  allStudents: studentReducer,
  
});
