import { View, Button, Text, StyleSheet } from 'react-native'

const BreadDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Product's Detail</Text>
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