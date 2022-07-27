import { View, Button, Text, StyleSheet } from 'react-native'

const CategoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Categories</Text>
      <Button title='Go to Products' onPress={() => {
        navigation.navigate('Bread')
      }} />
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

export default CategoriesScreen;