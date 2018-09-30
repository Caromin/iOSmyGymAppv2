import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

import CreateModal from "./CreateModal/CreateModal";
import HomeModal from "./HomeModal/HomeModal";

const Modal = ({ navParam, navCreate, status, update, navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        {navCreate ? (
          <CreateModal
            navigation={navigation}
            status={status}
            update={update}
          />
        ) : (
          <HomeModal navParam={navParam} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Modal;
