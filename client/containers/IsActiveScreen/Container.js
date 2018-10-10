import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import IsActive from "./IsActive";
import CancelButton from "../../components/Buttons/Headers/Cancel";
import SaveButton from "../../components/Buttons/Save";
import { isActiveAction } from "./Actions";

class IsActiveContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <CancelButton navigation={navigation} />,
      title: navigation.getParam("workoutTitle")
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.navigation.getParam("list"),
      workoutId: this.props.navigation.getParam("workoutId"),
      saveResults: true,
      currentSeconds: 0,
      currentMinutes: 0,
      currentHours: 0
    };
    this.displayTime = this.displayTime.bind(this);
    this.addToPendingArr = this.addToPendingArr.bind(this);
  }

  componentDidMount() {
    this.props.isActiveAction(true);
    this.displayTime();
  }

  displayTime = () => {
    setInterval(() => {
      if (this.props.isActiveProp) {
        this.setState({ currentSeconds: this.state.currentSeconds + 1 });
        if (this.state.currentSeconds > 59) {
          this.setState({ currentSeconds: 0 });
          this.setState({ currentMinutes: this.state.currentMinutes + 1 });
          if (this.state.currentMinutes > 59) {
            this.setState({ currentMinutes: 0 });
            this.setState({ currentHours: this.state.currentHours + 1 });
            if (this.state.currentHours === 24) {
              this.setState({ counterActive: false });
            }
          }
        }
      }
    }, 1000);
  };

  addToPendingArr = (obj, totalSet) => {
    console.log(obj);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <IsActive
          navigation={navigation}
          status={this.state}
          pendingCompletedList={this.props.pendingCompletedList}
          totalCompletedSets={this.props.totalCompletedSets}
          completedExercises={this.props.completedExercises}
        />
        <SaveButton>Finish</SaveButton>
      </View>
    );
  }
}

IsActiveContainer.propTypes = {
  isActiveProp: PropTypes.bool,
  pendingCompletedList: PropTypes.array,
  totalCompletedSets: PropTypes.number,
  completedExercises: PropTypes.number
};

const mapStateToProps = state => ({
  isActiveProp: state.isActiveReducer.isActive,
  pendingCompletedList: state.isActiveReducer.pendingCompletedList,
  totalCompletedSets: state.isActiveReducer.totalCompletedSets,
  completedExercises: state.isActiveReducer.completedExercises
});

export default connect(
  mapStateToProps,
  { isActiveAction }
)(IsActiveContainer);
