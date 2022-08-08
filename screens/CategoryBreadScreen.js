import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import BreadItem from '../components/BreadItem'

// redux
import { useSelector, useDispatch, connect } from 'react-redux'
// actions
import { filteredBread, selectBread } from '../store/actions/bread.action'

const CategoryBreadScreen = ({ navigation }) => {

  // redux
  const dispatch = useDispatch();
  const categoryBreads = useSelector(store => store.breads.filteredBread)
  const category = useSelector(store => store.categories.selected)

  useEffect(() => {
    dispatch(filteredBread(category.id));
  }, [])
  
  const handleSelected = item => {
    dispatch(selectBread(item.id))
    navigation.navigate('Detail', {
      name: item.name,
    })
  }

  const renderItemBread = ({item}) => (<BreadItem item={item} onSelected={handleSelected} />)

  return (
    <View style={styles.container}>
      <FlatList 
        data={categoryBreads}
        keyExtractor={item => item.id}
        renderItem={renderItemBread}
      />
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
})

export default connect()(CategoryBreadScreen);