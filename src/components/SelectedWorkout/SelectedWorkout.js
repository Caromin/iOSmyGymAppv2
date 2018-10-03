import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import uuidv1 from "uuid/v1";
import Swipeout from "react-native-swipeout";

import globalStyles from "../../styles";

const SelectedWorkout = ({ navigation, list, workoutId, remove }) => {
  // each object is a new button style
  const swipeoutBtns = obj => {
    return [
      {
        text: "Delete",
        backgroundColor: "#d9534f",
        color: "#000",
        underlayColor: "rgba(217, 83, 79, 0.8)",
        onPress: () => {
          remove(obj, workoutId);
        }
      }
    ];
  };

  const exerciseItems = list.map(obj => {
    return (
      <Swipeout key={uuidv1()} autoClose={true} right={swipeoutBtns(obj)}>
        <ListItem
          roundAvatar
          avatar={obj.avatarURL}
          title={obj.title}
          subtitle={obj.difficulty}
          subtitleStyle={globalStyles.defaultListItem}
          onPress={() => {}}
        />
      </Swipeout>
    );
  });

  return (
    <View style={globalStyles.defaultScrollView}>
      {list.length === 0 ? (
        <View style={globalStyles.defaultEmptyPage}>
          <Text>Start Adding Exercises!</Text>
        </View>
      ) : (
        <ScrollView alwaysBounceVertical={false}>{exerciseItems}</ScrollView>
      )}
    </View>
  );
};

export default SelectedWorkout;
