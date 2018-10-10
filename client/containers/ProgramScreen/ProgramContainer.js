import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import CreateButton from "../../components/Buttons/Create";
import Program from "./Program";
import { getLocalAction, removeProgramAction } from "./Actions";

class ProgramContainer extends Component {
  static navigationOptions = {
    title: "Program List"
  };

  constructor(props) {
    super(props);
    this.state = {
      createWhat: "program"
    };
    this.setStorageProgram = this.setStorageProgram.bind(this);
    this.getStorageProgram = this.getStorageProgram.bind(this);
    this.openModal = this.openModal.bind(this);
    this.removeProgram = this.removeProgram.bind(this);
    this.editProgram = this.editProgram.bind(this);
    this.navigateToWorkouts = this.navigateToWorkouts.bind(this);
  }

  componentWillMount() {
    // AsyncStorage.clear();
    this.getStorageProgram();
  }

  componentDidUpdate() {
    this.setStorageProgram();
  }

  setStorageProgram = async () => {
    const parsedList = JSON.stringify(this.props.programList);
    await AsyncStorage.setItem("list", parsedList);
  };

  getStorageProgram = async () => {
    await AsyncStorage.getItem("list").then(value => {
      const completedList = JSON.parse(value);
      // console.log(completedList);
      this.props.getLocalAction(completedList);
    });
  };

  removeProgram = objId => {
    this.props.removeProgramAction(objId);
  };

  openModal = () => {
    this.props.navigation.navigate("Modal", { createProgram: true });
  };

  editProgram = obj => {
    this.props.navigation.navigate("Modal", {
      editing: true,
      currentObj: obj,
      createProgram: true
    });
  };

  navigateToWorkouts = obj => {
    this.props.navigation.navigate("Workouts", { currentObj: obj });
  };

  render() {
    const { navigation, programList } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Program
          programList={programList}
          removeProgram={this.removeProgram}
          navigation={navigation}
          createWhat={this.state.createWhat}
          editProgram={this.editProgram}
          onPress={this.navigateToWorkouts}
        />
        <CreateButton
          navigation={navigation}
          onPressProgram={this.openModal}
          createWhat={this.state.createWhat}
        >
          Create Program
        </CreateButton>
      </View>
    );
  }
}

ProgramContainer.propTypes = {
  programList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  programList: state.programReducer.programList
});

export default connect(
  mapStateToProps,
  { getLocalAction, removeProgramAction }
)(ProgramContainer);
