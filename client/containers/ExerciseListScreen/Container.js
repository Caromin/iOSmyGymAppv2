import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import {
  removeExerciseAction,
  refreshReduxAction,
  reorderListAction
} from "./Actions";
import ExerciseList from "./ExerciseList";
import StartButton from "../../components/Buttons/Start";
import AddExercise from "../../components/Buttons/Headers/AddExercise";

class ExerciseListContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("workoutTitle")} Exercises`,
      headerRight: (
        <AddExercise onPress={navigation.getParam("openModalFunc")} />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      workoutId: "",
      workoutTitle: ""
    };
    this.updateState = this.updateState.bind(this);
    this.removeAction = this.removeAction.bind(this);
    this.getStorageProgram = this.getStorageProgram.bind(this);
    this.reorderList = this.reorderList.bind(this);
    this.startWorkout = this.startWorkout.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  componentWillMount() {
    this.props.navigation.setParams({ openModalFunc: this.openModal });
    this.props.navigation.getParam("id")
      ? this.setState({ workoutId: this.props.navigation.getParam("id") })
      : null;
    this.props.navigation.getParam("workoutTitle")
      ? this.setState({
          workoutTitle: this.props.navigation.getParam("workoutTitle")
        })
      : null;

    this.getStorageProgram();
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  reorderList = (indexData, workoutId) => {
    this.props.reorderListAction(indexData, workoutId);
  };

  removeAction = (objDirectId, passedWorkoutId) => {
    this.props.removeExerciseAction(objDirectId, passedWorkoutId);
  };

  // gets the local storage and replaces the empty redux
  getStorageProgram = async () => {
    await AsyncStorage.getItem("exerciseList").then(value => {
      const completedExerciseList = JSON.parse(value);
      // console.log("getting local:", completedExerciseList);
      if (completedExerciseList === null) {
        return;
      } else {
        this.props.refreshReduxAction(completedExerciseList);
      }
    });
  };

  // updates the state and updates the local storage for future redux refreshes
  updateState = async nextProps => {
    const parsedExerciseList = JSON.stringify(nextProps.exerciseList);
    await AsyncStorage.setItem("exerciseList", parsedExerciseList);

    arrToState = [];

    const wait = new Promise(resolve => {
      // this is looking at redux props exerciseList
      nextProps.exerciseList.forEach(obj => {
        if (this.state.workoutId === obj.workoutReferenceId) {
          obj.list.forEach(innerObj => {
            arrToState.push(innerObj);
          });
        }
      });
      resolve();
    });
    wait.then(() => {
      arrToState === null ? null : this.setState({ list: arrToState });
    });
  };

  startWorkout = () => {
    this.props.navigation.navigate("IsActive", {
      workoutTitle: this.state.workoutTitle,
      workoutId: this.state.workoutId,
      list: this.state.list
    });
  };

  openModal = () => {
    this.props.navigation.navigate("Modal", {
      specificWorkoutBool: true,
      specificWorkoutId: this.state.workoutId
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ExerciseList
          list={this.state.list}
          workoutId={this.state.workoutId}
          reorderList={this.reorderList}
          remove={this.removeAction}
        />
        <StartButton onPressStart={this.startWorkout} list={this.state.list}>
          Start Workout
        </StartButton>
      </View>
    );
  }
}

ExerciseList.propTypes = {
  exerciseList: PropTypes.array
};

const mapStateToProps = state => ({
  exerciseList: state.exerciseReducer.exerciseArr
});

export default connect(
  mapStateToProps,
  { removeExerciseAction, refreshReduxAction, reorderListAction }
)(ExerciseListContainer);
