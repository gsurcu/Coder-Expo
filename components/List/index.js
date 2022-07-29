import { FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native'

const List = params => {
  const { itemList, navigation, routeName, routeProps } = params
  return (
    <FlatList
        data={itemList}
        renderItem={data => (
            <TouchableOpacity onPress={() => navigation.navigate(routeName, { title: data.item.value, ...routeProps })} style={styles.item} >
              <Text>{data.item.value}</Text>
            </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: '10%',
    height: 50,
    backgroundColor: "#DDDDDD",
    padding: 10,    
  },
});
export default List;