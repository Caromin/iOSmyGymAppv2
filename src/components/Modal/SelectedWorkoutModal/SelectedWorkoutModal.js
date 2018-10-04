import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
const uuidv1 = require("uuid/v1");

import { addExerciseAction } from "../../../actions/exerciseActions";
import UserExerciseList from "./UserExerciseList/UserExerciseList";
import SearchResults from "./SearchResults/SearchResults";
import { SaveWorkoutList } from "../../Buttons/Buttons";
import styles from "./styles";

const exerciseList = require("../../../../exerciseList.json");

class SelectedWorkoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutId: this.props.selectedWorkoutId,
      searchString: "",
      resultsArr: [],
      pendingSavedArr: []
      // expand: {
      //   results: false,
      //   pending: false
      // }
    };
    this.searchAndFind = this.searchAndFind.bind(this);
    this.saveDataToWorkout = this.saveDataToWorkout.bind(this);
    this.removeFromArr = this.removeFromArr.bind(this);
    this.callAction = this.callAction.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.state.pendingSavedArr);
  }

  removeFromArr = obj => {
    let tempArr = this.state.pendingSavedArr;
    const arrPromise = new Promise(resolve => {
      for (i = 0; i < tempArr.length; i++) {
        if (tempArr[i].title === obj.title) {
          tempArr.splice(i, 1);
          break;
        }
      }
      resolve();
    });
    arrPromise.then(() => {
      this.setState({ pendingSavedArr: tempArr });
    });
  };

  saveDataToWorkout = obj => {
    const objWithId = Object.assign({}, obj, { directId: uuidv1() });

    this.setState({
      pendingSavedArr: [...this.state.pendingSavedArr, objWithId]
    });
  };

  callAction = data => {
    this.props.addExerciseAction(data);
  };

  searchAndFind = value => {
    this.setState({ searchString: value });
    const newValue = value.toUpperCase();
    const regexValue = new RegExp("(" + newValue.replace(" ", "|") + ")");
    const testArr = [];

    const searchFunc = new Promise((resolve, reject) => {
      let length = value.length;
      if (length > 2) {
        exerciseList.exercises.forEach(index => {
          const title = index.title.toUpperCase();
          title.includes(newValue) ? testArr.push(index) : null;
        });
      }
      resolve(length);
    });

    const updateState = new Promise((resolve, reject) => {
      searchFunc.then(valueLength => {
        if (testArr.length === 0 && valueLength > 2) {
          exerciseList.exercises.forEach(index => {
            if (testArr.length === 20) {
              // console.log("Selected Workout Modal: length is at 20");
              return;
            }
            const title = index.title.toUpperCase();
            regexValue.test(title) ? testArr.push(index) : null;
          });
          resolve();
          // console.log("Selected Workout Modal: if statement", testArr);
        } else {
          resolve();
          // console.log("Selected Workout Modal: else statement", testArr);
        }
      });
    });

    updateState.then(() => {
      this.setState({ resultsArr: testArr });
    });
  };

  render() {
    const { navigation, navSelected, navSelectedId } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          round
          // will only clear if declared a value, set to state
          clearIcon={{ type: "evilIcon", name: "close" }}
          value={this.state.searchString}
          onChangeText={value => {
            this.searchAndFind(value);
          }}
          placeholder="Search Here..."
        />
        <View
          style={{
            flex: 0.39,
            padding: 10
          }}
        >
          <Text>Search Results:</Text>
          <View style={styles.selectedWorkoutScroll}>
            <SearchResults
              state={this.state}
              saveDataToWorkout={this.saveDataToWorkout}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.39,
            padding: 10
          }}
        >
          <Text>Add Pending:</Text>
          <View style={styles.selectedWorkoutScroll}>
            <UserExerciseList
              state={this.state}
              removeFromArr={this.removeFromArr}
            />
          </View>
        </View>
        <SaveWorkoutList
          navigation={navigation}
          callAction={this.callAction}
          state={this.state}
        />
      </View>
    );
  }
}

SelectedWorkoutModal.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  null,
  { addExerciseAction }
)(SelectedWorkoutModal);
