import React, { Component } from "react";
import { View, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./Home";
import global from "../../styles/styles";
import { updateWeeklyTotals } from "./Actions";

class HomeContainer extends Component {
  // can be a static object, used function instead to be about to used objects like navigation
  static navigationOptions = {
    title: "Main Menu"
  };

  constructor() {
    super();
    this.state = {
      selectedBodyPart: ""
    };

    this.selectedBodyPart = this.selectedBodyPart.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentWillReceiveProps() {
    this.updateSelected();
  }

  updateSelected = () => {
    AsyncStorage.getItem("weeklyCompletedList") === null
      ? null
      : AsyncStorage.getItem("weeklyCompletedList").then(value => {
          let parsedObj = JSON.parse(value);
          let sortedArr = [];
          let data = {};

          const createArr = new Promise(resolve => {
            parsedObj.forEach(index => {
              index.list.forEach(value => {
                sortedArr.push(value.muscleGroup);
              });
            });
            resolve();
          });

          createArr.then(async () => {
            await sortedArr.forEach(value => {
              let newValue = value.replace(/\s+/g, "");
              data[newValue] = (data[newValue] || 0) + 1;
            });
            await this.props.updateWeeklyTotals(data);
          });
        });
  };

  selectedBodyPart = part => {
    this.setState({ selectedBodyPart: part });
    this.props.navigation.navigate("Modal", {
      selected: part
    });
  };

  render() {
    const {
      weightId,
      personalWeight,
      caloriesBurned,
      totalWorkouts,
      weightChange,
      workoutCounts
    } = this.props;
    return (
      <View style={[global.blackBackground, { paddingTop: 10, flex: 1 }]}>
        <Home
          onPressed={this.selectedBodyPart}
          weightId={weightId}
          weightChange={weightChange}
          personalWeight={personalWeight}
          caloriesBurned={caloriesBurned}
          totalWorkouts={totalWorkouts}
          workoutCounts={workoutCounts}
        />
      </View>
    );
  }
}

HomeContainer.propTypes = {
  weightId: PropTypes.string,
  weightChange: PropTypes.number,
  personalWeight: PropTypes.number,
  caloriesBurned: PropTypes.number,
  totalWorkouts: PropTypes.number
};

const mapStateToProps = state => ({
  weightId: state.settingsReducer.profile.weightId,
  weightChange: state.settingsReducer.profile.weightDifference,
  personalWeight: state.settingsReducer.profile.weight,
  caloriesBurned: state.settingsReducer.profile.caloriesBurned,
  totalWorkouts: state.isActiveReducer.completedWorkouts,
  workoutCounts: state.homeReducer
});

export default connect(
  mapStateToProps,
  { updateWeeklyTotals }
)(HomeContainer);
