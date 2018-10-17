import React from "react";
import { View, ScrollView } from "react-native";
import uuidv1 from "uuid/v1";
import { List, ListItem } from "react-native-elements";

import global from "../../../styles/styles";

const SearchResults = ({ state, saveDataToWorkout }) => {
  const postItems = state.resultsArr.map(obj => (
    <ListItem
      key={uuidv1()}
      roundAvatar
      avatar={obj.avatarURL}
      rightIcon={{
        name: "plus-box-outline",
        color: "#000",
        type: "material-community"
      }}
      onPressRightIcon={() => {
        saveDataToWorkout(obj);
      }}
      disabled={false}
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

export default SearchResults;
