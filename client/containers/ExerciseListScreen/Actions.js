export const ADD_EXERCISE = "ADD_EXERCISE";
export const REMOVE_EXERCISE = "REMOVE_EXERCISE";
export const REFRESH_FROM_LOCALSTORAGE = "REFRESH_FROM_LOCALSTORAGE";
export const REORDER_LIST = "REORDER_LIST";
export const CHANGE_ACTIVE = "CHANGE_ACTIVE";

export const addExerciseAction = data => dispatch => {
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

export const refreshReduxAction = data => dispatch => {
  dispatch({
    type: REFRESH_FROM_LOCALSTORAGE,
    payload: data
  });
};

export const reorderListAction = (data, workoutId) => dispatch => {
  dispatch({
    type: REORDER_LIST,
    payload: data,
    workoutId: workoutId
  });
};

export const isActiveAction = data => dispatch => {
  dispatch({
    type: CHANGE_ACTIVE,
    payload: data
  });
};
