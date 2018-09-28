import { ADD_NEW_PROGRAM } from "../actions/programActions";

export const inititalState = {
  programList: [
    { title: "Title", description: "Dez Nuts, got em", difficulty: "#d9534f" }
  ]
};

export default function(state = inititalState, action) {
  console.log("programs reducers was hit");
  switch (action.type) {
    case ADD_NEW_PROGRAM:
      return state;
    default:
      return state;
  }
}
