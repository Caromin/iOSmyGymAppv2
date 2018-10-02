import React from "react";
import { View, ScrollView, Text } from "react-native";
import { ListItem } from "react-native-elements";
import Swipeout from "react-native-swipeout";

import globalStyles from "../../styles";

const ActiveWorkout = ({
  navId,
  programList,
  navigation,
  removeWorkoutAction
}) => {
  // each object is a new button style
  const swipeoutBtns = obj => {
    return [
      {
        text: "Edit",
        backgroundColor: "#337ab7",
        color: "#000",
        underlayColor: "rgba(51, 122, 183, 0.8)",
        onPress: () => {
          navigation.navigate("Modal", {
            workoutEditing: true,
            currentObj: obj,
            createWorkout: true
          });
        }
      },
      {
        text: "Delete",
        backgroundColor: "#d9534f",
        color: "#000",
        underlayColor: "rgba(217, 83, 79, 0.8)",
        onPress: () => {
          removeWorkoutAction(obj.id);
        }
      }
    ];
  };
  // find the correct programlist with same id as navId for mapping
  const selectedProgram = programList.find(index => {
    if (index.id === navId) {
      return index;
    }
  });
  const workoutListArr = selectedProgram.workouts;
  const postWorkout = workoutListArr.map(obj => (
    <Swipeout key={obj.id} autoClose={true} right={swipeoutBtns(obj)}>
      <ListItem
        roundAvatar
        avatar={{}}
        avatarContainerStyle={{ backgroundColor: obj.difficulty }}
        title={obj.title}
        subtitle={obj.description}
        subtitleStyle={globalStyles.defaultListItem}
        onPress={() => {
          navigation.navigate("SelectedWorkout", { id: obj.id });
        }}
      />
    </Swipeout>
  ));

  const scrollProps = {
    alwaysBounceVertical: false
  };
  return (
    <View style={globalStyles.defaultScrollView}>
      {workoutListArr.length === 0 ? (
        <View style={globalStyles.defaultEmptyPage}>
          <Text>Add a workout!</Text>
        </View>
      ) : (
        <ScrollView {...scrollProps}>{postWorkout}</ScrollView>
      )}
    </View>
  );
};

export default ActiveWorkout;
