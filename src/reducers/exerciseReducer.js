import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  REFRESH_FROM_LOCALSTORAGE,
  REORDER_LIST,
  CHANGE_ACTIVE
} from "../actions/exerciseActions";

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
  ],
  isActive: false,
  completedExercises: 0,
  totalCompletedSets: 0,
  pendingCompletedList: []
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case REFRESH_FROM_LOCALSTORAGE:
      // console.log(action.payload);
      return {
        ...state,
        exerciseArr: action.payload
      };
    case ADD_EXERCISE:
      isCombined = false;
      const combineSameId = state.exerciseArr.map(index => {
        if (index.workoutReferenceId === action.payload.workoutReferenceId) {
          action.payload.list.forEach(innerIndex => {
            let arr = index.list;
            arr.push(innerIndex);
          });
          isCombined = true;
          return index;
        }
        return index;
      });
      if (isCombined) {
        return {
          ...state,
          exerciseArr: combineSameId
        };
      } else {
        return {
          ...state,
          exerciseArr: [...state.exerciseArr, action.payload]
        };
      }
    case REMOVE_EXERCISE:
      const removeSameId = state.exerciseArr.map(index => {
        if (index.workoutReferenceId === action.workoutId) {
          const newIndexObj = index.list.filter(innerObj => {
            if (innerObj.directId !== action.payload.directId) {
              return innerObj;
            }
          });

          const newObj = Object.assign(
            {},
            { list: newIndexObj, workoutReferenceId: action.workoutId }
          );
          return newObj;
        }
        return index;
      });
      // console.log("after removed: ", removeSameId);
      return {
        ...state,
        exerciseArr: removeSameId
      };
    case REORDER_LIST:
      const reorderArr = state.exerciseArr.map(index => {
        if (index.workoutReferenceId === action.workoutId) {
          let list = index.list;
          list.splice(
            action.payload.to,
            0,
            list.splice(action.payload.from, 1)[0]
          );
          let newArr = list;
          return index;
        }
        return index;
      });
      // console.log("new array: ", reorderArr);
      return {
        ...state,
        exerciseArr: reorderArr
      };
    case CHANGE_ACTIVE:
      return {
        ...state,
        isActive: action.payload
      };
    default:
      return state;
  }
}
