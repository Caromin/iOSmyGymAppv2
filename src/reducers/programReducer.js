import {
  ADD_NEW_PROGRAM,
  GET_LOCAL_ACTION,
  REMOVE_PROGRAM,
  EDIT_PROGRAM
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
    // {
    //   id: 3,
    //   title: "Example 1",
    //   description: "This is the description",
    //   difficulty: "#d9534f"
    // },
    // {
    //   id: 4,
    //   title: "Example 2",
    //   description: "This is the description",
    //   difficulty: "#FFD700"
    // },
    // {
    //   id: 5,
    //   title: "Example 1",
    //   description: "This is the description",
    //   difficulty: "#d9534f"
    // },
    // {
    //   id: 6,
    //   title: "Example 2",
    //   description: "This is the description",
    //   difficulty: "#FFD700"
    // },
    // {
    //   id: 7,
    //   title: "Example 1",
    //   description: "This is the description",
    //   difficulty: "#d9534f"
    // },
    // {
    //   id: 8,
    //   title: "Example 2",
    //   description: "This is the description",
    //   difficulty: "#FFD700"
    // },
    // {
    //   id: 9,
    //   title: "Example 1",
    //   description: "This is the description",
    //   difficulty: "#d9534f"
    // },
    // {
    //   id: 10,
    //   title: "Example 2",
    //   description: "This is the description",
    //   difficulty: "#FFD700"
    // },
    // {
    //   id: 11,
    //   title: "Example 2",
    //   description: "This is the description",
    //   difficulty: "#FFD700"
    // }
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
    case EDIT_PROGRAM:
      const editedArr = state.programList.map(index => {
        if (action.payload.id === index.id) {
          return action.payload;
        } else {
          return index;
        }
      });
      return {
        ...state,
        programList: editedArr
      };
    case REMOVE_PROGRAM:
      const arr = state.programList.filter(index => {
        if (index.id !== action.payload) {
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
