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

  render() {
    const { navigation } = this.props;
    console.log(
      "ParamId from activeworkouts -> navigation: ",
      navigation.getParam("id", "none")
    );
    const workoutId = navigation.getParam("id", "none found");

    return (
      <View style={{ flex: 1 }}>
        <SelectedWorkout navigation={navigation} workoutId={workoutId} />
        <BeginWorkout workoutId={workoutId} navigation={navigation} />
      </View>
    );
  }
}

SelectedWorkoutContainer.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SelectedWorkoutContainer);
