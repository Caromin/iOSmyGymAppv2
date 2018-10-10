import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

import combineReducers from "./index";

const initalState = {};
const middleware = [ReduxThunk];

const store = createStore(
  combineReducers,
  initalState,
  compose(applyMiddleware(...middleware))
);

export default store;
