import { combineReducers } from "redux";
import settingsReducer from "../containers/SettingsScreen/Reducers";
import programReducer from "../containers/ProgramScreen/Reducers";
import exerciseReducer from "../containers/ExerciseListScreen/Reducers";
import isActiveReducer from "../containers/IsActiveScreen/Reducers";

// below equal to settingsReducer: settingsReducer
export default combineReducers({
  settingsReducer,
  programReducer,
  exerciseReducer,
  isActiveReducer
});