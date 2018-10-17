import { ALLINPUT_SETTINGS, LOCAL_SETTINGS } from "./Actions";

export const inititalState = {
  profile: {
    weight: 80,
    caloriesBurned: 0,
    distanceBtn: 0,
    weightBtn: 0,
    weightId: "lb",
    weightDifference: 0,
    previousIdSame: true
  }
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case ALLINPUT_SETTINGS:
      let id = action.payload.weightBtn === 0 ? "lb" : "kg";
      let changedWeight =
        action.payload.weight !== state.profile.weight &&
        state.profile.previousIdSame
          ? action.payload.weight - state.profile.weight
          : 0;

      return {
        ...state,
        profile: {
          ...state.profile,
          weight: action.payload.weight,
          caloriesBurned: action.payload.caloriesBurned,
          distanceBtn: action.payload.distanceBtn,
          weightBtn: action.payload.weightBtn,
          weightId: id,
          weightDifference: changedWeight
        }
      };
    case LOCAL_SETTINGS:
      let id2 = action.payload.weightBtn === 0 ? "lb" : "kg";

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
          weightBtn: action.payload.weightBtn,
          weightId: `${id2}`,
          weightDifference: action.payload.weightDifference
        }
      };
    default:
      return state;
  }
}
