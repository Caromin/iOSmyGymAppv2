import React from "react";
import { View, Text, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FormLabel, FormInput } from "react-native-elements";

import CompleteButton from "../Buttons/Buttons";

const Modal = ({ navParam, navCreate, status, update, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        {navCreate ? (
          <View style={{ flex: 1 }}>
            <FormLabel>Program Name:</FormLabel>
            <FormInput
              placeholder={"Shoulders Only"}
              onChangeText={value => {
                const id = "programName";
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
            <CompleteButton navigation={navigation} status={status} />
          </View>
        ) : (
          <Text>Currently Selected: {navParam}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
