import React from "react";
import { View, ScrollView, Text } from "react-native";
import { List, ListItem } from "react-native-elements";

import global from "../../styles/styles";

const IsActive = ({
  status,
  completedExercises,
  totalCompletedSets,
  onPressNav
}) => {
  const list = status.list.map((obj, index) => (
    <ListItem
      key={index}
      roundAvatar
      avatar={obj.avatarURL}
      title={obj.title}
      subtitle={`${obj.estimatedTime} mins`}
      subtitleStyle={global.defaultListItem}
      onPress={() => {
        onPressNav(obj, index);
      }}
    />
  ));
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "15%",
          paddingTop: 20,
          backgroundColor: "#000",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 40 }}>
          {status.currentHours === 0
            ? null
            : status.currentHours < 10
              ? `0${status.currentHours}:`
              : `${status.currentHours}:`}
          {status.currentMinutes < 10
            ? `0${status.currentMinutes}`
            : status.currentMinutes}
          :
          {status.currentSeconds < 10
            ? `0${status.currentSeconds}`
            : status.currentSeconds}
        </Text>
      </View>
      <View
        style={{ height: "5%", flexDirection: "row", backgroundColor: "#000" }}
      >
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white" }}>
            {totalCompletedSets} Completed Sets
          </Text>
        </View>{" "}
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white" }}>
            {completedExercises} Completed Exercises
          </Text>
        </View>
      </View>
      <View style={{ height: "60%", paddingTop: 10 }}>
        <ScrollView alwaysBounceVertical={false}>
          <List containerStyle={global.defaultListMargin}>{list}</List>
        </ScrollView>
      </View>
    </View>
  );
};

export default IsActive;
