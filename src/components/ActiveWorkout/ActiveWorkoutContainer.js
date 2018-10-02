import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CreateWorkout } from "../Buttons/Buttons";
import { removeWorkoutAction } from "../../actions/programActions";
import ActiveWorkout from "./ActiveWorkout";

class ActiveWorkoutContainer extends Component {
  static navigationOptions = {
    title: "Workouts"
  };

  constructor(props) {
    super(props);
  }
  render() {
    const navId = this.props.navigation.getParam("id", "none");
    const { programList, navigation, removeWorkoutAction } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ActiveWorkout
          navigation={navigation}
          programList={programList}
          navId={navId}
          removeWorkoutAction={removeWorkoutAction}
        />
        <CreateWorkout navId={navId} navigation={navigation} />
      </View>
    );
  }
}

ActiveWorkoutContainer.proptypes = {
  workoutList: PropTypes.array
};

const mapStateToProps = state => ({
  programList: state.programReducer.programList
});

export default connect(
  mapStateToProps,
  { removeWorkoutAction }
)(ActiveWorkoutContainer);
