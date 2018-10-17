import React from "react";
import { View, Image } from "react-native";

import DisplayStats from "../../components/Home/DisplayStats";
import DisplayBody from "../../components/Home/DisplayBody";

const Home = ({
  onPressed,
  weightId,
  personalWeight,
  caloriesBurned,
  totalWorkouts,
  weightChange
}) => {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <View style={{ alignItems: "center", flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row1.png")}
            selected={"Shoulders and Traps"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image1biceps1.png")}
            selected={"Biceps"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image2chest.png")}
            selected={"Chest"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image3biceps2.png")}
            selected={"Biceps"}
          />
          <View>
            <Image
              resizeMode="contain"
              source={require("../../images/row2image4home.png")}
            />
          </View>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image5triceps1.png")}
            selected={"Triceps"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image6back.png")}
            selected={"Back"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row2image7triceps2.png")}
            selected={"Triceps"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row3image1forearms1.png")}
            selected={"Forearms"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row3image2abdominals.png")}
            selected={"Abdominals"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row3image3forearms2.png")}
            selected={"Forearms"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row3image4glutes.png")}
            selected={"Glutes"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row3image5forearms3.png")}
            selected={"Forearms"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row4image2hamstrings.png")}
            selected={"Quads"}
          />
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row4image1quadriceps.png")}
            selected={"Hamstrings"}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <DisplayBody
            onPress={onPressed}
            imageSrc={require("../../images/row5image1calves.png")}
            selected={"Calves"}
          />
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
        <DisplayStats
          stat={personalWeight}
          Weightid={weightId}
          weightChange={weightChange}
        >
          Weight:
        </DisplayStats>
        <DisplayStats stat={totalWorkouts}>Total Workouts:</DisplayStats>
        <DisplayStats stat={caloriesBurned}>Calories Burned:</DisplayStats>
        <DisplayStats>Personal Bests:</DisplayStats>
      </View>
    </View>
  );
};

export default Home;
