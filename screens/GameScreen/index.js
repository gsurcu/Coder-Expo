import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../../components/Card'

export default function GameScreen(params) {
  const { userOption } = params

  return (
    <View style={styles.screen}>
      <Text>Game Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
})