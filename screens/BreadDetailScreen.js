import { View, Button, Text, StyleSheet } from 'react-native'

const BreadDetailScreen = ({route}) => {

  const { product } = route.params
  return (
    <View style={styles.container} >
      <Text>{product}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BreadDetailScreen;