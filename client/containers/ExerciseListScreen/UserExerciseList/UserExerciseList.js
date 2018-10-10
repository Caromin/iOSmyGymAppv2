import React from "react";
import { View, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import uuidv1 from "uuid/v1";

import global from "../../../styles/styles";

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
      subtitleStyle={global.defaultListItem}
      onPress={() => {}}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView alwaysBounceVertical={false}>
        <List containerStyle={global.defaultListMargin}>{postItems}</List>
      </ScrollView>
    </View>
  );
};

export default UserExerciseList;
