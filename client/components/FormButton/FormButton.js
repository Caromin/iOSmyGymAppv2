import React, { Component } from "react";
import { View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

import global from "../../styles/styles";

export default class FormButtonGroup extends Component {
  render() {
    const { onPress, id, buttons, activeStatus, children } = this.props;
    return (
      <View style={global.defaultFormMargin}>
        <Text style={global.defaultWhiteText}>{children}</Text>
        <ButtonGroup
          buttons={buttons}
          // this is to show which index is active
          selectedIndex={activeStatus}
          onPress={value => {
            let actionId = buttons[value];
            onPress(id, value, actionId);
          }}
          selectedButtonStyle={global.purpleBackground}
          selectedTextStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}
