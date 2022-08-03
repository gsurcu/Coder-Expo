import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

import CategoriesScreen from '../../screens/CategoriesScreen';
import CategoryBreadScreen from '../../screens/CategoryBreadScreen';
import BreadDetailScreen from '../../screens/BreadDetailScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <Stack.Navigator initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <Stack.Screen 
      name="Home" 
      component={CategoriesScreen} 
      options={{headerShown: true}} 
    />
    <Stack.Screen 
      name="Products" 
      component={CategoryBreadScreen} 
      options={({ route }) => ({
        title: route.params.name
        })} 
    />
    <Stack.Screen 
      name="Detail" 
      component={BreadDetailScreen} 
      options={({ route }) => ({
        title: route.params.name
      })}
    />
  </Stack.Navigator>
)

export default ShopNavigator;