import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import Program from "./Program";
import {
  getLocalAction,
  removeProgramAction
} from "../../actions/programActions";
import { CreateProgram } from "../Buttons/Buttons";

class ProgramContainer extends Component {
  static navigationOptions = {
    title: "Programs"
  };

  constructor(props) {
    super(props);
    this.state = {};

    this.setStorageProgram = this.setStorageProgram.bind(this);
    this.getStorageProgram = this.getStorageProgram.bind(this);
  }

  componentWillMount = () => {
    // AsyncStorage.clear();
    this.getStorageProgram();
  };

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

  render() {
    const { navigation, programList, removeProgramAction } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Program
          programList={programList}
          removeProgramAction={removeProgramAction}
          navigation={navigation}
        />
        <CreateProgram navigation={navigation} />
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
