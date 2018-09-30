import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import { globalStyles } from "../../index";
import styles from "./styles";
import { addProgramAction } from "../../actions/programActions";

export const CreateButton = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.defaultView}>
      <Button
        large
        buttonStyle={[globalStyles.blueButton, { width: "100%" }]}
        textStyle={{ color: "#000" }}
        icon={{
          name: "plus-circle",
          type: "feather",
          color: "black"
        }}
        onPress={() => navigation.navigate("Modal", { createProgram: true })}
        title="Create Program"
      />
    </View>
  );
};

class CompleteButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation, status } = this.props;
    const data = {
      title: status.programName,
      description: status.programDescription
    };
    return (
      <View style={styles.defaultView}>
        <Button
          large
          buttonStyle={[globalStyles.greenButton, { width: "100%" }]}
          textStyle={{ color: "#000" }}
          icon={{
            name: "check-circle",
            type: "feather",
            color: "black"
          }}
          onPress={() => {
            this.props.addProgramAction(data);
            navigation.navigate("Programs");
          }}
          title="Complete"
        />
      </View>
    );
  }
}

export const SaveButton = ({ buttonStatus, saveInputs }) => {
  return (
    <View style={styles.defaultView}>
      <Button
        large
        buttonStyle={[globalStyles.redButton, { width: "100%" }]}
        textStyle={{ color: "black" }}
        icon={{
          name: "save",
          type: "entypo",
          color: "black"
        }}
        disabled={buttonStatus}
        onPress={() => saveInputs()}
        title="Save"
      />
    </View>
  );
};

export const ReturnButton = ({ navigation }) => {
  return (
    <View style={{ width: "30%", marginTop: 50 }}>
      <Button
        onPress={() => navigation.goBack()}
        large={false}
        buttonStyle={[globalStyles.redButton, { width: "100%" }]}
        textStyle={{ color: "black" }}
        title="Back"
        icon={{
          name: "arrow-left",
          type: "feather",
          color: "black"
        }}
        borderRadius={10}
      />
    </View>
  );
};

export default connect(
  null,
  { addProgramAction }
)(CompleteButton);
