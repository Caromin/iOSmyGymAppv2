import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

class SingleExerciseContainer extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("obj").title
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      objInfo: this.props.navigation.getParam("obj"),
      currentSetSelected: 0,
      currentWeight: 0,
      list: [],
      isFocused: false,
      currentIndex: 0
    };
    this.addSet = this.addSet.bind(this);
  }

  componentWillMount() {
    this.addSet();
  }

  addSet = () => {
    newObj = (
      <TouchableHighlight
        key={this.state.currentIndex}
        onPress={() => console.log("hello")}
      >
        <View style={{ height: 80, flexDirection: "row" }}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TextInput
              ref={this.textinputiscool}
              style={{ fontSize: 30 }}
              defaultValue={`${this.state.currentWeight}`}
              onChangeText={value => this.setState({ currentWeight: value })}
            />
            <Text>{this.props.weightIdSettings}</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TextInput
              ref={this.textinputisnotcool}
              style={{ fontSize: 30 }}
              defaultValue={`${this.state.currentSetSelected}`}
              onChangeText={text => this.setState({ text })}
            />
          </View>
        </View>
      </TouchableHighlight>
    );

    this.setState({ currentIndex: this.state.currentIndex + 1 });
    this.setState({ list: [...this.state.list, newObj] });
  };

  render() {
    const { navigation } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1 }}>
          <View style={{ height: "80%" }}>
            {this.state.list}
            <View>
              <Button
                large={false}
                onPress={() => {
                  this.addSet();
                }}
                title={"add more"}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  weightIdSettings: state.settingsReducer.profile.weightId
});

export default connect(mapStateToProps)(SingleExerciseContainer);
