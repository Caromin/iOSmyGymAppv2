import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import UserExerciseList from "./UserExerciseList/UserExerciseList";
import SearchResults from "./SearchResults/SearchResults";
import { SaveWorkoutList } from "../../Buttons/Buttons";
import styles from "./styles";

const exerciseList = require("../../../../exerciseList.json");

class SelectedWorkoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutId: this.props.navSelectedId,
      searchString: "",
      resultsArr: []
    };
    this.searchAndFind = this.searchAndFind.bind(this);
  }

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
          <ScrollView style={styles.selectedWorkoutScroll}>
            <SearchResults state={this.state} />
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.39,
            padding: 10
          }}
        >
          <Text>Current List:</Text>
          <ScrollView style={styles.selectedWorkoutScroll}>
            <UserExerciseList />
          </ScrollView>
        </View>
        <SaveWorkoutList navigation={navigation} />
      </View>
    );
  }
}

SelectedWorkoutModal.propTypes = {};

const mapStateToProps = state => ({});

export default connect(null)(SelectedWorkoutModal);
