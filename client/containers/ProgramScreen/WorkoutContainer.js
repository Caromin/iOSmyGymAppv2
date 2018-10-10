import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Workout from "./Workout";
import CreateButton from "../../components/Buttons/Create";
import { removeWorkoutAction } from "./Actions";

class WorkoutContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam("currentObj").title} Workouts`
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      currentObj: {},
      programId: ""
    };
    this.openModal = this.openModal.bind(this);
    this.removeProgram = this.removeProgram.bind(this);
    this.editProgram = this.editProgram.bind(this);
    this.navigateToExerciseList = this.navigateToExerciseList.bind(this);
  }

  componentWillMount() {
    const { navigation } = this.props;
    // console.log(
    //   "Incoming Program Id: ",
    //   navigation.getParam("currentObj", false).id
    // );

    navigation.getParam("currentObj", false)
      ? this.setState({
          currentObj: navigation.getParam("currentObj", false)
        })
      : null;
    navigation.getParam("currentObj", false)
      ? this.setState({
          programId: navigation.getParam("currentObj", false).id
        })
      : alert("unexpected error in workouts container");
  }

  removeProgram = objId => {
    this.props.removeWorkoutAction(objId);
  };

  openModal = () => {
    this.props.navigation.navigate("Modal", {
      createWorkout: true,
      programId: this.state.programId,
      currentObj: this.state.currentObj
    });
  };

  editProgram = obj => {
    this.props.navigation.navigate("Modal", {
      editing: true,
      currentObj: obj,
      createWorkout: true
    });
  };

  navigateToExerciseList = obj => {
    this.props.navigation.navigate("ExerciseList", {
      id: obj.id,
      workoutTitle: obj.title
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Workout
          programId={this.state.programId}
          programList={this.props.programList}
          createWhat={"workout"}
          removeProgram={this.removeProgram}
          editProgram={this.editProgram}
          onPress={this.navigateToExerciseList}
        />
        <CreateButton createWhat={"workout"} onPressWorkout={this.openModal}>
          Add Workout
        </CreateButton>
      </View>
    );
  }
}

WorkoutContainer.proptypes = {
  programList: PropTypes.array
};

const mapStateToProps = state => ({
  programList: state.programReducer.programList
});

export default connect(
  mapStateToProps,
  { removeWorkoutAction }
)(WorkoutContainer);
