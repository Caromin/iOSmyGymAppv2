import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import programReducer from "./programReducer";

// below equal to settingsReducer: settingsReducer
export default combineReducers({
  settingsReducer,
  programReducer
});
