import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
  REFRESH_FROM_LOCALSTORAGE
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
  ]
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
    default:
      return state;
  }
}
// 05:14:26: before removed:  Array [
//   05:14:26:   Object {
//   05:14:26:     "list": Array [
//   05:14:26:       Object {
//   05:14:26:         "avatarURL": 16,
//   05:14:26:         "difficulty": "Easy",
//   05:14:26:         "directId": 1000,
//   05:14:26:         "equipment": "Dumbbell",
//   05:14:26:         "estimatedTime": 5,
//   05:14:26:         "muscleGroup": "Shoulders and Traps",
//   05:14:26:         "title": "Reverse Flyes",
//   05:14:26:       },
//   05:14:26:       Object {
//   05:14:26:         "avatarURL": 16,
//   05:14:26:         "difficulty": "Easy",
//   05:14:26:         "directId": 1001,
//   05:14:26:         "equipment": "Machine",
//   05:14:26:         "estimatedTime": 5,
//   05:14:26:         "muscleGroup": "Shoulders and Traps",
//   05:14:26:         "title": "Leverage Shrug",
//   05:14:26:       },
//   05:14:26:     ],
//   05:14:26:     "workoutReferenceId": "d6d338c0-c66a-11e8-b7f9-0bf58f9dd07c",
//   05:14:26:   },
//   05:14:26:   Object {
//   05:14:26:     "list": Array [
//   05:14:26:       Object {
//   05:14:26:         "avatarURL": 16,
//   05:14:26:         "difficulty": "Easy",
//   05:14:26:         "directId": "e2987390-c7b5-11e8-a543-598d37617d34",05:14:26:         "equipment": "Machine",
//   05:14:26:         "estimatedTime": 5,
//   05:14:26:         "muscleGroup": "Shoulders and Traps",
//   05:14:26:         "title": "Smith Machine Shrug",
//   05:14:26:       },
//   05:14:26:       Object {
//   05:14:26:         "avatarURL": 16,
//   05:14:26:         "difficulty": "Easy",
//   05:14:26:         "directId": "e2d6dc20-c7b5-11e8-a543-598d37617d34",05:14:26:         "equipment": "Machine",
//   05:14:26:         "estimatedTime": 5,
//   05:14:26:         "muscleGroup": "Shoulders and Traps",
//   05:14:26:         "title": "Smith Machine Shrug",
//   05:14:26:       },
//   05:14:26:     ],
//   05:14:26:     "workoutReferenceId": "189a18d0-c785-11e8-92f8-274c004a8b60",
//   05:14:26:   },
//   05:14:26: ]
