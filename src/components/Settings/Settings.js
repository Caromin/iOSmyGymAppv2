import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";
import { FormValidationMessage } from "react-native-elements";

// components
import FormButtons from "./FormButtons/FormButtons";
import FormInputs from "./FormInputs/FormInputs";
import { SaveButton } from "../Buttons/Buttons";
import styles from "./styles";

const Settings = ({
  updateSettingsFunc,
  updateErrMsgFunc,
  saveInputsFunc,
  status
}) => {
  const successAlert = status.successAlert;
  // flips it to the opposite, so to undisable the button in savebutton
  const buttonStatus = !status.isEdited;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{ flex: 1 }}>
        {successAlert ? (
          <FormValidationMessage
            containerStyle={styles.FormValidation}
            labelStyle={{ color: "white" }}
          >
            Successfully Saved!
          </FormValidationMessage>
        ) : null}
        <FormButtons status={status} updateSettingsFunc={updateSettingsFunc} />
        <FormInputs
          status={status}
          updateErrMsgFunc={updateErrMsgFunc}
          updateSettingsFunc={updateSettingsFunc}
        />
        <SaveButton
          buttonStatus={buttonStatus}
          saveInputsFunc={saveInputsFunc}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Settings;
