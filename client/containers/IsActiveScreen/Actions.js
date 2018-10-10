export const CHANGE_ACTIVE = "CHANGE_ACTIVE";

export const isActiveAction = data => dispatch => {
  dispatch({
    type: CHANGE_ACTIVE,
    payload: data
  });
};
