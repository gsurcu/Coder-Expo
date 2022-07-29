import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from '../components/List'
import { generateCategories, generateProducts } from '../utils/generateItems'

const CategoriesScreen = ({navigation}) => {
  const categories = generateCategories(6)
  const products = generateProducts(categories, 5);
  return (
    <View style={styles.container} >

      <View style={styles.title}>
        <Text>Categories</Text>
      </View>

      <List
        itemList={categories}
        navigation={navigation}
        routeName='Bread'
        routeProps={{products:products}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignItems: "center",
    padding: 10
  }
})

export default CategoriesScreen;