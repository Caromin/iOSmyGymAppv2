export const DISTANCE_SETTINGS = "DISTANCE_SETTINGS";
export const WEIGHT_SETTINGS = "WEIGHT_SETTINGS";
export const ALLINPUT_SETTINGS = "ALLINPUT_SETTINGS";

// settings button lists
export const settingsAction = (buttonGroupName, actionId) => dispatch => {
  switch (buttonGroupName) {
    case "distance":
      dispatch({
        type: DISTANCE_SETTINGS,
        payload: actionId
      });
      break;
    case "weight":
      dispatch({
        type: WEIGHT_SETTINGS,
        payload: actionId
      });
      break;
    default:
      alert("There was an error somewhere");
  }
};

// settings input options weight/calories
export const settingsInputs = data => dispatch => {
  dispatch({
    type: ALLINPUT_SETTINGS,
    payload: data
  });
};
