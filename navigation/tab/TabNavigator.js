import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    <BottomTabs.Screen 
      name="Location"
      component={PlaceNavigator}
      options={{
        tabBarIcon: ({focused}) => (
          <View style={styles.item}>
            <Ionicons name="location-outline" size={24} color={focused ? "blue" : "black"} />
            <Text style={{color: focused ? "blue" : "black"}}>Location</Text>
          </View>
        )
      }}
    />
  </BottomTabs.Navigator>
)

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default TabNavigator;