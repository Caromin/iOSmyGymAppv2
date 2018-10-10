import React from "react";
import { View, Alert, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

import swipeoutBtn from "../../components/Buttons/SwipeoutBtn";
import global from "../../styles/styles";

const Program = ({
  programList,
  removeProgram,
  createWhat,
  editProgram,
  onPress
}) => {
  const postItems = programList.map(obj => (
    <Swipeout
      key={obj.id}
      autoClose={true}
      right={swipeoutBtn(obj, removeProgram, createWhat, editProgram)}
    >
      <ListItem
        roundAvatar
        avatar={{}}
        avatarContainerStyle={{ backgroundColor: obj.difficulty }}
        title={obj.title}
        subtitle={obj.description}
        subtitleStyle={global.defaultListItem}
        onPress={() => {
          onPress(obj);
        }}
      />
    </Swipeout>
  ));

  return (
    <View style={global.defaultScrollView}>
      <ScrollView alwaysBounceVertical={false}>
        <List containerStyle={global.defaultListMargin}>{postItems}</List>
      </ScrollView>
    </View>
  );
};

export default Program;
