import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, ButtonGroup } from "react-native-elements";

import CompleteProgramButton from "../../Buttons/Buttons";
import globalStyles from "../../../styles";

const WorkoutModal = ({
  status,
  navigation,
  updateStateFunc,
  navEditData,
  navWorkout,
  navWorkoutId,
  navWorkoutEdit
}) => {
  const difficultyButtons = ["EASY", "MEDIUM", "HARD"];
  const color = status.difficultyId;

  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Workout Name:</FormLabel>
      <FormInput
        placeholder={navWorkoutEdit ? navEditData.title : "Back and Bi"}
        onChangeText={value => {
          const id = "programTitle";
          updateStateFunc(id, value);
        }}
      />
      <FormLabel>Description:</FormLabel>
      <FormInput
        placeholder={navWorkoutEdit ? navEditData.description : "Tuesday only"}
        onChangeText={value => {
          const id = "programDescription";
          updateStateFunc(id, value);
        }}
      />
      <FormLabel>Difficulty:</FormLabel>
      <View style={{ paddingTop: 10 }}>
        <ButtonGroup
          buttons={difficultyButtons}
          selectedIndex={status.difficultyId}
          onPress={index => {
            let id = "difficulty";
            updateStateFunc(id, index);
          }}
          selectedButtonStyle={
            color === 0
              ? globalStyles.greenBackground
              : color === 1
                ? globalStyles.yellowBackground
                : globalStyles.redBackground
          }
        />
      </View>
      <CompleteProgramButton
        navWorkout={navWorkout}
        navWorkoutEdit={navWorkoutEdit}
        navEditData={navEditData}
        navigation={navigation}
        status={status}
        navWorkoutId={navWorkoutId}
      />
    </View>
  );
};

export default WorkoutModal;
