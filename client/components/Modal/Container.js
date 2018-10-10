import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import Modal from "./Modal";
import {
  addProgramAction,
  editProgramAction,
  addWorkoutAction,
  editWorkoutAction
} from "../../containers/ProgramScreen/Actions";

class ModalContainer extends Component {
  // this.props.navigation will be undefined if passed into constructor
  constructor() {
    super();
    this.state = {
      programTitle: "",
      programDescription: "",
      difficulty: "",
      difficultyIndex: null,
      selectedBodyPart: false,
      createProgram: false,
      createWorkout: false,
      isEdit: false,
      targetedObj: {},
      selectedProgramId: "",
      specificWorkoutBool: false,
      specificWorkoutId: ""
    };
    this.updateStateFunc = this.updateStateFunc.bind(this);
    this.goBackFunc = this.goBackFunc.bind(this);
    this.createFunc = this.createFunc.bind(this);
  }

  componentWillMount() {
    const { navigation } = this.props;
    // Home
    navigation.getParam("selected", false)
      ? this.setState({
          selectedBodyPart: navigation.getParam("selected")
        })
      : null;
    // Create Program
    navigation.getParam("createProgram", false)
      ? this.setState({
          createProgram: navigation.getParam("createProgram")
        })
      : null;
    // Editing Program w/ Selected Object
    navigation.getParam("editing", false)
      ? this.setState({
          isEdit: navigation.getParam("editing")
        })
      : null;
    navigation.getParam("currentObj")
      ? this.setState({
          targetedObj: navigation.getParam("currentObj")
        })
      : null;
    // Create Workout
    navigation.getParam("createWorkout", false)
      ? this.setState({
          createWorkout: navigation.getParam("createWorkout")
        })
      : null;
    navigation.getParam("programId")
      ? this.setState({
          selectedProgramId: navigation.getParam("programId")
        })
      : null;
    navigation.getParam("specificWorkoutBool", false)
      ? this.setState({
          specificWorkoutBool: navigation.getParam("specificWorkoutBool")
        })
      : null;
    navigation.getParam("specificWorkoutId")
      ? this.setState({
          specificWorkoutId: navigation.getParam("specificWorkoutId")
        })
      : null;
  }

  goBackFunc = () => {
    this.props.navigation.goBack();
  };

  updateStateFunc(id, value) {
    id === "difficulty" ? this.setState({ difficultyIndex: value }) : null;
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

  createFunc = targetedObj => {
    const {
      isEdit,
      programTitle,
      programDescription,
      difficulty,
      selectedProgramId,
      createProgram,
      createWorkout
    } = this.state;
    const {
      editProgramAction,
      addProgramAction,
      navigation,
      editWorkoutAction,
      addWorkoutAction
    } = this.props;

    const complete = new Promise(resolve => {
      const data = {
        id: isEdit ? targetedObj.id : uuidv1(),
        title: isEdit && programTitle === "" ? targetedObj.title : programTitle,
        description:
          isEdit && programDescription === ""
            ? targetedObj.description
            : programDescription,
        difficulty:
          isEdit && difficulty === ""
            ? targetedObj.difficulty
            : difficulty === ""
              ? "#dedede"
              : difficulty,
        workouts: isEdit ? targetedObj.workouts : []
      };
      console.log(data);
      isEdit && createProgram
        ? editProgramAction(data)
        : createProgram
          ? addProgramAction(data)
          : isEdit && createWorkout
            ? editWorkoutAction(data)
            : createWorkout
              ? addWorkoutAction(data, selectedProgramId)
              : console.log("error nothing found in actions");
      resolve();
    });
    complete.then(() => {
      navigation.goBack();
    });
  };

  render() {
    const {
      selectedBodyPart,
      createProgram,
      createWorkout,
      isEdit,
      targetedObj,
      specificWorkoutBool,
      specificWorkoutId
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <Modal
          status={this.state}
          updateStateFunc={this.updateStateFunc}
          goBackFunc={this.goBackFunc}
          createFunc={this.createFunc}
          selectedBodyPart={selectedBodyPart}
          createProgram={createProgram}
          createWorkout={createWorkout}
          isEdit={isEdit}
          targetedObj={targetedObj}
          specificWorkoutBool={specificWorkoutBool}
          specificWorkoutId={specificWorkoutId}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { addProgramAction, editProgramAction, addWorkoutAction, editWorkoutAction }
)(ModalContainer);
