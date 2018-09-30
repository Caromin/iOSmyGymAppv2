import React from "react";
import { View, Alert, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

const Program = ({ programList, removeList, navigation }) => {
  // each object is a new button style
  const swipeoutBtns = obj => {
    return [
      {
        text: "Edit",
        backgroundColor: "#337ab7",
        color: "#000",
        underlayColor: "rgba(51, 122, 183, 0.8)",
        onPress: () => {
          navigation.navigate("Modal", { editing: true, currentObj: obj });
        }
      },
      {
        text: "Delete",
        backgroundColor: "#d9534f",
        color: "#000",
        underlayColor: "rgba(217, 83, 79, 0.8)",
        onPress: () => {
          Alert.alert("Confirm", `You sure you want to delete ${obj.title}?`, [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "Delete",
              onPress: () => removeList(obj.id)
            }
          ]);
        }
      }
    ];
  };

  const postItems = programList.map(obj => (
    <Swipeout key={obj.id} autoClose={true} right={swipeoutBtns(obj)}>
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

  const scrollProps = {
    alwaysBounceVertical: false
  };
  return (
    <View style={{ height: "80%", paddingTop: 10 }}>
      <ScrollView {...scrollProps}>
        <List>{postItems}</List>
      </ScrollView>
    </View>
  );
};

export default Program;
