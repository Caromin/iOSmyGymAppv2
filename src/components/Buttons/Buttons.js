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
  addWorkoutAction
} from "../../actions/programActions";

export const CreateProgram = ({ navigation }) => {
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

export const CreateWorkout = ({ navigation, navId }) => {
  return (
    <View style={styles.defaultView}>
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
      navWorkoutId
    } = this.props;
    const arrName = navWorkout ? "allExercises" : "workouts";
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
      [arrName]: []
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
              : navWorkout
                ? this.props.addWorkoutAction(data, navWorkoutId)
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
  { addProgramAction, editProgramAction, addWorkoutAction }
)(CompleteProgramButton);
