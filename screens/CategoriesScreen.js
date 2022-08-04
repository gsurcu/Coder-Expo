import React from 'react'
import { FlatList } from 'react-native'
import GridItem from '../components/GridItem'

// redux
import { useSelector, useDispatch } from 'react-redux'
// actions
import { selectCategory } from '../store/actions/category.action'

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
    <FlatList 
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen;