import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import ModalContainer from "./components/Modal/Container";
import HomeContainer from "./containers/HomeScreen/Container";
import SettingsContainer from "./containers/SettingsScreen/Container";
import ProgramContainer from "./containers/ProgramScreen/ProgramContainer";
import WorkoutContainer from "./containers/ProgramScreen/WorkoutContainer";
import ExerciseListContainer from "./containers/ExerciseListScreen/Container";
// import IsActiveContainer from "./components/IsActive/IsActiveContainer";
// import SingleExercise from './components/IsActive/SingleExercise';

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
    Workouts: WorkoutContainer,
    ExerciseList: ExerciseListContainer
    // IsActive: IsActiveContainer,
    // SingleExercise: SingleExercise
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
  }

  render() {
    return <RootStack />;
  }
}
