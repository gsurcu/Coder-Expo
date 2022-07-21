import { StyleSheet, View } from 'react-native';
import { useState } from 'react'
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

  const [ userNumber, setUserNumber ] = useState();

  const handlerStartGame = selectedNumber => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handlerStartGame} />
  
  if (userNumber) {
    content = <GameScreen userOption={userNumber} />
  }

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
