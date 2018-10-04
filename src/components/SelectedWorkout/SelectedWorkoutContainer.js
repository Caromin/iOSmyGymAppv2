import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { removeExerciseAction } from "../../actions/exerciseActions";
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
    this.state = {
      list: []
    };
    this.updateState = this.updateState.bind(this);
    this.removeAction = this.removeAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("on receive props: ", nextProps.exerciseList);
    this.updateState(nextProps);
  }

  removeAction = (objDirectId, passedWorkoutId) => {
    this.props.removeExerciseAction(objDirectId, passedWorkoutId);
  };

  updateState = nextProps => {
    workoutIdCompare = this.props.navigation.getParam("id", "none found");
    arrToState = [];

    const wait = new Promise(resolve => {
      // this is looking at redux props exerciseList
      nextProps.exerciseList.forEach(obj => {
        if (workoutIdCompare === obj.workoutReferenceId) {
          obj.list.forEach(innerObj => {
            arrToState.push(innerObj);
          });
        }
      });
      resolve();
    });
    wait.then(() => {
      this.setState({ list: arrToState });
    });
  };

  render() {
    const { navigation } = this.props;
    const workoutId = navigation.getParam("id", "none found");

    return (
      <View style={{ flex: 1 }}>
        <SelectedWorkout
          navigation={navigation}
          workoutId={workoutId}
          list={this.state.list}
          remove={this.removeAction}
        />
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

export default connect(
  mapStateToProps,
  { removeExerciseAction }
)(SelectedWorkoutContainer);
