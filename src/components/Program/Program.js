import React from "react";
import { View } from "react-native";
import { List, ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

const Program = ({ programList, removeList }) => {
  // each object is a new button style
  const swipeoutBtns = id => {
    return [
      {
        text: "Delete",
        backgroundColor: "#d9534f",
        color: "#000",
        underlayColor: "rgba(217, 83, 79, 0.8)",
        onPress: () => {
          removeList(id);
        }
      }
    ];
  };

  const postItems = programList.map(obj => (
    <Swipeout key={obj.id} right={swipeoutBtns(obj.id)}>
      <ListItem
        roundAvatar
        avatar={{}}
        avatarContainerStyle={{ backgroundColor: obj.difficulty }}
        title={obj.title}
        subtitle={obj.description}
        subtitleStyle={{ fontSize: 12, fontWeight: "200", letterSpacing: 0.5 }}
        onPress={() => {
          console.log(obj.id);
        }}
      />
    </Swipeout>
  ));

  return (
    <View style={{ flex: 1 }}>
      <List containerStyle={{ marginBottom: 20 }}>{postItems}</List>
    </View>
  );
};

export default Program;
