import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../../components/Card'
import NumberContainer from '../../components/NumberContainer'

const GameScreen = params => {
  const [currentGuess, setCurrentGuess] = useState()

  const generateRandomBetween = (min, max, userChoice) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    let randomNumber = Math.floor(Math.random() * (max - min) + min)
    if (randomNumber === userChoice) {
      return generateRandomBetween(min, max, userChoice)
    } else {
      return setCurrentGuess(randomNumber)
    }
  }

  useEffect(() => {
    generateRandomBetween(1, 100, params.userOption)
  }, [params.userOption])

  return (
    <View style={styles.screen}>
      <Text>La suposicion del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='Menor' onPress={() => {}} />
        <Button title='Mayor' onPress={() => {}} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default GameScreen;