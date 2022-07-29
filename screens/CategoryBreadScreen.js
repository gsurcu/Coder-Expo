import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from '../components/List'

const CategoryBreadScreen = ({navigation , route}) => {
  const { title: category, products } = route.params
  const categoryProducts = products.filter(e => e.category === category);
  return (
    <View style={styles.container} >

      <View style={styles.title}>
        <Text>{category}</Text>
      </View>
        
      <List
        itemList={categoryProducts}
        navigation={navigation}
        routeName='Detail'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    alignItems: "center",
    padding: 10
  }
})

export default CategoryBreadScreen;