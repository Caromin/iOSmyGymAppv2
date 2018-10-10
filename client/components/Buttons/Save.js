import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import global from "../../styles/styles";

export default class SaveButton extends Component {
  render() {
    const { onPress, children, isEdited, targetedObj, isEdit } = this.props;

    return (
      <View style={global.defaultAbsoluteButton}>
        <Button
          large
          buttonStyle={global.greenBackground}
          textStyle={global.defaultTextColor}
          icon={{
            name: "save",
            type: "entypo",
            color: "#000"
          }}
          disabled={isEdited === undefined ? false : !isEdited}
          onPress={() => (isEdit ? onPress(targetedObj) : onPress())}
          title={children}
        />
      </View>
    );
  }
}