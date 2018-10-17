import EStyleSheet from "react-native-extended-stylesheet";

// cannot create premade objects, only variables
// always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({
  $defaultMainColor: "#0e1111",
  $defaultGreen: "#5cb85c",
  $defaultRed: "#D63D41",
  $defaultBlue: "#337ab7",
  $defaultGold: "#FFD700"
  // $outline: 1
});

const global = EStyleSheet.create({
  defaultWhiteText: {
    textAlign: "justify",
    fontSize: 16,
    color: "white",
    paddingLeft: 10,
    fontWeight: "500"
  },
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
  purpleBackground: {
    backgroundColor: "#67013A"
  },
  blackBackground: {
    backgroundColor: "#0e1111"
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
  },
  defaultFormMargin: {
    marginTop: 10,
    marginBottom: 10
  },
  defaultAbsoluteButton: {
    position: "absolute",
    bottom: 10,
    width: "100%"
  },
  selectedWorkoutScroll: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid"
  },
  defaultSingleExercise: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  shadow: {
    fontSize: 15,
    fontFamily: "Helvetica",
    textShadowColor: "#585858",
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 1
  }
});

export default global;
