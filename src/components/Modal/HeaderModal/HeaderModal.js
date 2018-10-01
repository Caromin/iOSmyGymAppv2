import React from "react";
import { Header } from "react-native-elements";
import { ReturnButton, InfoButton } from "../../Buttons/Buttons";

const HeaderModal = ({ navigation, navEdit }) => {
  const passedTitle = navEdit ? "EDIT" : "CREATE";
  return (
    <Header
      backgroundColor={"#337ab7"}
      leftComponent={<ReturnButton navigation={navigation} />}
      centerComponent={{
        text: passedTitle,
        style: {
          color: "#000",
          fontSize: 20,
          paddingLeft: 14,
          height: "80%"
        }
      }}
      rightComponent={<InfoButton />}
    />
  );
};

export default HeaderModal;
