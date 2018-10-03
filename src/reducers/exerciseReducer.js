import { ADD_EXERCISE } from "../actions/exerciseActions";

export const inititalState = {
  exerciseArr: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_EXERCISE:
      console.log(action.payload);
      return {
        ...state,
        exerciseArr: [...state.exerciseArr, action.payload]
      };
    default:
      return state;
  }
}
