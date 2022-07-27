import React from 'react';
import { StyleSheet, View } from 'react-native-web';
import { useFonts } from 'expo-font';
import ShopNavigator from './navigation/ShopNavigator';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'), 
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'), 
  })

  if(!loaded) return <AppLoading />

  return (
    <ShopNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
