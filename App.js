import React from 'react';
import 'react-native-gesture-handler'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';
import { init } from './db';

init()
  .then(() => console.log('Databse initialized'))
  .catch((err) => {
    console.log('Database fail connect');
    console.log(err.message);
  })

export default function App() {
  const [loaded] = useFonts({
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'), 
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'), 
  })

  if(!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}