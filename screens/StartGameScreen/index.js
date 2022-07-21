import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import Card from '../../components/Card'

export default function StartGameScreen(params) {
  const { onStartGame } = params

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