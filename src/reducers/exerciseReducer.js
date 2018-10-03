import { ADD_EXERCISE, REMOVE_EXERCISE } from "../actions/exerciseActions";

export const inititalState = {
  exerciseArr: [
    {
      list: [
        {
          avatarURL: 16,
          difficulty: "Easy",
          equipment: "Dumbbell",
          estimatedTime: 5,
          directId: 1000,
          muscleGroup: "Shoulders and Traps",
          title: "Reverse Flyes"
        },
        {
          avatarURL: 16,
          difficulty: "Easy",
          equipment: "Machine",
          estimatedTime: 5,
          directId: 1001,
          muscleGroup: "Shoulders and Traps",
          title: "Leverage Shrug"
        }
      ],
      workoutReferenceId: "d6d338c0-c66a-11e8-b7f9-0bf58f9dd07c"
    }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ADD_EXERCISE:
      const combineSameId = state.exerciseArr.map(index => {
        if (index.workoutReferenceId === action.payload.workoutReferenceId) {
          action.payload.list.forEach(innerIndex => {
            index.list.push(innerIndex);
          });
          return index;
        } else {
          return index;
        }
      });
      // console.log(combineSameId);
      return {
        ...state,
        exerciseArr: combineSameId
      };
    case REMOVE_EXERCISE:
      const removeSameId = state.exerciseArr.map(index => {
        if (index.workoutReferenceId === action.workoutId) {
          return index.list.filter(innerObj => {
            if (innerObj.directId == action.payload.directId) {
              return innerObj;
            }
          });
        } else {
          return index;
        }
      });
      console.log(removeSameId);
      return {
        ...state,
        exerciseArr: removeSameId
      };
    default:
      return state;
  }
}
