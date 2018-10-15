export const CHANGE_ACTIVE = "CHANGE_ACTIVE";
export const COMPLETED_EXERCISE = "COMPLETED_EXERCISE";
export const LOCAL_STORAGE_TOTAL = "LOCAL_STORAGE_TOTAL";
export const LOCAL_STORAGE_EXERCISE = "LOCAL_STORAGE_EXERCISE";

export const isActiveAction = data => dispatch => {
  dispatch({
    type: CHANGE_ACTIVE,
    payload: data
  });
};

export const submitCompletionAction = data => dispatch => {
  dispatch({
    type: COMPLETED_EXERCISE,
    payload: data
  });
};

export const getLocalTotalAction = data => dispatch => {
  dispatch({
    type: LOCAL_STORAGE_TOTAL,
    payload: data
  });
};

export const getLocalExerciseAction = data => dispatch => {
  dispatch({
    type: LOCAL_STORAGE_EXERCISE,
    payload: data
  });
};
