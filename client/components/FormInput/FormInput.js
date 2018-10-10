import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormInput, FormValidationMessage } from "react-native-elements";

import global from "../../styles/styles";

export default class FormInputGroup extends Component {
  render() {
    const {
      children,
      maxLength,
      weight,
      id,
      errorMsg,
      updateErrMsgFunc,
      onPress,
      errorMaxValue
    } = this.props;
    return (
      <View style={global.defaultFormMargin}>
        <Text style={global.defaultText}>{children}</Text>
        <FormInput
          keyboardType={"numeric"}
          maxLength={maxLength}
          defaultValue={`${weight}`}
          onChangeText={input => {
            let value = parseInt(input);
            value > errorMaxValue[0]
              ? updateErrMsgFunc(id, true)
              : updateErrMsgFunc(id, false);
            onPress(id, value);
          }}
        />
        {errorMsg ? (
          <FormValidationMessage labelStyle={{ fontSize: 13 }}>
            {`Note: Max input is less than ${errorMaxValue[1]} lb.`}
          </FormValidationMessage>
        ) : null}
      </View>
    );
  }
}
