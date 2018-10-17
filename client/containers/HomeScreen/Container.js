import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./Home";
import global from "../../styles/styles";

class HomeContainer extends Component {
  // can be a static object, used function instead to be about to used objects like navigation
  static navigationOptions = {
    title: "Main Menu"
  };

  constructor() {
    super();
    this.state = {
      selectedBodyPart: ""
    };

    this.selectedBodyPart = this.selectedBodyPart.bind(this);
  }

  selectedBodyPart = part => {
    this.setState({ selectedBodyPart: part });
    this.props.navigation.navigate("Modal", {
      selected: part
    });
  };

  render() {
    const {
      weightId,
      personalWeight,
      caloriesBurned,
      totalWorkouts,
      weightChange
    } = this.props;
    return (
      <View style={[global.blackBackground, { paddingTop: 10, flex: 1 }]}>
        <Home
          onPressed={this.selectedBodyPart}
          weightId={weightId}
          weightChange={weightChange}
          personalWeight={personalWeight}
          caloriesBurned={caloriesBurned}
          totalWorkouts={totalWorkouts}
        />
      </View>
    );
  }
}

HomeContainer.propTypes = {
  weightId: PropTypes.string,
  weightChange: PropTypes.number,
  personalWeight: PropTypes.number,
  caloriesBurned: PropTypes.number,
  totalWorkouts: PropTypes.number
};

const mapStateToProps = state => ({
  weightId: state.settingsReducer.profile.weightId,
  weightChange: state.settingsReducer.profile.weightDifference,
  personalWeight: state.settingsReducer.profile.weight,
  caloriesBurned: state.settingsReducer.profile.caloriesBurned,
  totalWorkouts: state.isActiveReducer.completedWorkouts
});

export default connect(mapStateToProps)(HomeContainer);
