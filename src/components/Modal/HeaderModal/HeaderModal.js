import React from "react";
import { Header } from "react-native-elements";
import { ReturnButton, InfoButton } from "../../Buttons/Buttons";

const HeaderModal = ({ navigation, navEdit, navWorkout, navWorkoutEdit }) => {
  const passedTitle = navEdit
    ? "EDIT PROGRAM"
    : navWorkoutEdit
      ? "EDIT WORKOUT"
      : navWorkout
        ? "CREATE WORKOUT"
        : "CREATE PROGRAM";
  return (
    <Header
      backgroundColor={"#337ab7"}
      leftComponent={<ReturnButton navigation={navigation} />}
      centerComponent={{
        text: passedTitle,
        style: {
          color: "#000",
          fontSize: 18,
          paddingLeft: 14,
          height: "80%",
          fontWeight: "600"
        }
      }}
      rightComponent={<InfoButton />}
    />
  );
};

export default HeaderModal;
