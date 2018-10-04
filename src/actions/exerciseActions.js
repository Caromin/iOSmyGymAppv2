export const ADD_EXERCISE = "ADD_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const addExerciseAction = data => dispatch => {
  // console.log("inside actions: ", data.list);
  data.list.length === 0
    ? null
    : dispatch({
        type: ADD_EXERCISE,
        payload: data
      });
};

export const removeExerciseAction = (objDirectId, workoutId) => dispatch => {
  dispatch({
    type: REMOVE_EXERCISE,
    payload: objDirectId,
    workoutId: workoutId
  });
};
