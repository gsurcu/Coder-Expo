import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import PlaceListScreen from "../../screens/PlaceListScreen";
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../../constants/colors";

const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => (
  <PlaceStack.Navigator
    initialRouteName="Auth"
    screenOptions={{ headerShown: false }}
  >
    <PlaceStack.Screen 
      name="Direcciones" 
      component={PlaceListScreen} 
      options={({navigation}) => ({
        title: 'Direcciones',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
            <Ionicons 
              name="md-add"
              color={Platform.OS === "android" ? "white" : COLORS.DARK_SIENNA}
              size={23}
            />
          </TouchableOpacity>
        )
      })}
    />
  </PlaceStack.Navigator>
);

export default PlaceNavigator;