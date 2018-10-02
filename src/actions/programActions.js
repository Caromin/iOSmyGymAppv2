export const ADD_NEW_PROGRAM = "ADD_NEW_PROGRAM";
export const GET_LOCAL_ACTION = "GET_LOCAL_ACTION";
export const REMOVE_PROGRAM = "REMOVE_PROGRAM";
export const EDIT_PROGRAM = "EDIT_PROGRAM";
export const REMOVE_WORKOUT = "REMOVE_WORKOUT";
export const ADD_NEW_WORKOUT = "ADD_NEW_WORKOUT";
export const EDIT_WORKOUT = "EDIT_WORKOUT";

export const getLocalAction = data => dispatch => {
  // console.log(data)
  dispatch({
    type: GET_LOCAL_ACTION,
    payload: data
  });
};

export const addProgramAction = data => dispatch => {
  dispatch({
    type: ADD_NEW_PROGRAM,
    payload: data
  });
};

export const editProgramAction = data => dispatch => {
  console.log("making sure");
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

export const addWorkoutAction = (data, programId) => dispatch => {
  dispatch({
    type: ADD_NEW_WORKOUT,
    payload: data,
    programId: programId
  });
};

export const removeWorkoutAction = data => dispatch => {
  dispatch({
    type: REMOVE_WORKOUT,
    payload: data
  });
};

export const editWorkoutAction = data => dispatch => {
  dispatch({
    type: EDIT_WORKOUT,
    payload: data
  });
};
