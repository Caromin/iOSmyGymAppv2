import EStyleSheet from "react-native-extended-stylesheet";

// cannot create premade objects, only variables
// always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({
  $defaultMainColor: "#000",
  $defaultGreen: "#5cb85c",
  $defaultRed: "#d9534f",
  $defaultBlue: "#337ab7",
  $defaultGold: "#FFDF00"
  // $outline: 1
});

const globalStyles = EStyleSheet.create({
  defaultText: {
    textAlign: "justify",
    fontSize: 16,
    color: "$defaultMainColor",
    paddingLeft: 10,
    fontWeight: "500"
  },
  defaultTextColor: {
    color: "#000"
  },
  redBackground: {
    backgroundColor: "$defaultRed"
  },
  greenBackground: {
    backgroundColor: "$defaultGreen"
  },
  blueBackground: {
    backgroundColor: "$defaultBlue"
  },
  yellowBackground: {
    backgroundColor: "$defaultGold"
  }
});

export default globalStyles;
