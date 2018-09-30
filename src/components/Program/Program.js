import React from "react";
import { View, Text } from "react-native";
import { List, ListItem } from "react-native-elements";

import { globalStyles } from "../../index";

const Program = ({ add, programList }) => {
  const postItems = programList.map(obj => (
    <ListItem
      roundAvatar
      avatar={{}}
      avatarContainerStyle={{ backgroundColor: "#d9534f" }}
      key={obj.title}
      title={obj.title}
      subtitle={obj.description}
      onPress={() => {
        console.log("no functions");
      }}
    />
  ));

  return (
    <View style={{ flex: 1 }}>
      <List containerStyle={{ marginBottom: 20 }}>{postItems}</List>
    </View>
  );
};

export default Program;
