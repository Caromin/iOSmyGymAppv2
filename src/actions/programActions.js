export const ADD_NEW_PROGRAM = "ADD_NEW_PROGRAM";
export const GET_LOCAL_ACTION = "GET_LOCAL_ACTION";
export const REMOVE_PROGRAM = "REMOVE_PROGRAM";
export const EDIT_PROGRAM = "EDIT_PROGRAM";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";

export const getLocalAction = data => dispatch => {
  // console.log(data)
  dispatch({
    type: GET_LOCAL_ACTION,
    payload: data
  });
};

export const addProgramAction = data => dispatch => {
  // console.log(data)
  dispatch({
    type: ADD_NEW_PROGRAM,
    payload: data
  });
};

export const editProgramAction = data => dispatch => {
  dispatch({
    type: EDIT_PROGRAM,
    payload: data
  });
};

export const removeProgramAction = data => dispatch => {
  dispatch({
    type: REMOVE_PROGRAM,
    payload: data
  });
};

export const removeWorkoutAction = data => dispatch => {
  console.log("action hit", data);
  // dispatch({
  //   type: REMOVE_WORKOUT,
  //   payload: data
  // });
};
