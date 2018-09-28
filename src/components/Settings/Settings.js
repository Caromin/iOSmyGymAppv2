import React from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import {
  ButtonGroup,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

// components
import { SaveButton } from "../Buttons/Buttons";
import styles from "./styles";
import { globalStyles } from "../../index";

const Settings = ({
  updateActive,
  updateInputs,
  updateAlert,
  status,
  saveInputs,
  personalWeight,
  caloriesBurned
}) => {
  const distanceButtons = ["Miles", "Kilometers"];
  const weightButtons = ["Pounds", "Kilograms"];
  const successAlert = status.successAlert;
  const errorWeight = status.errorAlert.weightCount;
  const errorCalorie = status.errorAlert.caloriesCount;
  const buttonStatus = !status.wasEdited;
  const weight = personalWeight.toString();
  const calories = caloriesBurned.toString();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        {successAlert ? (
          <FormValidationMessage
            containerStyle={{
              backgroundColor: "#5cb85c",
              alignItems: "center",
              padding: 5
            }}
            labelStyle={{ color: "white" }}
          >
            Successfully Saved!
          </FormValidationMessage>
        ) : null}
        <View style={globalStyles.verticalMargins}>
          <Text style={globalStyles.defaultText}>Distance:</Text>
          <ButtonGroup
            buttons={distanceButtons}
            // this is to show which index is active
            selectedIndex={status.activeButtons.distance}
            onPress={indexNumber => {
              let actionParam = "distance";
              let actionId = distanceButtons[indexNumber];
              updateActive(indexNumber, actionParam, actionId);
            }}
            selectedButtonStyle={globalStyles.redBg}
          />
        </View>
        <View style={globalStyles.verticalMargins}>
          <Text style={globalStyles.defaultText}>Weight:</Text>
          <ButtonGroup
            buttons={weightButtons}
            // this is to show which index is active
            selectedIndex={status.activeButtons.weight}
            onPress={indexNumber => {
              let actionParam = "weight";
              let actionId = weightButtons[indexNumber];
              updateActive(indexNumber, actionParam, actionId);
            }}
            selectedButtonStyle={[globalStyles.redBg]}
          />
        </View>
        <View style={globalStyles.verticalMargins}>
          <Text style={globalStyles.defaultText}>Current Weight:</Text>
          <FormInput
            keyboardType={"numeric"}
            maxLength={3}
            defaultValue={weight}
            onChangeText={input => {
              let id = "weight";
              input > 300 ? updateAlert(id, true) : updateAlert(id, false);
              updateInputs(input, id);
            }}
          />
          {errorWeight ? (
            <FormValidationMessage labelStyle={{ fontSize: 13 }}>
              {"Note: Max input is less than 1,000 lb."}
            </FormValidationMessage>
          ) : null}
          {/* icon.type selects which react-element icon section be used */}
        </View>{" "}
        <View style={globalStyles.verticalMargins}>
          <Text style={globalStyles.defaultText}>Update Calories:</Text>
          <FormInput
            keyboardType={"numeric"}
            defaultValue={calories}
            maxLength={5}
            onChangeText={input => {
              let id = "calories";
              input > 10000 ? updateAlert(id, true) : updateAlert(id, false);
              updateInputs(input, id);
            }}
          />
          {errorCalorie ? (
            <FormValidationMessage labelStyle={{ fontSize: 13 }}>
              {"Note: Max Input is less than 100,000 cal."}
            </FormValidationMessage>
          ) : null}
          {/* icon.type selects which react-element icon section be used */}
        </View>
        <SaveButton buttonStatus={buttonStatus} saveInputs={saveInputs} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Settings;
