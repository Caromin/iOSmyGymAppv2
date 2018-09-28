import React, { Component } from "react";
import { View } from "react-native";

import Modal from "./Modal";
import { ReturnButton } from "../Buttons/Buttons";

export default class ModalContainer extends Component {
  constructor() {
    super();
    this.state = {
      programName: "",
      programDescription: ""
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(statusId, value) {
    this.setState({ [statusId]: value });
  }

  render() {
    const { navigation } = this.props;
    // console.log(navigation);
    // none is a fallback option, if no param passed
    const navParam = navigation.getParam("selected", "none");
    const navCreate = navigation.getParam("createProgram", false);

    return (
      <View style={{ flex: 1 }}>
        <ReturnButton navigation={navigation} />
        <Modal
          navParam={navParam}
          navCreate={navCreate}
          status={this.state}
          update={this.updateState}
          navigation={navigation}
        />
      </View>
    );
  }
}
