import React, { Component } from "react";
import { Button } from "react-native-elements";

export default class ReturnButton extends Component {
  render() {
    const { onPress } = this.props;
    return (
      <Button
        onPress={() => onPress()}
        large={false}
        title={""}
        buttonStyle={{ padding: 5 }}
        transparent
        icon={{
          name: "ios-arrow-back",
          type: "ionicon",
          color: "#000",
          size: 30
        }}
      />
    );
  }
}
