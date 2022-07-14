import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useEffect, useState } from 'react'
import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';

export default function App() {

  const [ textItem, setTextItem ] = useState('')
  const [ itemList, setItemList ] = useState([])
  const [ modalVisible, setModalVisible] = useState(false)
  const [ itemSelected, setItemSelected] = useState()

  const onHandlerChangeItem = (text) => {setTextItem(text)}
  const onHandlerAddItem = () => {
    console.log('Se agrego el item', textItem)
    setItemList(currenItems => [...currenItems, { id: Date.now(), value: textItem, completed: false }] )
    // setItemList(currenItems => [...currenItems, { id: Math.random(), value: textItem}])
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
  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex(item => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
    console.table(itemList)
  }

  return (
    <View style={styles.screen}>
      <CustomModal 
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        onHandlerDeleteItem={onHandlerDeleteItem}
        onHandlerCompleteItem={onHandlerCompleteItem}
      />
      <AddItem
        textItem={textItem}
        onHandlerChangeItem={onHandlerChangeItem}
        onHandlerAddItem={onHandlerAddItem}
      />
      <List
        itemList={itemList}
        onHandlerModal={onHandlerModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: '10%',
    padding: 30,
  },
});
