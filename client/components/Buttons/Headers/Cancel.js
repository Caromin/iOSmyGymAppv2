import React, { Component } from "react";
import { View, Text, TouchableHighlight, Alert } from "react-native";
import { connect } from "react-redux";

import { isActiveAction } from "../../../containers/IsActiveScreen/Actions";

class CancelButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        onPress={() => {
          Alert.alert("Cancel Workout", "Cancelling will erase this workout.", [
            {
              text: "Nevermind",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "Continue",
              onPress: () => (
                this.props.isActiveAction(false), this.props.navigation.goBack()
              )
            }
          ]);
        }}
      >
        <View style={{ marginLeft: 15, padding: 5 }}>
          <Text>Cancel</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default connect(
  null,
  { isActiveAction }
)(CancelButton);
