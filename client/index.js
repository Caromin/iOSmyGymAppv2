import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import ModalContainer from "./components/Modal/Container";
import HomeContainer from "./containers/HomeScreen/Container";
import SettingsContainer from "./containers/SettingsScreen/Container";
import ProgramContainer from "./containers/ProgramScreen/ProgramContainer";
import WorkoutContainer from "./containers/ProgramScreen/WorkoutContainer";
import ExerciseListContainer from "./containers/ExerciseListScreen/Container";
import IsActiveContainer from "./containers/IsActiveScreen/Container";
import SingleExerciseContainer from "./containers/IsActiveScreen/SingleExercise";
import {
  getLocalTotalAction,
  getLocalExerciseAction
} from "./containers/IsActiveScreen/Actions";
import { localSettingsAction } from "./containers/SettingsScreen/Actions";

// seperate stack of 'cards' for each of the tab navigator
const HomeStack = createStackNavigator(
  {
    Home: HomeContainer
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#D63D41"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: "Helvetica",
        textShadowColor: "black",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 1
      }
    }
  }
);

const ProgramStack = createStackNavigator(
  {
    Programs: ProgramContainer,
    Workouts: WorkoutContainer,
    ExerciseList: ExerciseListContainer,
    IsActive: IsActiveContainer,
    SingleExercise: SingleExerciseContainer
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#C2AB82"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: "Helvetica",
        textShadowColor: "black",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 1
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsContainer
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#67013A"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: "Helvetica",
        textShadowColor: "black",
        textShadowOffset: { width: 3, height: 2 },
        textShadowRadius: 1
      }
    }
  }
);

// each stack is one tab point
const MainStack = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarColor: "#D63D41",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Programs: {
      screen: ProgramStack,
      navigationOptions: {
        tabBarColor: "#C2AB82",
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="dumbbell" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarColor: "#67013A",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: "Settings",
    order: ["Programs", "Home", "Settings"],
    shifting: true,
    activeTintColor: "#fff",
    inactiveTintColor: "#000"
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

class Root extends Component {
  constructor() {
    super();
    this.getStorageProgram = this.getStorageProgram.bind(this);
  }

  componentWillMount() {
    this.getStorageProgram();
  }

  getStorageProgram = () => {
    AsyncStorage.getItem("settings").then(value => {
      const completedList = JSON.parse(value);
      this.props.localSettingsAction(completedList);
    });
    AsyncStorage.getItem("totalNumber").then(value => {
      let parsedValue = parseInt(value);
      value === null ? null : this.props.getLocalTotalAction(parsedValue);
    });
    AsyncStorage.getItem("weeklyCompletedList").then(value => {
      // console.log(JSON.parse(value));
      let parsedObj = JSON.parse(value);
      value === null ? null : this.props.getLocalExerciseAction(parsedObj);
    });
  };

  render() {
    return <RootStack />;
  }
}

export default connect(
  null,
  { getLocalTotalAction, getLocalExerciseAction, localSettingsAction }
)(Root);
