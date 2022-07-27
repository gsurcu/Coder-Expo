import { View, Button, Text, StyleSheet } from 'react-native'

const CategoryBreadScreen = ({route}) => {

  const { category } = route.params
  return (
    <View style={styles.container} >
      <Text>{category}</Text>
      <Button title='Go to Detail' onPress={() => {
        route.navigate('Detail', { product: 'Product'})
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