import React from "react";
import { View, Text } from "react-native";

import global from "../../styles/styles";

const DisplayStats = ({ children, stat, Weightid, weightChange }) => {
  return (
    <View style={{ width: "50%", paddingBottom: 20, paddingLeft: 15 }}>
      <Text style={[global.defaultWhiteText, global.shadow]}>
        {children} {stat === undefined ? 0 : stat}{" "}
        {Weightid === undefined ? null : Weightid}{" "}
        {weightChange === undefined ? null : weightChange > 0 ? (
          <Text style={{ color: "#F46F29" }}>
            &uarr; {Math.abs(weightChange)} {Weightid}
          </Text>
        ) : weightChange < 0 ? (
          <Text style={{ color: "#0083D3" }}>
            &darr; {Math.abs(weightChange)} {Weightid}
          </Text>
        ) : (
          <Text>-</Text>
        )}
      </Text>
    </View>
  );
};

export default DisplayStats;
