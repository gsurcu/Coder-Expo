import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GridItem from '../components/GridItem'

// redux
import { useSelector, useDispatch, connect } from 'react-redux'
// actions
import { selectCategory } from '../store/actions/category.action'
import ShowCart from '../components/ShowCart'

const CategoriesScreen = ({navigation}) => {

  const categories = useSelector(store => store.categories.categories)
  const dispatch = useDispatch()

  const handleSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
    })
  }

  const renderGridItem = ({item}) => (
    <GridItem item={item} onSelected={handleSelectedCategory} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList 
          data={categories}
          keyExtractor={item => item.id}
          renderItem={renderGridItem}
          numColumns={2}
        />
      </View>
      <ShowCart navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 120,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
  },
})

export default connect()(CategoriesScreen);