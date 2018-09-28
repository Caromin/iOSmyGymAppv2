import React from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";

import styles from "./styles";
import { globalStyles } from "../../index";

// if stateless function pass props via object brackets {} to access
const Home = ({
  onPressed,
  status,
  weightProp,
  personalWeight,
  caloriesBurned
}) => {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => {
              const part = "Shoulder and Traps";
              onPressed(part);
            }}
          >
            <Image resizeMode="contain" source={require("./images/row1.png")} />
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => {
              const part = "Biceps";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image1biceps1.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Chest";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image2chest.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Biceps";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image3biceps2.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Home";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image4home.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Triceps";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image5triceps1.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Back";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image6back.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Triceps";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row2image7triceps2.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => {
              const part = "Forearms";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row3image1forearms1.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Abdominals";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row3image2abdominals.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Forearms";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row3image3forearms2.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Glutes";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row3image4glutes.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Forearms";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row3image5forearms3.png")}
            />
          </TouchableHighlight>
          */}
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => {
              const part = "Quads";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row4image2hamstrings.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              const part = "Hamstrings";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row4image1quadriceps.png")}
            />
          </TouchableHighlight>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableHighlight
            onPress={() => {
              const part = "Calves";
              onPressed(part);
            }}
          >
            <Image
              resizeMode="contain"
              source={require("./images/row5image1calves.png")}
            />
          </TouchableHighlight>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100%"
        }}
      >
        <View
          style={{
            width: "50%",
            justifyContent: "center"
          }}
        >
          <Text style={globalStyles.defaultText}>
            Current Weight:{" "}
            <Text>
              {personalWeight}
              &nbsp;
              {weightProp}
            </Text>
            {"\n"}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={globalStyles.defaultText}>
            Total Workouts: <Text>{status.workouts}</Text>
            {"\n"}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={globalStyles.defaultText}>
            Calories Burned: <Text> {caloriesBurned}</Text>
            {"\n"}
          </Text>
        </View>
        <View style={{ width: "50%" }}>
          <Text style={globalStyles.defaultText}>
            Personal Bests: <Text>{status.records}</Text>
            {"\n"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
