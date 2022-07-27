import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryBreadScreen from '../screens/CategoryBreadScreen';
import BreadDetailScreen from '../screens/BreadDetailScreen';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Home" component={CategoriesScreen} options={{headerShown: false}} />
      <Stack.Screen name="Bread" component={CategoryBreadScreen} options={({route}) => ({headerTitle: route.params.category})} />
      <Stack.Screen name="Detail" component={BreadDetailScreen} options={({route}) => ({headerTitle: route.params.product})} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default ShopNavigator;