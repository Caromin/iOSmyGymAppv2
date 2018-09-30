export const ADD_NEW_PROGRAM = "ADD_NEW_PROGRAM";
export const GET_LOCAL_ACTION = "GET_LOCAL_ACTION";

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
