import React from "react";
import { View, ScrollView, Text } from "react-native";
import { ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

import swipeoutBtns from "../../components/Buttons/SwipeoutBtn";
import global from "../../styles/styles";

const Workout = ({
  programList,
  programId,
  createWhat,
  removeProgram,
  editProgram,
  onPress
}) => {
  // find the correct programlist with same id as navId for mapping
  const selectedProgram = programList.find(index => {
    if (index.id === programId) {
      return index;
    }
  });

  const workoutListArr = selectedProgram.workouts;
  const postWorkout = workoutListArr.map(obj => (
    <Swipeout
      key={obj.id}
      autoClose={true}
      right={swipeoutBtns(obj, removeProgram, createWhat, editProgram)}
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
      {workoutListArr.length === 0 ? (
        <View style={global.defaultEmptyPage}>
          <Text>Add a workout!</Text>
        </View>
      ) : (
        <ScrollView alwaysBounceVertical={false}>{postWorkout}</ScrollView>
      )}
    </View>
  );
};

export default Workout;
