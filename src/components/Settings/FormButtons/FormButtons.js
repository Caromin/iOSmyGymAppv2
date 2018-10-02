import React from "react";
import { View, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";

import globalStyles from "../../../styles";
import styles from "../styles";

const FormButtons = ({ status, updateSettingsFunc }) => {
  const distanceButtons = ["Miles", "Kilometers"];
  const weightButtons = ["Pounds", "Kilograms"];

  return (
    <View>
      <View style={styles.verticalMargins}>
        <Text style={globalStyles.defaultText}>Distance:</Text>
        <ButtonGroup
          buttons={distanceButtons}
          // this is to show which index is active
          selectedIndex={status.activeButtons.distanceBtn}
          onPress={index => {
            let id = "distanceBtn";
            let actionId = distanceButtons[index];
            updateSettingsFunc(id, index, actionId);
          }}
          selectedButtonStyle={globalStyles.redBackground}
        />
      </View>
      <View style={styles.verticalMargins}>
        <Text style={globalStyles.defaultText}>Weight:</Text>
        <ButtonGroup
          buttons={weightButtons}
          // this is to show which index is active
          selectedIndex={status.activeButtons.weightBtn}
          onPress={index => {
            let id = "weightBtn";
            let actionId = weightButtons[index];
            updateSettingsFunc(id, index, actionId);
          }}
          selectedButtonStyle={globalStyles.redBackground}
        />
      </View>
    </View>
  );
};

export default FormButtons;
