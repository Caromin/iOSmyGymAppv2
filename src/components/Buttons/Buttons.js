import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import { globalStyles } from "../../index";
import styles from "./styles";
import {
  addProgramAction,
  editProgramAction
} from "../../actions/programActions";

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
    const { navigation, status, navEdit, navEditData } = this.props;
    const data = {
      id: navEdit ? navEditData.id : uuidv1(),
      title: status.programTitle === "" ? "Title" : status.programTitle,
      description:
        status.programDescription === ""
          ? "description"
          : status.programDescription,
      difficulty: status.difficulty === "" ? "#dedede" : status.difficulty
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
            navEdit
              ? this.props.editProgramAction(data)
              : this.props.addProgramAction(data);
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
    <View style={{ width: "30%", marginTop: 25 }}>
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
        borderRadius={5}
      />
    </View>
  );
};

export default connect(
  null,
  { addProgramAction, editProgramAction }
)(CompleteButton);
