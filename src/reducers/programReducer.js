import { ADD_NEW_PROGRAM } from "../actions/programActions";

export const inititalState = {
  programList: [
    { title: "Title", description: "Working1" },
    { title: "Title2", description: "Working2" }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_NEW_PROGRAM:
      console.log(action.payload);
      return {
        ...state,
        programList: [...state.programList, action.payload]
      };

    default:
      return state;
  }
}
