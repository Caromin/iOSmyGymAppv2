import React, { Component } from "react";
import { Button } from "react-native-elements";

export default class AddExercise extends Component {
  render() {
    return (
      <Button
        large={false}
        title={"Add"}
        buttonStyle={{ padding: 5 }}
        transparent
        textStyle={{ color: "#000" }}
        rightIcon={{
          name: "plus-circle",
          type: "feather",
          color: "#000",
          size: 30
        }}
        onPress={() => this.props.onPress()}
      />
    );
  }
}
