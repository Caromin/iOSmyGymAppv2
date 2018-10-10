import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./client/store/store";

// imported components
import { Root } from "./client/index";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
