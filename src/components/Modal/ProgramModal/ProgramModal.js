import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, ButtonGroup } from "react-native-elements";

import CompleteProgramButton from "../../Buttons/Buttons";
import globalStyles from "../../../styles";

const ProgramModal = ({
  navEdit,
  status,
  navigation,
  updateStateFunc,
  navEditData
}) => {
  const difficultyButtons = ["EASY", "MEDIUM", "HARD"];
  const color = status.difficultyId;

  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Program Name:</FormLabel>
      <FormInput
        placeholder={navEdit ? navEditData.title : "Shoulders Only"}
        onChangeText={value => {
          const id = "programTitle";
          updateStateFunc(id, value);
        }}
      />
      <FormLabel>Description:</FormLabel>
      <FormInput
        placeholder={
          navEdit ? navEditData.description : "4 days a week program"
        }
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
        navEdit={navEdit}
        navEditData={navEditData}
        navigation={navigation}
        status={status}
      />
    </View>
  );
};

export default ProgramModal;
