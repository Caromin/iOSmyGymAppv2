import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import PropTypes from "prop-types";
import { AsyncStorage } from "react-native";

import Settings from "./Settings";
// remember to use this.props
import { settingsAction, localSettingsAction } from "./Actions";

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
    this.getStorageSettingFunc = this.getStorageSettingFunc.bind(this);
  }

  componentWillMount() {
    this.getStorageSettingFunc();
  }

  componentWillUpdate() {
    this.props.isFocused ? null : this.setState({ successAlert: false });
  }

  setStorageSettingFunc = async () => {
    const parsedList = JSON.stringify(this.props.settingList);
    await AsyncStorage.setItem("settings", parsedList);
  };

  getStorageSettingFunc = async () => {
    await AsyncStorage.getItem("settings").then(value => {
      const completedList = JSON.parse(value);
      this.props.localSettingsAction(completedList);
      // must be used because this.state is loading before I can update the redux via mount
      this.setState({ weight: completedList.weight });
      this.setState({ calories: completedList.caloriesBurned });
      this.setState({
        activeButtons: {
          ...this.state.activeButtons,
          distanceBtn: completedList.distanceBtn
        }
      });
      this.setState({
        activeButtons: {
          ...this.state.activeButtons,
          weightBtn: completedList.weightBtn
        }
      });
    });
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
      <View style={{ flex: 1 }}>
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
