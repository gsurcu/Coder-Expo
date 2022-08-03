import React from 'react'
import { FlatList } from 'react-native'
import BreadItem from '../components/BreadItem'
import { BREADS } from '../data/breads'

const CategoryBreadScreen = ({ navigation , route }) => {
  const { categoryID } = route.params
  const breads = BREADS.filter(prod => prod.category === categoryID);

  const handleSelected = item => {
    navigation.navigate('Detail', {
      productID: item.id,
      name: item.name,
    })
  }

  const renderItemBread = ({item}) => (
    <BreadItem item={item} onSelected={handleSelected} />
  )

  return (
    <FlatList 
      data={breads}
      keyExtractor={item => item.id}
      renderItem={renderItemBread}
    />
  )
}

export default CategoryBreadScreen;