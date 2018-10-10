import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, ButtonGroup } from "react-native-elements";

import SaveButton from "../../components/Buttons/Save";
import global from "../../styles/styles";

const ProgramModal = ({
  status,
  onPress,
  id,
  createFunc,
  targetedObj,
  isEdit,
  createProgram,
  createWorkout
}) => {
  const difficultyButtons = ["EASY", "MEDIUM", "HARD"];
  const color = status.difficultyIndex;

  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Program Name:</FormLabel>
      <FormInput
        placeholder={isEdit ? targetedObj.title : "Shoulders Only"}
        onChangeText={value => {
          onPress(id[0], value);
        }}
      />
      <FormLabel>Description:</FormLabel>
      <FormInput
        placeholder={isEdit ? targetedObj.description : "4 days a week program"}
        onChangeText={value => {
          onPress(id[1], value);
        }}
      />
      <FormLabel>Difficulty:</FormLabel>
      <View style={{ paddingTop: 10 }}>
        <ButtonGroup
          buttons={difficultyButtons}
          selectedIndex={color}
          onPress={value => {
            onPress(id[2], value);
          }}
          selectedButtonStyle={
            color === 0
              ? global.greenBackground
              : color === 1
                ? global.yellowBackground
                : global.redBackground
          }
        />
      </View>
      <SaveButton
        isEdit={isEdit}
        targetedObj={targetedObj}
        onPress={createFunc}
      >
        {createWorkout ? "Save Workout" : "Save Program"}
      </SaveButton>
    </View>
  );
};

export default ProgramModal;
