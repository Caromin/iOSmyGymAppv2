import React from "react";
import { View, Text, ScrollView } from "react-native";

import globalStyles from "../../styles";

const SelectedWorkout = ({ navigation }) => {
  return (
    <View style={globalStyles.defaultScrollView}>
      <View style={globalStyles.defaultEmptyPage}>
        <Text>Begin your exercise program!</Text>
      </View>
    </View>
  );
};

export default SelectedWorkout;
