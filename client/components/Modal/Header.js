import React from "react";
import { Header } from "react-native-elements";

import ReturnButton from "../Buttons/Return";
import InfoButton from "../Buttons/Headers/Info";

const HeaderModal = ({
  goBackFunc,
  createProgram,
  selectedBodyPart,
  isEdit,
  createWorkout,
  specificWorkoutBool
}) => {
  const passedTitle = specificWorkoutBool
    ? "Add Exercises"
    : isEdit && createWorkout
      ? "Editing Workout"
      : createWorkout
        ? "Creating Workout"
        : isEdit && createProgram
          ? "Editing Program"
          : createProgram
            ? "Creating Program"
            : selectedBodyPart
              ? `Exercises for ${selectedBodyPart}`
              : "Error: No Title Passed";

  return (
    <Header
      backgroundColor={"#337ab7"}
      leftComponent={<ReturnButton onPress={goBackFunc} />}
      centerComponent={{
        text: passedTitle,
        style: {
          color: "#000",
          fontSize: 16,
          paddingTop: 5,
          paddingLeft: 10,
          height: "80%",
          fontWeight: "600"
        }
      }}
      rightComponent={<InfoButton />}
    />
  );
};

export default HeaderModal;
