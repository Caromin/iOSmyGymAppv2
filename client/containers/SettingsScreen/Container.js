import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import Settings from "./Settings";
import { settingsAction, localSettingsAction } from "./Actions";
import global from "../../styles/styles";

class SettingsContainer extends Component {
  static navigationOptions = {
    title: "Settings"
  };
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false,
      weight: this.props.personalWeight,
      calories: this.props.caloriesBurned,
      successAlert: false,
      errorStatus: {
        weightCount: false,
        caloriesCount: false
      },
      activeButtons: {
        distanceBtn: this.props.distanceBtn,
        weightBtn: this.props.weightBtn
      }
    };
    this.updateErrMsgFunc = this.updateErrMsgFunc.bind(this);
    this.saveInputsFunc = this.saveInputsFunc.bind(this);
    this.updateSettingsFunc = this.updateSettingsFunc.bind(this);
    this.setStorageSettingFunc = this.setStorageSettingFunc.bind(this);
  }

  componentWillMount = async () => {
    // MINOR ISSUE: IF SET TO INITIAL ROUTE THE PROPS DON'T UPDATE AND USE DEFAULT FROM INDEX.JS
    // HAD TO RECALL HERE BEFORE I SET THE STATES
    await AsyncStorage.getItem("settings").then(value => {
      const completedList = JSON.parse(value);
      console.log(completedList);
      this.props.localSettingsAction(completedList);
    });

    await this.setState({ weight: this.props.personalWeight });
    await this.setState({ calories: this.props.caloriesBurned });
    await this.setState({
      activeButtons: {
        ...this.state.activeButtons,
        distanceBtn: this.props.distanceBtn
      }
    });
    await this.setState({
      activeButtons: {
        ...this.state.activeButtons,
        weightBtn: this.props.weightBtn
      }
    });
  };

  componentWillUpdate() {
    this.props.isFocused ? null : this.setState({ successAlert: false });
  }

  setStorageSettingFunc = async () => {
    const parsedList = JSON.stringify(this.props.settingList);
    await AsyncStorage.setItem("settings", parsedList);
  };

  saveInputsFunc = async () => {
    this.setState({ isEdited: false });
    this.setState({ successAlert: true });
    let data = {
      weight:
        this.state.weight === NaN
          ? this.props.personalWeight
          : this.state.weight,
      caloriesBurned:
        this.state.calories === NaN
          ? this.props.caloriesBurned
          : this.state.calories,
      distanceBtn: this.state.activeButtons.distanceBtn,
      weightBtn: this.state.activeButtons.weightBtn
    };
    await this.props.settingsAction(data);
    await this.setStorageSettingFunc();
  };

  updateErrMsgFunc = (status, ifActive) => {
    let selectedState = `${status}` + "Count";
    ifActive
      ? this.setState({
          errorStatus: {
            ...this.state.errorStatus,
            [selectedState]: ifActive
          }
        })
      : this.setState({
          errorStatus: {
            ...this.state.errorStatus,
            [selectedState]: ifActive
          }
        });
  };

  updateSettingsFunc = (id, value, btnOnlyId) => {
    this.setState({ isEdited: true });
    this.setState({ successAlert: false });
    btnOnlyId
      ? this.setState({
          activeButtons: {
            ...this.state.activeButtons,
            [id]: value
          }
        })
      : this.setState({ [id]: !value ? 0 : value });
  };

  render() {
    return (
      <View style={[{ flex: 1 }, global.blackBackground]}>
        <Settings
          updateSettingsFunc={this.updateSettingsFunc}
          updateErrMsgFunc={this.updateErrMsgFunc}
          saveInputsFunc={this.saveInputsFunc}
          status={this.state}
        />
      </View>
    );
  }
}

SettingsContainer.propTypes = {
  personalWeight: PropTypes.number,
  caloriesBurned: PropTypes.number,
  distanceBtn: PropTypes.number,
  weightBtn: PropTypes.number
};

const mapStateToProps = state => ({
  settingList: state.settingsReducer.profile,
  personalWeight: state.settingsReducer.profile.weight,
  caloriesBurned: state.settingsReducer.profile.caloriesBurned,
  distanceBtn: state.settingsReducer.profile.distanceBtn,
  weightBtn: state.settingsReducer.profile.weightBtn
});

export default connect(
  mapStateToProps,
  { settingsAction, localSettingsAction }
)(withNavigationFocus(SettingsContainer));
