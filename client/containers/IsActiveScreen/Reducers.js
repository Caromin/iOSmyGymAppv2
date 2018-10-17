import {
  CHANGE_ACTIVE,
  COMPLETED_EXERCISE,
  LOCAL_STORAGE_TOTAL,
  LOCAL_STORAGE_EXERCISE
} from "./Actions";

export const inititalState = {
  isActive: false,
  completedWorkouts: 0,
  weeklyCompletedList: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };
    case COMPLETED_EXERCISE:
      return {
        ...state,
        weeklyCompletedList: [...state.weeklyCompletedList, action.payload],
        completedWorkouts: state.completedWorkouts + 1
      };
    case LOCAL_STORAGE_TOTAL:
      if (action.payload === null) {
        return { ...state };
      }
      return {
        ...state,
        completedWorkouts: action.payload
      };
    case LOCAL_STORAGE_EXERCISE:
      return {
        ...state,
        weeklyCompletedList: action.payload
      };
    default:
      return state;
  }
}
