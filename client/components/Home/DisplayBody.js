import React from "react";
import { TouchableHighlight, Image } from "react-native";

const DisplayBody = ({ onPress, imageSrc, selected }) => {
  return (
    <TouchableHighlight
      onPress={() => {
        const part = selected;
        onPress(part);
      }}
    >
      <Image resizeMode="contain" source={imageSrc} />
    </TouchableHighlight>
  );
};

export default DisplayBody;
