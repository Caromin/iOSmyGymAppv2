import React from "react";
import { View, Text, ScrollView } from "react-native";

import globalStyles from "../../styles";

const SelectedWorkout = ({ navigation, workoutId }) => {
  return (
    <View style={globalStyles.defaultScrollView}>
      <View style={globalStyles.defaultEmptyPage}>
        <Text>Start adding exercises!</Text>
      </View>
    </View>
  );
};

export default SelectedWorkout;
