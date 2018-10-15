export const CHANGE_ACTIVE = "CHANGE_ACTIVE";
export const COMPLETED_EXERCISE = "COMPLETED_EXERCISE";

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
