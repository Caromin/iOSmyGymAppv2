import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, ButtonGroup } from "react-native-elements";

import CompleteButton from "../../Buttons/Buttons";
import { globalStyles } from "../../../index";

const CreateModal = ({ navEdit, status, navigation, update, navEditData }) => {
  const difficultyButtons = ["EASY", "MEDIUM", "HARD"];

  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Program Name:</FormLabel>
      <FormInput
        placeholder={navEdit ? navEditData.title : "Shoulders Only"}
        onChangeText={value => {
          const id = "programTitle";
          update(id, value);
        }}
      />
      <FormLabel>Description:</FormLabel>
      <FormInput
        placeholder={
          navEdit ? navEditData.description : "4 days a week program"
        }
        onChangeText={value => {
          const id = "programDescription";
          update(id, value);
        }}
      />
      <FormLabel>Difficulty:</FormLabel>
      <View style={{ paddingTop: 10 }}>
        <ButtonGroup
          buttons={difficultyButtons}
          // this is to show which index is active
          selectedIndex={status.difficultyId}
          onPress={indexNumber => {
            let actionParam = "difficulty";
            let actionId = indexNumber;
            update(actionParam, actionId);
          }}
          selectedButtonStyle={globalStyles.redBg}
        />
      </View>
      <CompleteButton
        navEdit={navEdit}
        navEditData={navEditData}
        navigation={navigation}
        status={status}
      />
    </View>
  );
};

export default CreateModal;
