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
  },
  defaultScrollView: {
    height: "80%",
    paddingTop: 10
  },
  defaultEmptyPage: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
  defaultListItem: {
    fontSize: 12,
    fontWeight: "200",
    letterSpacing: 0.5
  },
  defaultListMargin: {
    marginTop: 1
  }
});

export default globalStyles;
