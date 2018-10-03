import React from "react";
import { View, ScrollView } from "react-native";
import uuidv1 from "uuid/v1";
import { List, ListItem } from "react-native-elements";

import globalStyles from "../../../../styles";

const UserExerciseList = ({ state, removeFromArr }) => {
  const postItems = state.pendingSavedArr.map(obj => (
    <ListItem
      key={uuidv1()}
      roundAvatar
      avatar={obj.avatarURL}
      rightIcon={{
        name: "minus-square",
        color: "#d9534f",
        type: "font-awesome"
      }}
      onPressRightIcon={() => {
        removeFromArr(obj);
      }}
      avatarContainerStyle={{ backgroundColor: "black" }}
      title={obj.title}
      subtitle={`Difficulty: ${obj.difficulty}, ${obj.muscleGroup}`}
      subtitleStyle={globalStyles.defaultListItem}
      onPress={() => {}}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView alwaysBounceVertical={false}>
        <List containerStyle={globalStyles.defaultListMargin}>{postItems}</List>
      </ScrollView>
    </View>
  );
};

export default UserExerciseList;
