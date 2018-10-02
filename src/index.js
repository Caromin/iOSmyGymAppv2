import React, { Component } from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as firebase from "firebase";

// components
import HomeContainer from "./components/Home/HomeContainer";
import ProgramContainer from "./components/Program/ProgramContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import ModalContainer from "./components/Modal/ModalContainer";
import ApiKeys from "./apiKeys/ApiKeys";
import ActiveWorkoutContainer from "./components/ActiveWorkout/ActiveWorkoutContainer";

const options = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};

export const globalStyles = EStyleSheet.create({
  defaultText: {
    textAlign: "justify",
    fontSize: 16,
    color: "black",
    paddingLeft: 10,
    fontWeight: "500"
  },
  redBg: {
    backgroundColor: "red"
  },
  verticalMargins: {
    marginTop: 10,
    marginBottom: 10
  },
  redButton: {
    backgroundColor: "red"
  },
  greenButton: {
    backgroundColor: "green"
  },

  blueButton: {
    backgroundColor: "blue"
  }
});

// seperate stack of 'cards' for each of the tab navigator
const HomeStack = createStackNavigator(
  {
    Home: HomeContainer
  },
  options
);

const ProgramStack = createStackNavigator(
  {
    Programs: ProgramContainer,
    ActiveWorkouts: ActiveWorkoutContainer
  },
  options
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsContainer
  },
  options
);

// each stack is one tab point
const MainStack = createBottomTabNavigator(
  {
    Programs: ProgramStack,
    Home: HomeStack,
    Settings: SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: "Home",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        // requires outline because of the focus/active object
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-options${focused ? "" : "-outline"}`;
        } else if (routeName === "Programs") {
          iconName = `ios-star${focused ? "" : "-outline"}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "#f4511e",
      inactiveTintColor: "#000000"
    }
  }
);

// modal container config
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

export class Root extends Component {
  constructor() {
    super();
    // if length is 0 which is false, which ! makes into true
    if (!firebase.apps.length) {
      firebase.initializeApp(ApiKeys.FirebaseConfig);
    }
  }

  render() {
    return <RootStack />;
  }
}
