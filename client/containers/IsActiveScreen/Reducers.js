import { CHANGE_ACTIVE } from "./Actions";

export const inititalState = {
  isActive: false,
  completedExercises: 0,
  totalCompletedSets: 0,
  pendingCompletedList: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };
    default:
      return state;
  }
}
