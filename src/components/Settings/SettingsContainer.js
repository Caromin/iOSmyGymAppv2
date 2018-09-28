import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as firebase from "firebase";
import { withNavigationFocus } from "react-navigation";

import Settings from "./Settings";
// remember to use this.props
import { settingsAction, settingsInputs } from "../../actions/settingsAction";

class SettingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      wasEdited: false,
      weight: 0,
      calories: 0,
      successAlert: false,
      errorAlert: {
        weightCount: false,
        caloriesCount: false
      },
      activeButtons: {
        distance: 0,
        weight: 0
      }
    };
    this.updateAlert = this.updateAlert.bind(this);
    this.updateActive = this.updateActive.bind(this);
    this.updateInputs = this.updateInputs.bind(this);
    this.saveInputs = this.saveInputs.bind(this);
  }

  static navigationOptions = {
    title: "Settings"
  };

  componentWillUpdate() {
    this.props.isFocused ? null : this.setState({ successAlert: false });
  }

  updateAlert = (status, id) => {
    let selectedState = `${status}` + "Count";
    if (id) {
      this.setState({
        errorAlert: { ...this.state.errorAlert, [selectedState]: id }
      });
    } else {
      this.setState({
        errorAlert: { ...this.state.errorAlert, [selectedState]: id }
      });
    }
  };

  updateActive = (indexNumber, buttonGroupName, actionId) => {
    this.props.settingsAction(buttonGroupName, actionId);
    // use brackets [] to access passed variables that are not inside state in the key
    this.setState({
      activeButtons: {
        ...this.state.activeButtons,
        [buttonGroupName]: indexNumber
      }
    });
  };

  updateInputs = (input, id) => {
    this.setState({ wasEdited: true });
    this.setState({ [id]: input });
    this.setState({ successAlert: false });
  };

  saveInputs = () => {
    this.setState({ wasEdited: false });
    this.setState({ successAlert: true });
    let data = {
      weight: this.state.weight,
      calories: this.state.calories
    };
    this.props.settingsInputs(data);
  };

  render() {
    // use if creating a navigation new screen button
    const { navigation, personalWeight, caloriesBurned } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <Settings
          updateActive={this.updateActive}
          updateInputs={this.updateInputs}
          updateAlert={this.updateAlert}
          saveInputs={this.saveInputs}
          status={this.state}
          personalWeight={personalWeight}
          caloriesBurned={caloriesBurned}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  personalWeight: state.settingsReducer.profile.weight,
  caloriesBurned: state.settingsReducer.profile.caloriesBurned
});

export default connect(
  mapStateToProps,
  { settingsAction, settingsInputs }
)(withNavigationFocus(SettingsContainer));
