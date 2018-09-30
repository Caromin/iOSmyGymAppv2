export const ADD_NEW_PROGRAM = "ADD_NEW_PROGRAM";

export const addProgramAction = data => dispatch => {
  dispatch({
    type: ADD_NEW_PROGRAM,
    payload: data
  });
};
