import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";

import Program from "./Program";
import { CreateButton } from "../Buttons/Buttons";
import { globalStyles } from "../../index";
import { addProgramAction } from "../../actions/programActions";

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
  }

  componentWillMount = () => {
    this.state.db.settings({
      timestampsInSnapshots: true
    });
  };

  componentDidUpdate() {
    let newProgram = this.props.navigation.getParam("completed", false);
    const data = {
      title: this.props.navigation.getParam("name"),
      description: this.props.navigation.getParam("description")
    };
    const addProgramAction = this.props.addProgramAction(data);
  }

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
    const { programList } = this.props;
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Program add={this.addToDatabase} programList={programList} />
        <CreateButton navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  programList: state.programReducer.programList
});

export default connect(
  mapStateToProps,
  { addProgramAction }
)(ProgramContainer);
