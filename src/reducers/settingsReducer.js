import {
  DISTANCE_SETTINGS,
  WEIGHT_SETTINGS,
  ALLINPUT_SETTINGS
} from "../actions/settingsAction";

export const inititalState = {
  profile: {
    weight: 100,
    caloriesBurned: 100,
    distanceSettings: "",
    weightSettings: ""
  }
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case DISTANCE_SETTINGS:
      return {
        ...state,
        profile: {
          ...state.profile,
          distanceSettings: action.payload
        }
      };
    case WEIGHT_SETTINGS:
      let conversion = `${action.payload === "Pounds" ? "lb" : "kg"}`;
      return {
        ...state,
        profile: {
          ...state.profile,
          weightSettings: conversion
        }
      };
    case ALLINPUT_SETTINGS:
      return {
        ...state,
        profile: {
          ...state.profile,
          weight: action.payload.weight,
          caloriesBurned: action.payload.calories
        }
      };
    default:
      return state;
  }
}
