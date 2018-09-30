import { ADD_NEW_PROGRAM, GET_LOCAL_ACTION } from "../actions/programActions";

export const inititalState = {
  programList: [
    { title: "Example 1", description: "This is the description" },
    { title: "Example 2", description: "This is the description" }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_LOCAL_ACTION:
      // console.log(action.payload);
      if (action.payload === null) {
        return { ...state };
      }
      return {
        ...state,
        programList: action.payload
      };
    case ADD_NEW_PROGRAM:
      return {
        ...state,
        programList: [...state.programList, action.payload]
      };

    default:
      return state;
  }
}
