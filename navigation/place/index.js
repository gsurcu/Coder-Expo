import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../../constants/colors";

import PlaceListScreen from "../../screens/PlaceListScreen";
import NewPlaceScreen from "../../screens/NewPlaceScreen";
const PlaceStack = createNativeStackNavigator();

const PlaceNavigator = () => (
  <PlaceStack.Navigator
    initialRouteName="Place"
    screenOptions={{ 
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.DARK_SIENNA : '',
      },
      headerTintColor: Platform.OS === "android" ? 'white' : COLORS.DARK_SIENNA,
      headerTitleStyle: {
        fontWeight: "bold",
      }
    }}
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
              size={24}
            />
          </TouchableOpacity>
        )
      })}
    />
    <PlaceStack.Screen 
      name="Nuevo"
      component={NewPlaceScreen}
      options={{title: 'Nueva direccion'}}
    />
  </PlaceStack.Navigator>
);

export default PlaceNavigator;