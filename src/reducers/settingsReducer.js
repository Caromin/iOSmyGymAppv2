import { ALLINPUT_SETTINGS, LOCAL_SETTINGS } from "../actions/settingsAction";

export const inititalState = {
  profile: {
    weight: 100,
    caloriesBurned: 200,
    distanceBtn: 0,
    weightBtn: 0
  }
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ALLINPUT_SETTINGS:
      return {
        ...state,
        profile: {
          ...state.profile,
          weight: action.payload.weight,
          caloriesBurned: action.payload.caloriesBurned,
          distanceBtn: action.payload.distanceBtn,
          weightBtn: action.payload.weightBtn
        }
      };
    case LOCAL_SETTINGS:
      if (action.payload === null) {
        return { ...state };
      }
      return {
        ...state,
        profile: {
          ...state.profile,
          weight: action.payload.weight,
          caloriesBurned: action.payload.caloriesBurned,
          distanceBtn: action.payload.distanceBtn,
          weightBtn: action.payload.weightBtn
        }
      };
    default:
      return state;
  }
}
