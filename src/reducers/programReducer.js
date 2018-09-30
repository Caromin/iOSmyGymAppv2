import {
  ADD_NEW_PROGRAM,
  GET_LOCAL_ACTION,
  REMOVE_PROGRAM
} from "../actions/programActions";

export const inititalState = {
  programList: [
    {
      id: 1,
      title: "Example 1",
      description: "This is the description",
      difficulty: "#d9534f"
    },
    {
      id: 2,
      title: "Example 2",
      description: "This is the description",
      difficulty: "#FFD700"
    }
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

    case REMOVE_PROGRAM:
      const arr = state.programList.filter(index => {
        if (index.id !== action.payload) {
          console.log(index);
          return index;
        }
      });
      return {
        ...state,
        programList: arr
      };

    default:
      return state;
  }
}
