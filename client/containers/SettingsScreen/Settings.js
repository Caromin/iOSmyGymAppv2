import React, { Component } from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FormValidationMessage } from "react-native-elements";

import FormButtonGroup from "../../components/FormButton/FormButton";
import FormInputGroup from "../../components/FormInput/FormInput";
import SaveButton from "../../components/Buttons/Save";
import styles from "./Styles";
import global from "../../styles/styles";

export default class Settings extends Component {
  render() {
    const distanceButtons = ["Miles", "Kilometers"];
    const weightButtons = ["Pounds", "Kilograms"];
    const {
      activeButtons,
      successAlert,
      weight,
      calories,
      errorStatus,
      isEdited
    } = this.props.status;
    const { updateErrMsgFunc, updateSettingsFunc, saveInputsFunc } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          {successAlert ? (
            <FormValidationMessage
              containerStyle={styles.FormValidation}
              labelStyle={{ color: "white" }}
            >
              Successfully Saved!
            </FormValidationMessage>
          ) : null}
          <View>
            <FormButtonGroup
              buttons={distanceButtons}
              id={"distanceBtn"}
              onPress={this.props.updateSettingsFunc}
              importStyle={global.redBackground}
              activeStatus={activeButtons.distanceBtn}
            >
              Distance:
            </FormButtonGroup>
            <FormButtonGroup
              buttons={weightButtons}
              id={"weightBtn"}
              onPress={this.props.updateSettingsFunc}
              importStyle={global.redBackground}
              activeStatus={activeButtons.weightBtn}
            >
              Weight:
            </FormButtonGroup>
          </View>
          <View>
            <FormInputGroup
              maxLength={3}
              weight={weight}
              id={"weight"}
              errorMsg={errorStatus.weightCount}
              updateErrMsgFunc={updateErrMsgFunc}
              onPress={updateSettingsFunc}
              errorMaxValue={[300, "1,000"]}
            >
              Current Weight:
            </FormInputGroup>
            <FormInputGroup
              maxLength={5}
              weight={calories}
              id={"calories"}
              errorMsg={errorStatus.caloriesCount}
              updateErrMsgFunc={updateErrMsgFunc}
              onPress={updateSettingsFunc}
              errorMaxValue={[25000, "100,000"]}
            >
              This Weeks Calories Burned:
            </FormInputGroup>
          </View>
          <SaveButton onPress={saveInputsFunc} isEdited={isEdited}>
            Save
          </SaveButton>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
