import { CHANGE_ACTIVE, COMPLETED_EXERCISE } from "./Actions";

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

    default:
      return state;
  }
}
