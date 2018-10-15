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
      currentHours: 0,
      pendingCompletedList: []
    };
    this.displayTime = this.displayTime.bind(this);
    this.navigateToSingleExercise = this.navigateToSingleExercise.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  componentDidMount() {
    this.props.isActiveAction(true);
    this.displayTime();
  }

  componentWillReceiveProps(nextProps) {
    let pendingObj = nextProps.navigation.state.params.pendingObj;
    if (nextProps.navigation.state.params.isPending) {
      this.updateList(pendingObj);
    }
  }

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
      isEdited
        ? this.setState({ pendingCompletedList: data })
        : this.setState({
            pendingCompletedList: [...this.state.pendingCompletedList, data]
          });
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
    // console.log("this is the specific obj: ", obj);
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
          totalCompletedSets={this.props.totalCompletedSets}
          completedExercises={this.props.completedExercises}
          onPressNav={this.navigateToSingleExercise}
        />
        {/* onpress still needed below */}
        <SaveButton>Finish</SaveButton>
      </View>
    );
  }
}

IsActiveContainer.propTypes = {
  isActiveProp: PropTypes.bool,
  totalCompletedSets: PropTypes.number,
  completedExercises: PropTypes.number
};

const mapStateToProps = state => ({
  isActiveProp: state.isActiveReducer.isActive,
  totalCompletedSets: state.isActiveReducer.totalCompletedSets,
  completedExercises: state.isActiveReducer.completedExercises
});

export default connect(
  mapStateToProps,
  { isActiveAction }
)(IsActiveContainer);
