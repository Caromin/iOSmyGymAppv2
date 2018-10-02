import {
  ADD_NEW_PROGRAM,
  GET_LOCAL_ACTION,
  REMOVE_PROGRAM,
  EDIT_PROGRAM,
  ADD_NEW_WORKOUT,
  REMOVE_WORKOUT,
  EDIT_WORKOUT
} from "../actions/programActions";

export const inititalState = {
  programList: [
    {
      id: 1,
      title: "Example 1",
      description: "This is the description",
      difficulty: "#d9534f",
      workouts: [
        {
          id: 100,
          difficulty: "#d9534f",
          title: "Leg Day",
          description: "Do this weekly, please!"
        }
      ]
    },
    {
      id: 2,
      title: "Example 2",
      description: "This is the description 2",
      difficulty: "#FFDF00",
      workouts: [
        {
          id: 101,
          difficulty: "#d9534f",
          title: "Bi's and tri's",
          description: "Good til next year!"
        }
      ]
    }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_LOCAL_ACTION:
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
      // want to create a new map and where action.id and index.id meet I want to replace that object with a new object
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
        // gives me all programs without this id
        if (index.id !== action.payload) {
          return index;
        }
      });
      return {
        ...state,
        programList: arr
      };
    case ADD_NEW_WORKOUT:
      const arrWorkout = state.programList.filter(index => {
        if (index.id === action.programId) {
          let workouts = index.workouts;
          workouts.push(action.payload);
          return index;
        } else {
          return index;
        }
      });
      // console.log(arrWorkout);
      return {
        ...state,
        programList: arrWorkout
      };
    case REMOVE_WORKOUT:
      // generate a new programList
      const removeWorkout = state.programList.map(index => {
        // filter to remove selected id
        let newWorkoutArr = index.workouts.filter(index => {
          if (index.id !== action.payload) {
            return index;
          }
        });
        // set new array to old array
        index.workouts = newWorkoutArr;
        return index;
      });
      return {
        ...state,
        programList: removeWorkout
      };
    case EDIT_WORKOUT:
      const editWorkout = state.programList.map(index => {
        // replace selected obj in array with new
        let newWorkoutArr = index.workouts.map(index => {
          if (index.id === action.payload.id) {
            return action.payload;
          } else {
            return index;
          }
        });
        // set new array to old array
        index.workouts = newWorkoutArr;
        return index;
      });
      return {
        ...state,
        programList: editWorkout
      };
    default:
      return state;
  }
}
