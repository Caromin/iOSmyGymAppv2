export const ADD_EXERCISE = "ADD_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";

export const addExerciseAction = data => dispatch => {
  data.list.length === 0
    ? null
    : dispatch({
        type: ADD_EXERCISE,
        payload: data
      });
};

export const removeExerciseAction = (exerciseIdObj, workoutId) => dispatch => {
  dispatch({
    type: REMOVE_EXERCISE,
    payload: exerciseIdObj,
    workoutId: workoutId
  });
};
