import React, { Component } from "react";
import { View, Alert, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import IsActive from "./IsActive";
import CancelButton from "../../components/Buttons/Headers/Cancel";
import SaveButton from "../../components/Buttons/Save";
import { isActiveAction, submitCompletionAction } from "./Actions";

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
      currentHours: 0,
      pendingCompletedList: [],
      pendingNameAndGroup: []
    };
    this.displayTime = this.displayTime.bind(this);
    this.navigateToSingleExercise = this.navigateToSingleExercise.bind(this);
    this.updateList = this.updateList.bind(this);
    this.submitToReducer = this.submitToReducer.bind(this);
    this.setStorageProgram = this.setStorageProgram.bind(this);
  }

  componentDidMount() {
    this.props.isActiveAction(true);
    this.displayTime();
  }

  componentWillReceiveProps(nextProps) {
    this.setStorageProgram();
    let pendingObj = nextProps.navigation.state.params.pendingObj;

    if (nextProps.navigation.state.params.isPending) {
      this.updateList(pendingObj);
    }
  }

  setStorageProgram = async () => {
    const parsedList = JSON.stringify(this.props.weeklyCompletedList);
    const totalNumber = JSON.stringify(this.props.completeWorkouts);
    await AsyncStorage.setItem("weeklyCompletedList", parsedList);
    await AsyncStorage.setItem("totalNumber", totalNumber);
  };

  submitToReducer = () => {
    let completedWorkoutObj = {
      list: this.state.pendingNameAndGroup,
      dateToRemove: Date.now() + 7 * 24 * 60 * 60 * 1000
    };

    Alert.alert("Complete Workout", "Are you finished with your workout?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      {
        text: "Finish",
        onPress: async () => {
          await this.props.submitCompletionAction(completedWorkoutObj),
            await this.props.isActiveAction(false);
          await await this.props.navigation.goBack();
        }
      }
    ]);
  };

  updateList = pendingObj => {
    let isEdited = false;

    let comparedList = new Promise(resolve => {
      if (this.state.pendingCompletedList.length > 0) {
        let checkList = this.state.pendingCompletedList.map(obj => {
          if (obj.indexRef === pendingObj.indexRef) {
            isEdited = true;
            return pendingObj;
          } else {
            return obj;
          }
        });
        !isEdited ? resolve(pendingObj) : resolve(checkList);
      } else {
        resolve(pendingObj);
      }
    });

    comparedList.then(data => {
      if (isEdited) {
        let completeNewArr = data.map(index => {
          let nameAndGroup = {
            title: index.title,
            muscleGroup: index.muscleGroup
          };
          return nameAndGroup;
        });
        this.setState({ pendingCompletedList: data });
        this.setState({
          pendingNameAndGroup: completeNewArr
        });
      } else {
        let newObj = {
          title: data.title,
          muscleGroup: data.muscleGroup
        };
        this.setState({
          pendingCompletedList: [...this.state.pendingCompletedList, data]
        });
        this.setState({
          pendingNameAndGroup: [...this.state.pendingNameAndGroup, newObj]
        });
      }
    });
  };

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

  navigateToSingleExercise = (obj, index) => {
    this.props.navigation.navigate("SingleExercise", {
      obj,
      index,
      persistingList: this.state.pendingCompletedList
    });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <IsActive
          navigation={navigation}
          status={this.state}
          onPressNav={this.navigateToSingleExercise}
        />
        <SaveButton onPress={this.submitToReducer}>Finish</SaveButton>
      </View>
    );
  }
}

IsActiveContainer.propTypes = {
  isActiveProp: PropTypes.bool,
  weeklyCompletedList: PropTypes.array,
  completeWorkouts: PropTypes.number
};

const mapStateToProps = state => ({
  isActiveProp: state.isActiveReducer.isActive,
  weeklyCompletedList: state.isActiveReducer.weeklyCompletedList,
  completeWorkouts: state.isActiveReducer.completedWorkouts
});

export default connect(
  mapStateToProps,
  { isActiveAction, submitCompletionAction }
)(IsActiveContainer);
