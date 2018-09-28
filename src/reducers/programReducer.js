import { ADD_NEW_PROGRAM } from "../actions/programActions";

export const inititalState = {
  programList: [{ title: "Title", description: "Dez Nuts, got em" }]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_NEW_PROGRAM:
      console.log("inside reducer", action.payload.title);
      return {
        ...state,
        programList: [...state.programList, action.payload]
      };

    default:
      return state;
  }
}
