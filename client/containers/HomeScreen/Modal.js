import React from "react";
import { View, Text } from "react-native";

import global from "../../styles/styles";

const HomeModal = ({ selectedBodyPart }) => {
  return (
    <View style={global.defaultEmptyPage}>
      <Text>Currently Selected: {selectedBodyPart}</Text>;
    </View>
  );
};

export default HomeModal;
