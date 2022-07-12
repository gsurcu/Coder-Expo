import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [ textItem, setTextItem ] = useState('')
  const [ itemList, setItemList ] = useState([])
  const [ modalVisible, setModalVisible] = useState(false)
  const [ itemSelected, setItemSelected] = useState()

  const onHandlerCahngeItem = (text) => {setTextItem(text)}
  const onHandlerAddItem = () => {
    setItemList(currenItems => [...currenItems, { id: Math.random(), value: textItem}])
    setTextItem('')
  }

  const onHandlerDeleteItem = id => {
    setItemList(currenItems => currenItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }
  return (
    <View style={styles.screen}>
      <Modal>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </Modal>

      <View style={styles.container}>
        <TextInput 
          placeholder='Escribe aqui' 
          style={styles.input} 
          value={textItem}
          onChangeText={onHandlerCahngeItem}
        />
        <Button title='Add' style={styles.button} onPress={onHandlerAddItem} disabled={textItem.length < 1? true : false} />
        {itemList.map(item => <View key={item.id}> <Text>{item.value}</Text> <Text>{item.id}</Text> </View>)}
      </View>
      {/* <Text>{textItem}</Text> */}
      <FlatList
        data={itemList}
        renderItem={data => {
          <TouchableOpacity onPress={() => {}} style={styles.item} >
            <Text>{data.item.value}</Text>
          </TouchableOpacity>
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
  },
  screen: {
    marginTop: '10%',
    padding: 30,
  },
  button: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    height: 50,
    marginTop: '10%',
  },
  modal: {
    width: '90%'
  },
  modalTitle: {},
  modalMessage: {},
  modalButton: {},
  modalItem: {}
});
