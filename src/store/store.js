import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "../reducers/index";
import ReduxThunk from "redux-thunk";

const initalState = {};
const middleware = [ReduxThunk];

const store = createStore(
  combineReducers,
  initalState,
  compose(applyMiddleware(...middleware))
);

export default store;
