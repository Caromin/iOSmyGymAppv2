import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

import CreateModal from "./CreateModal/CreateModal";
import HomeModal from "./HomeModal/HomeModal";
import HeaderModal from "./HeaderModal/HeaderModal";

const Modal = ({
  navEdit,
  navParam,
  navCreate,
  status,
  updateStateFunc,
  navigation,
  navEditData
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        <HeaderModal navEdit={navEdit} navigation={navigation} />
        {navCreate || navEdit ? (
          <CreateModal
            navEditData={navEditData}
            navEdit={navEdit}
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
