import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import Modal from "./Modal";

export default class ModalContainer extends Component {
  constructor() {
    super();
    this.state = {
      programTitle: "",
      programDescription: "",
      difficulty: "",
      difficultyId: null
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(statusId, value) {
    statusId === "difficulty" ? this.setState({ difficultyId: value }) : null;
    switch (value) {
      case 0:
        value = "#5cb85c";
        break;
      case 1:
        value = "#337ab7";
        break;
      case 2:
        value = "#d9534f";
        break;
      default:
        break;
    }
    this.setState({ [statusId]: value });
  }

  render() {
    const { navigation } = this.props;
    // none is a fallback option, if no param passed
    const navParam = navigation.getParam("selected", "none");
    const navCreate = navigation.getParam("createProgram", false);
    const navEdit = navigation.getParam("editing", false);
    const navEditData = navigation.getParam("currentObj", null);

    return (
      <View style={{ flex: 1 }}>
        <Modal
          navEditData={navEditData}
          navEdit={navEdit}
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

ModalContainer.propTypes = {};
