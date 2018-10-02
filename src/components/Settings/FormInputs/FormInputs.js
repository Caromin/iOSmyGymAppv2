import React from "react";
import { View, Text } from "react-native";
import { FormInput, FormValidationMessage } from "react-native-elements";

import globalStyles from "../../../styles";
import styles from "../styles";

const FormInputs = ({ updateErrMsgFunc, status, updateSettingsFunc }) => {
  const errorWeight = status.errorStatus.weightCount;
  const errorCalorie = status.errorStatus.caloriesCount;
  return (
    <View>
      <View style={styles.verticalMargins}>
        <Text style={globalStyles.defaultText}>Current Weight:</Text>
        <FormInput
          keyboardType={"numeric"}
          maxLength={3}
          defaultValue={`${status.weight}`}
          onChangeText={input => {
            let id = "weight";
            let value = parseInt(input);
            value > 300
              ? updateErrMsgFunc(id, true)
              : updateErrMsgFunc(id, false);
            updateSettingsFunc(id, value);
          }}
        />
        {errorWeight ? (
          <FormValidationMessage labelStyle={{ fontSize: 13 }}>
            {"Note: Max input is less than 1,000 lb."}
          </FormValidationMessage>
        ) : null}
        {/* icon.type selects which react-element icon section be used */}
      </View>{" "}
      <View style={styles.verticalMargins}>
        <Text style={globalStyles.defaultText}>Update Calories:</Text>
        <FormInput
          keyboardType={"numeric"}
          defaultValue={`${status.calories}`}
          maxLength={5}
          onChangeText={input => {
            let id = "calories";
            let value = parseInt(input);
            value > 10000
              ? updateErrMsgFunc(id, true)
              : updateErrMsgFunc(id, false);
            updateSettingsFunc(id, value);
          }}
        />
        {errorCalorie ? (
          <FormValidationMessage labelStyle={{ fontSize: 13 }}>
            {"Note: Max Input is less than 100,000 cal."}
          </FormValidationMessage>
        ) : null}
      </View>
    </View>
  );
};

export default FormInputs;
