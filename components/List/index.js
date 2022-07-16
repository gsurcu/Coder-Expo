import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function List(params) {
  const { itemList, onHandlerModal} = params
  return (
    <FlatList
      data={itemList}
      renderItem={data => (
        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item} >
          <Text style={{textDecorationStyle: data.item.completed ? 'dashed' : null}} >{data.item.value}</Text>
          <Text style={{textDecorationStyle: data.item.completed ? 'dashed' : null}} >{data.item.completed}</Text>
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
    
  },
});
