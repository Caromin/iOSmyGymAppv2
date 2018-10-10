import React, { Component } from "react";
import { Button } from "react-native-elements";

export default class InfoButton extends Component {
  render() {
    return (
      <Button
        onPress={() => console.log("nothing right now")}
        large={false}
        title={""}
        buttonStyle={{ padding: 5 }}
        transparent
        rightIcon={{
          name: "information-outline",
          type: "material-community",
          color: "#000",
          size: 30
        }}
      />
    );
  }
}
