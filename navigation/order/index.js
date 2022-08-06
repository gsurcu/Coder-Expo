import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../../constants/colors";

import OrderScreen from "../../screens/OrderScreen";

const Stack = createNativeStackNavigator()

const OrderNavigator = () => (
  <Stack.Navigator
    initialRouteName="Order"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}
  >
    <Stack.Screen 
      name="Order"
      component={OrderScreen}
      options={{title: 'Order'}}
    />
  </Stack.Navigator>
);

export default OrderNavigator;