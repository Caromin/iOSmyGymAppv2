import React, { Component } from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase";
require("firebase/firestore");
import { connect } from "react-redux";

import Program from "./Program";
import { CreateButton } from "../Buttons/Buttons";
import { globalStyles } from "../../index";

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
    // this.generateNewList = this.generateNewList.bind(this);
  }

  componentWillMount = () => {
    this.state.db.settings({
      timestampsInSnapshots: true
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

export default connect(mapStateToProps)(ProgramContainer);
