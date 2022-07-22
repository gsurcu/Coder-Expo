import { View, StyleSheet } from 'react-native'

const Card = params => {
  return (
    <View style={{...styles.card, ...params.style}} >
      {params.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
  }
})

export default Card;