export const ADD_NEW_PROGRAM = "ADD_NEW_PROGRAM";

export const addProgramAction = data => dispatch => {
  console.log("action was hit");
  dispatch({
    type: ADD_NEW_PROGRAM,
    payload: data
  });
};
