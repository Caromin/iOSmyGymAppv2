import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import programReducer from "./programReducer";
import exerciseReducer from "./exerciseReducer";

// below equal to settingsReducer: settingsReducer
export default combineReducers({
  settingsReducer,
  programReducer,
  exerciseReducer
});
