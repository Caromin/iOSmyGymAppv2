import { combineReducers } from "redux";
import settingsReducer from "../containers/SettingsScreen/Reducers";
import programReducer from "../containers/ProgramScreen/Reducers";
import exerciseReducer from "../containers/ExerciseListScreen/Reducers";
import isActiveReducer from "../containers/IsActiveScreen/Reducers";
import homeReducer from "../containers/HomeScreen/Reducers";

// below equal to settingsReducer: settingsReducer
export default combineReducers({
  settingsReducer,
  programReducer,
  exerciseReducer,
  isActiveReducer,
  homeReducer
});
