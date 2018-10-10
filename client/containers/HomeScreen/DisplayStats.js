import React, { Component } from "react";
import { View, Text } from "react-native";

import global from "../../styles/styles";

export default class DisplayStats extends Component {
  render() {
    const { children, stat, id } = this.props;
    return (
      <View style={{ width: "50%", padding: 10 }}>
        <Text style={global.defaultText}>
          {children} {stat === undefined ? 0 : stat}{" "}
          {id === undefined ? null : id}
        </Text>
      </View>
    );
  }
}
