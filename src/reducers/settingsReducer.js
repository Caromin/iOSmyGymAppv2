import {
  DISTANCE_SETTINGS,
  WEIGHT_SETTINGS,
  PERSONAL_WEIGHT
} from "../actions/settingsAction";

export const inititalState = {
  profile: {
    weight: 150,
    distanceSettings: "mi",
    weightSettings: "lb"
  }
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case DISTANCE_SETTINGS:
      return {
        ...state,
        profile: {
          distanceSettings: action.payload
        }
      };
    case WEIGHT_SETTINGS:
      let conversion = `${action.payload === "Pounds" ? "lb" : "kg"}`;
      return {
        ...state,
        profile: {
          weightSettings: conversion
        }
      };
    case PERSONAL_WEIGHT:
      return state;
    default:
      return state;
  }
}
