import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import global from "../../styles/styles";

export default class StartButton extends Component {
  render() {
    const { children, onPressStart } = this.props;
    return (
      <View style={global.defaultAbsoluteButton}>
        <Button
          large
          buttonStyle={global.redBackground}
          textStyle={global.defaultTextColor}
          icon={{
            name: "directions-run",
            color: "black"
          }}
          onPress={() => {
            onPressStart();
          }}
          title={children}
        />
      </View>
    );
  }
}
