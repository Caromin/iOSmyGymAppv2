import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { AddWorkout, BeginWorkout } from "../Buttons/Buttons";
import SelectedWorkout from "./SelectedWorkout";

class SelectedWorkoutContainer extends Component {
  // converted to function to pass in navigation param
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("workoutTitle"),
      headerRight: (
        <AddWorkout
          navigation={navigation}
          selectedWorkoutId={navigation.getParam("id")}
        />
      )
    };
  };
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    console.log("was updated");
  }

  render() {
    const { navigation } = this.props;
    const workoutId = navigation.getParam("id", "none found");
    console.log("workoutId: ", workoutId);

    return (
      <View style={{ flex: 1 }}>
        <SelectedWorkout navigation={navigation} workoutId={workoutId} />
        <BeginWorkout workoutId={workoutId} navigation={navigation} />
      </View>
    );
  }
}

SelectedWorkoutContainer.propTypes = {
  exerciseList: PropTypes.array
};

const mapStateToProps = state => ({
  exerciseList: state.exerciseReducer.exerciseArr
});

export default connect(mapStateToProps)(SelectedWorkoutContainer);
