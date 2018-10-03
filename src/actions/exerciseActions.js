export const ADD_EXERCISE = "ADD_EXERCISE";

export const addExerciseAction = data => dispatch => {
  data.list.length === 0
    ? null
    : dispatch({
        type: ADD_EXERCISE,
        payload: data
      });
};
