import { View, Button, Text, StyleSheet } from 'react-native'

const CategoryBreadScreen = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Text>Products of the category</Text>
      <Button title='Go to Detail' onPress={() => {
        navigation.navigate('Detail')
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

export default CategoryBreadScreen;