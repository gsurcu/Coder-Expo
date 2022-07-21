import { View, StyleSheet } from 'react-native'

export default function Card(props) {
  return (
    <View style={{...styles.card, ...props.style}} >
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
  }
})