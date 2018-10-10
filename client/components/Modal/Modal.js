import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

// import ProgramModal from "./ProgramModal/ProgramModal";
import HomeModal from "../../containers/HomeScreen/Modal";
import ProgramModal from "../../containers/ProgramScreen/Modal";
import ExerciseModal from "../../containers/ExerciseListScreen/Modal";
import HeaderModal from "./Header";
// import SelectedWorkoutModal from "./SelectedWorkoutModal/SelectedWorkoutModal";

const Modal = ({
  selectedBodyPart,
  createProgram,
  status,
  goBackFunc,
  updateStateFunc,
  createFunc,
  isEdit,
  targetedObj,
  createWorkout,
  specificWorkoutBool,
  specificWorkoutId,
  navigation
}) => {
  console.log("test", navigation);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        {/* Below are all booleans to determine the name of the header title */}
        <HeaderModal
          createProgram={createProgram}
          goBackFunc={goBackFunc}
          selectedBodyPart={selectedBodyPart}
          isEdit={isEdit}
          createWorkout={createWorkout}
          specificWorkoutBool={specificWorkoutBool}
        />
        {/* Below is used for both Program & Workout Modals (Found in Modals in ProgramScreen ) */}
        {specificWorkoutBool ? (
          <ExerciseModal
            specificWorkoutId={specificWorkoutId}
            navigation={navigation}
          />
        ) : createProgram || createWorkout || isEdit ? (
          <ProgramModal
            status={status}
            id={["programTitle", "programDescription", "difficulty"]}
            createProgram={createProgram}
            createWorkout={createWorkout}
            onPress={updateStateFunc}
            createFunc={createFunc}
            isEdit={isEdit}
            targetedObj={targetedObj}
          />
        ) : (
          <HomeModal selectedBodyPart={selectedBodyPart} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
