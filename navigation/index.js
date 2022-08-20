import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import TabNavigator from "./tab/TabNavigator";
import PlaceNavigator from "./place";

const MainNavigator = () => {

  return (
    <NavigationContainer>
      <PlaceNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;