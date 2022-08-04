import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// redux
import { useSelector } from 'react-redux'

const BreadDetailScreen = () => {

  const bread = useSelector(state => state.breads.selected)

  return (
    <View style={styles.container} >
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  title : {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  }
})

export default BreadDetailScreen;