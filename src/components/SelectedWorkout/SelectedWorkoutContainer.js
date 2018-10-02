import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import SelectedWorkout from "./SelectedWorkout";

class SelectedWorkoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    console.log(navigation.getParam("id", "none"));

    return (
      <View style={{ flex: 1 }}>
        <SelectedWorkout navigation={navigation} />
      </View>
    );
  }
}

SelectedWorkoutContainer.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(SelectedWorkoutContainer);
