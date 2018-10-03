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
    this.updateStateFunc = this.updateStateFunc.bind(this);
  }

  updateStateFunc(id, value) {
    id === "difficulty" ? this.setState({ difficultyId: value }) : null;
    switch (value) {
      case 0:
        value = "#5cb85c";
        break;
      case 1:
        value = "#FFDF00";
        break;
      case 2:
        value = "#d9534f";
        break;
      default:
        break;
    }
    this.setState({ [id]: value });
  }

  render() {
    const { navigation } = this.props;
    // from home screen
    const navParam = navigation.getParam("selected", undefined);
    // from create new PROGRAM
    const navCreate = navigation.getParam("createProgram", false);
    // from editng program w/ object selected
    const navEdit = navigation.getParam("editing", false);
    // if editing this is the data
    const navEditData = navigation.getParam("currentObj", undefined);
    // from create new WORKOUT
    const navWorkout = navigation.getParam("createWorkout", false);
    const navWorkoutId = navigation.getParam("navId", undefined);
    // from create edit WORKOUT
    const navWorkoutEdit = navigation.getParam("workoutEditing", false);
    // from create SELECTED
    const navSelectedId = navigation.getParam("selectedWorkoutId", undefined);
    const navSelected = navigation.getParam("selectedWorkout", false);

    return (
      <View style={{ flex: 1 }}>
        <Modal
          navEditData={navEditData}
          navEdit={navEdit}
          navParam={navParam}
          navCreate={navCreate}
          status={this.state}
          updateStateFunc={this.updateStateFunc}
          navigation={navigation}
          navWorkout={navWorkout}
          navWorkoutId={navWorkoutId}
          navWorkoutEdit={navWorkoutEdit}
          navSelectedId={navSelectedId}
          navSelected={navSelected}
        />
      </View>
    );
  }
}

ModalContainer.propTypes = {};
