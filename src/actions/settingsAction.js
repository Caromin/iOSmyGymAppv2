export const ALLINPUT_SETTINGS = "ALLINPUT_SETTINGS";
export const LOCAL_SETTINGS = "LOCAL_SETTINGS";

export const settingsAction = data => dispatch => {
  dispatch({
    type: ALLINPUT_SETTINGS,
    payload: data
  });
};

export const localSettingsAction = data => dispatch => {
  dispatch({
    type: LOCAL_SETTINGS,
    payload: data
  });
};
