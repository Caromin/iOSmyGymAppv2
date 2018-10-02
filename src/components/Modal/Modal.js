import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

import ProgramModal from "./ProgramModal/ProgramModal";
import HomeModal from "./HomeModal/HomeModal";
import HeaderModal from "./HeaderModal/HeaderModal";
import WorkoutModal from "./WorkoutModal/WorkoutModal";

const Modal = ({
  navEdit,
  navParam,
  navCreate,
  status,
  updateStateFunc,
  navigation,
  navEditData,
  navWorkout,
  navWorkoutId,
  navWorkoutEdit
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        <HeaderModal
          navEdit={navEdit}
          navigation={navigation}
          navWorkout={navWorkout}
          navWorkoutEdit={navWorkoutEdit}
        />
        {navCreate || navEdit ? (
          <ProgramModal
            navEditData={navEditData}
            navEdit={navEdit}
            navigation={navigation}
            status={status}
            updateStateFunc={updateStateFunc}
          />
        ) : navWorkout || navWorkoutEdit ? (
          <WorkoutModal
            navWorkoutEdit={navWorkoutEdit}
            navWorkoutId={navWorkoutId}
            navWorkout={navWorkout}
            navEditData={navEditData}
            navigation={navigation}
            status={status}
            updateStateFunc={updateStateFunc}
          />
        ) : (
          <HomeModal navParam={navParam} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
