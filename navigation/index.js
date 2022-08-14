import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab/TabNavigator";
import AuthNavigator from "./user/AuthNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const userId = useSelector(state => state.auth.userId)

  return (
    <NavigationContainer>
      {userId
        ? <TabNavigator />
        : <AuthNavigator />
      }
    </NavigationContainer>
  );
};

export default MainNavigator;