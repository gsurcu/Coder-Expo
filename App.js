import { StyleSheet, View } from 'react-native';
import { useState } from 'react'
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loaded] = useFonts({EducBold: require('./assets/fonts/Edu-Bold.ttf'), EducRegular: require('./assets/fonts/Edu-Regular.ttf'), EducMedium: require('./assets/fonts/Edu-Medium.ttf'), EducSemiBold: require('./assets/fonts/Edu-SemiBold.ttf')})
  const [ userNumber, setUserNumber ] = useState();

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />
  
  if (userNumber) {
    content = <GameScreen userOption={userNumber} />
  }

  if(!loaded) return <AppLoading />

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
