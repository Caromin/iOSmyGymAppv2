import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./Home";

class HomeContainer extends Component {
  // can be a static object, used function instead to be about to used objects like navigation
  static navigationOptions = {
    title: "Main Menu"
  };

  constructor() {
    super();
    this.state = {
      selectedBodyPart: "",
      workouts: 0,
      records: 0
    };

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress = part => {
    this.setState({ selectedBodyPart: part });
    this.props.navigation.navigate("Modal", {
      selected: part
    });
  };

  render() {
    const { weightId, personalWeight, caloriesBurned } = this.props;
    return (
      <View style={{ paddingTop: 10, flex: 1 }}>
        <Home
          onPressed={this.handlePress}
          weightProp={weightId}
          personalWeight={personalWeight}
          caloriesBurned={caloriesBurned}
          status={this.state}
        />
      </View>
    );
  }
}

HomeContainer.propTypes = {
  weightId: PropTypes.string,
  personalWeight: PropTypes.number,
  caloriesBurned: PropTypes.number
};

const mapStateToProps = state => ({
  weightId: state.settingsReducer.profile.weightSettings,
  personalWeight: state.settingsReducer.profile.weight,
  caloriesBurned: state.settingsReducer.profile.caloriesBurned
});

export default connect(mapStateToProps)(HomeContainer);
