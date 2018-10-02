import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import globalStyles from "../../styles";
import styles from "./styles";
import {
  addProgramAction,
  editProgramAction
} from "../../actions/programActions";

export const CreateButton = ({ navigation }) => {
  return (
    <View style={styles.defaultView}>
      <Button
        large
        buttonStyle={globalStyles.blueBackground}
        textStyle={globalStyles.defaultTextColor}
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
      title:
        status.programTitle === "" && navEdit
          ? navEditData.title
          : status.programTitle === ""
            ? "Empty Title"
            : status.programTitle,
      description:
        status.programDescription === "" && navEdit
          ? navEditData.description
          : status.programDescription === ""
            ? "description"
            : status.programDescription,
      difficulty: status.difficulty === "" ? "#dedede" : status.difficulty,
      workouts: []
    };
    return (
      <View style={styles.defaultView}>
        <Button
          large
          buttonStyle={globalStyles.greenBackground}
          textStyle={globalStyles.defaultTextColor}
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
          title={navEdit ? "Save Edit" : "Complete"}
        />
      </View>
    );
  }
}

export const SaveButton = ({ buttonStatus, saveInputsFunc }) => {
  return (
    <View style={styles.defaultView}>
      <Button
        large
        buttonStyle={globalStyles.redBackground}
        textStyle={globalStyles.defaultTextColor}
        icon={{
          name: "save",
          type: "entypo",
          color: "#000"
        }}
        disabled={buttonStatus}
        onPress={() => saveInputsFunc()}
        title="Save"
      />
    </View>
  );
};

export const ReturnButton = ({ navigation }) => {
  return (
    <Button
      onPress={() => navigation.goBack()}
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
};

export const InfoButton = () => {
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
};

export default connect(
  null,
  { addProgramAction, editProgramAction }
)(CompleteButton);
