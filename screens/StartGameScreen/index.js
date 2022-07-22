import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import Card from '../../components/Card'
import colors from '../../constants/colors'
import Input from '../../components/Input'
import NumberContainer from '../../components/NumberContainer'

const StartGameScreen = params => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlerInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }
  const handlerResetInput = () => {
    setConfirmed(false)
    setEnteredValue('')
  }

  const handlerConfirmedInput = () => {
    let choseNumber = parseInt(enteredValue)
    if (choseNumber === NaN || choseNumber < 0 || choseNumber > 99 || choseNumber.length < 1) return;
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue))
    setEnteredValue('')
  }
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un numero</Text>
          <Input 
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='numeric'
            maxLegth={2}
            value={enteredValue}
            onChangeText={handlerInputNumber}
          />
          <View style={styles.buttonContainer}>
            {enteredValue.length > 0 && (
              <>
                <Button title='Limpiar' onPress={() => handlerResetInput()} color={colors.accent} />
                <Button title='Confirmar' onPress={() => handlerConfirmedInput()} color={colors.primary} disabled={enteredValue.length < 2 ? true : false} />
              </>
            )}
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.summaryContainer}>
            <Text>Tu seleccion</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='Empezar Juego' onPress={() => params.onStartGame(selectedNumber)} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'EduBold  '
  },
  input: {
    width: '20%',
    textAlign: 'center',
    fontSize: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    height: 15,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '60%',
    height: '30%'
  }
})

export default StartGameScreen;