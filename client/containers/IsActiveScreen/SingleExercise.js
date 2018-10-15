import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

import SaveButton from "../../components/Buttons/Save";
import global from "../../styles/styles";

class SingleExerciseContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: null,
      title: navigation.getParam("obj").title
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      objInfo: this.props.navigation.getParam("obj"),
      specificExerciseIndex: this.props.navigation.getParam("index"),
      currentReps: "0",
      currentWeight: "0",
      currentSet: 1,
      pendingSaveList: []
    };
    this.updateNumbers = this.updateNumbers.bind(this);
    this.addNewSet = this.addNewSet.bind(this);
    this.checkValue = this.checkValue.bind(this);
    this.submitToPending = this.submitToPending.bind(this);
    this.showPersistingData = this.showPersistingData.bind(this);
  }

  componentWillMount() {
    let replaceList = this.props.navigation.getParam("persistingList");
    if (replaceList.length !== 0) {
      const test = replaceList.find(index => {
        if (this.state.specificExerciseIndex === index.indexRef) {
          this.showPersistingData(index);
          return true;
        }
      });
      test === undefined ? this.addNewSet() : null;
    } else {
      this.addNewSet();
    }
  }

  showPersistingData = replaceList => {
    let list = replaceList.pendingList;
    let lastIndex = list.length - 1;

    this.setState({ pendingSaveList: list });
    this.setState({ currentSet: list.length + 1 });
    this.setState({ currentWeight: list[lastIndex].weight });
    this.setState({ currentReps: list[lastIndex].reps });
  };

  checkValue = (index, value, id) => {
    let newVal;
    if (value.charAt(0) !== "0") {
      this.updateNumbers(index, value, id);
    }
    if (value.charAt(0) === "0" && value.length > 1) {
      newVal = value.substring(1);
      this.updateNumbers(index, newVal, id);
    }
  };

  updateNumbers = async (index, value, id) => {
    const newArr = this.state.pendingSaveList.map(obj => {
      if (index.set === obj.set) {
        let newObj = {
          weight: id === "weight" ? value : index.weight,
          reps: id === "weight" ? index.reps : value,
          set: index.set
        };
        return newObj;
      } else {
        return obj;
      }
    });

    (await id) === "weight"
      ? this.setState({ currentWeight: value })
      : this.setState({ currentReps: value });
    await this.setState({ pendingSaveList: newArr });
  };

  addNewSet = async () => {
    let obj = {
      set: this.state.currentSet,
      weight: this.state.currentWeight,
      reps: this.state.currentReps
    };
    await this.setState({ currentSet: this.state.currentSet + 1 });
    await this.setState({
      pendingSaveList: [...this.state.pendingSaveList, obj]
    });
  };

  submitToPending = () => {
    let pendingObj = {
      pendingList: this.state.pendingSaveList,
      indexRef: this.state.specificExerciseIndex,
      title: this.state.objInfo.title,
      muscleGroup: this.state.objInfo.muscleGroup
    };

    this.props.navigation.navigate("IsActive", {
      isPending: true,
      pendingObj
    });
  };

  render() {
    const displayInfo = this.state.pendingSaveList.map(index => {
      return (
        <TouchableWithoutFeedback
          key={index.set}
          onPress={() => console.log("hello")}
        >
          <View style={{ height: 80, flexDirection: "row" }}>
            <View style={global.defaultSingleExercise}>
              <TextInput
                keyboardType="numeric"
                ref={this.textinputiscool}
                style={{ fontSize: 30 }}
                defaultValue={`${index.weight}`}
                onChangeText={value => (
                  (id = "weight"),
                  // this.updateNumbers(index, value, id)
                  this.checkValue(index, value, id)
                )}
              />
              <Text style={{ marginTop: 10, marginLeft: 5 }}>
                {this.props.weightIdSettings}
              </Text>
            </View>
            <View style={global.defaultSingleExercise}>
              <TextInput
                keyboardType="numeric"
                ref={this.textinputisnotcool}
                style={{ fontSize: 30 }}
                defaultValue={`${index.reps}`}
                onChangeText={
                  value => this.checkValue(index, value)
                  // this.updateNumbers(index, value)
                }
              />
              <Text style={{ marginTop: 10, marginLeft: 5 }}>reps</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    });

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={{ height: "80%" }}>
            {displayInfo}
            <View style={{ flexDirection: "row" }}>
              <Button
                large={false}
                onPress={() => {
                  this.addNewSet();
                }}
                title={"New Set"}
                containerViewStyle={{ width: "50%" }}
                buttonStyle={global.blueBackground}
              />
              <View
                style={{
                  width: "50%",
                  justifyContent: "center"
                }}
              >
                <Text>Personal Best: </Text>
              </View>
            </View>
          </View>
          <SaveButton onPress={this.submitToPending}>Done</SaveButton>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  weightIdSettings: state.settingsReducer.profile.weightId
});

export default connect(mapStateToProps)(SingleExerciseContainer);
