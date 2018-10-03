import React from "react";
import { View, ScrollView } from "react-native";
import uuidv1 from "uuid/v1";
import { List, ListItem } from "react-native-elements";

import globalStyles from "../../../../styles";

const SearchResults = ({ state }) => {
  difficultyColor = () => {
    console.log("hi");
  };

  const postItems = state.resultsArr.map(obj => (
    <ListItem
      key={uuidv1()}
      roundAvatar
      avatar={{}}
      avatarContainerStyle={{ backgroundColor: "black" }}
      title={obj.title}
      subtitle={`${obj.muscleGroup}, est: ${obj.estimatedTime} mins`}
      subtitleStyle={globalStyles.defaultListItem}
      onPress={() => {
        console.log("working");
      }}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView alwaysBounceVertical={false}>
        <List containerStyle={{ marginTop: 1 }}>{postItems}</List>
      </ScrollView>
    </View>
  );
};

export default SearchResults;
