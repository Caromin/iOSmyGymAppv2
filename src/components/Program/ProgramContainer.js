import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import Program from "./Program";
import {
  getLocalAction,
  removeProgramAction
} from "../../actions/programActions";
import { CreateButton } from "../Buttons/Buttons";

class ProgramContainer extends Component {
  static navigationOptions = {
    title: "Programs"
  };

  constructor(props) {
    super(props);
    this.state = {
      db: firebase.firestore()
    };
    this.addToDatabase = this.addToDatabase.bind(this);
    this.setStorage = this.setStorage.bind(this);
    this.getStorage = this.getStorage.bind(this);
  }

  componentWillMount = () => {
    this.state.db.settings({
      timestampsInSnapshots: true
    });

    // Use setStorage if you clear the current async storage.
    // AsyncStorage.clear();
    // this.setStorage();
    this.getStorage();
  };

  componentDidUpdate() {
    this.setStorage();
  }

  setStorage = async () => {
    const parsedList = JSON.stringify(this.props.programList);
    await AsyncStorage.setItem("list", parsedList);
  };

  getStorage = async () => {
    username = await AsyncStorage.getItem("list").then(value => {
      const completedList = JSON.parse(value);
      this.props.getLocalAction(completedList);
    });
  };

  addToDatabase(bodyPart, data) {
    this.state.db
      .collection(bodyPart)
      .add({
        name: data.name,
        difficulty: data.difficulty,
        reminder: data.reminder
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      });
  }

  render() {
    const { navigation, programList, removeProgramAction } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Program
          programList={programList}
          removeList={removeProgramAction}
          navigation={navigation}
        />
        <CreateButton navigation={navigation} />
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
