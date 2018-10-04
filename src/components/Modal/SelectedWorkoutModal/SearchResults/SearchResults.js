import React from "react";
import { View, ScrollView, Text } from "react-native";
import uuidv1 from "uuid/v1";
import { List, ListItem } from "react-native-elements";

import globalStyles from "../../../../styles";

const SearchResults = ({ state, saveDataToWorkout }) => {
  difficultyColor = () => {
    console.log("hi");
  };

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
      subtitleStyle={globalStyles.defaultListItem}
      onPress={() => {}}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView alwaysBounceVertical={false}>
        <List containerStyle={globalStyles.defaultListMargin}>{postItems}</List>
      </ScrollView>
      {/* <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          height: 50,
          width: 50,
          backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>+</Text>
      </View> */}
    </View>
  );
};

export default SearchResults;
