import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import global from "../../styles/styles";

export default class CreateButton extends Component {
  render() {
    const { children, onPressProgram, createWhat, onPressWorkout } = this.props;
    return (
      <View style={global.defaultAbsoluteButton}>
        <Button
          large
          buttonStyle={global.blueBackground}
          textStyle={global.defaultTextColor}
          icon={{
            name: "plus-circle",
            type: "feather",
            color: "black"
          }}
          onPress={() => {
            switch (createWhat) {
              case "program":
                onPressProgram();
                break;
              case "workout":
                onPressWorkout();
                break;
              default:
                break;
            }
          }}
          title={children}
        />
      </View>
    );
  }
}
