import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import uuidv1 from "uuid/v1";

import globalStyles from "../../styles";
import styles from "./styles";
import {
  addProgramAction,
  editProgramAction,
  addWorkoutAction,
  editWorkoutAction
} from "../../actions/programActions";

export const AddWorkout = ({ navigation, selectedWorkoutId }) => {
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
      onPress={() =>
        navigation.navigate("Modal", {
          selectedWorkout: true,
          selectedWorkoutId: selectedWorkoutId
        })
      }
    />
  );
};

export const BeginWorkout = ({ navigation, workoutId }) => {
  return (
    <View style={styles.defaultButtonBot}>
      <Button
        large
        buttonStyle={globalStyles.redBackground}
        textStyle={globalStyles.defaultTextColor}
        icon={{
          name: "directions-run",
          color: "black"
        }}
        onPress={() => {
          console.log("component not installed");
        }}
        title="Start Workout"
      />
    </View>
  );
};

export const SaveWorkoutList = ({ navigation, workoutId }) => {
  return (
    <View style={styles.defaultButtonBot}>
      <Button
        large
        buttonStyle={globalStyles.redBackground}
        textStyle={globalStyles.defaultTextColor}
        icon={{
          name: "save",
          type: "entypo",
          color: "#000"
        }}
        onPress={() => {
          console.log("component not installed");
        }}
        title="Save List"
      />
    </View>
  );
};

export const CreateProgram = ({ navigation }) => {
  return (
    <View style={styles.defaultButtonBot}>
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

export const CreateWorkout = ({ navigation, navId }) => {
  return (
    <View style={styles.defaultButtonBot}>
      <Button
        large
        buttonStyle={globalStyles.blueBackground}
        textStyle={globalStyles.defaultTextColor}
        icon={{
          name: "dumbbell",
          type: "material-community",
          color: "black"
        }}
        onPress={() =>
          navigation.navigate("Modal", { createWorkout: true, navId: navId })
        }
        title="Add Workout"
      />
    </View>
  );
};

class CompleteProgramButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      navigation,
      status,
      navEdit,
      navEditData,
      navWorkout,
      navWorkoutId,
      navWorkoutEdit
    } = this.props;
    const data = {
      id: navEdit || navWorkoutEdit ? navEditData.id : uuidv1(),
      title:
        status.programTitle === "" && (navEdit || navWorkoutEdit)
          ? navEditData.title
          : status.programTitle === ""
            ? "Empty Title"
            : status.programTitle,
      description:
        status.programDescription === "" && (navEdit || navWorkoutEdit)
          ? navEditData.description
          : status.programDescription === ""
            ? "description"
            : status.programDescription,
      difficulty: status.difficulty === "" ? "#dedede" : status.difficulty,
      workouts: []
    };
    return (
      <View style={styles.defaultButtonBot}>
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
            navWorkoutEdit && navWorkout
              ? this.props.editWorkoutAction(data, navWorkoutId)
              : navWorkout
                ? this.props.addWorkoutAction(data, navWorkoutId)
                : navEdit
                  ? this.props.editProgramAction(data)
                  : this.props.addProgramAction(data);
            navigation.goBack();
          }}
          title={navEdit ? "Save Edit" : "Complete"}
        />
      </View>
    );
  }
}

export const SaveButton = ({ buttonStatus, saveInputsFunc }) => {
  return (
    <View style={styles.defaultButtonBot}>
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
  { addProgramAction, editProgramAction, addWorkoutAction, editWorkoutAction }
)(CompleteProgramButton);
