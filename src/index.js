import React, { Component } from "react";
import { View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { createStackNavigator } from "react-navigation";

// components
import HomeContainer from "./components/Home/HomeContainer";
import ProgramContainer from "./components/Program/ProgramContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import ModalContainer from "./components/Modal/ModalContainer";

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $defaultTextColor: "#fff",
  $successTextColor: "#5cb85c",
  $dangerTextColor: "#d9534f",
  $verySuccessTextColor: "#FFD700"
});

const MainStack = createStackNavigator(
  {
    Home: HomeContainer,
    Program: ProgramContainer,
    Settings: SettingsContainer
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    Modal: {
      screen: ModalContainer
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default class Root extends Component {
  render() {
    return <RootStack />;
  }
}
