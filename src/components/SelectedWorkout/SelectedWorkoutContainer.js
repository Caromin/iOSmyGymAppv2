import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import {
  removeExerciseAction,
  refreshReduxAction
} from "../../actions/exerciseActions";
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
    this.getStorageProgram = this.getStorageProgram.bind(this);
  }
  componentWillMount() {
    this.getStorageProgram();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("on receive props: ", nextProps.exerciseList);
    this.updateState(nextProps);
  }

  removeAction = (objDirectId, passedWorkoutId) => {
    this.props.removeExerciseAction(objDirectId, passedWorkoutId);
  };

  // gets the local storage and replaces the empty redux
  getStorageProgram = async () => {
    await AsyncStorage.getItem("exerciseList").then(value => {
      const completedExerciseList = JSON.parse(value);
      // console.log("getting local:", completedExerciseList);
      this.props.refreshReduxAction(completedExerciseList);
    });
  };

  // updates the state and updates the local storage for future redux refreshes
  updateState = async nextProps => {
    const parsedExerciseList = JSON.stringify(nextProps.exerciseList);
    await AsyncStorage.setItem("exerciseList", parsedExerciseList);

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
  { removeExerciseAction, refreshReduxAction }
)(SelectedWorkoutContainer);
