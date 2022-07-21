import { View, Text, StyleSheet } from 'react-native'

export default function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Start Game Screen</Text>
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