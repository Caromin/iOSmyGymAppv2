import React from "react";
import { View } from "react-native";
import { FormLabel, FormInput, ButtonGroup } from "react-native-elements";

import CompleteButton from "../../Buttons/Buttons";
import { globalStyles } from "../../../index";

const CreateModal = ({ status, navigation, update }) => {
  const difficultyButtons = ["EASY", "MEDIUM", "HARD"];
  return (
    <View style={{ flex: 1 }}>
      <FormLabel>Program Name:</FormLabel>
      <FormInput
        placeholder={"Shoulders Only"}
        onChangeText={value => {
          const id = "programTitle";
          console.log(value);
          update(id, value);
        }}
      />
      <FormLabel>Description:</FormLabel>
      <FormInput
        placeholder={"4 days a week program"}
        onChangeText={value => {
          const id = "programDescription";
          update(id, value);
        }}
      />
      <View style={{ paddingTop: 20 }}>
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
      <CompleteButton navigation={navigation} status={status} />
    </View>
  );
};

export default CreateModal;
