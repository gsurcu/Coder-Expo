import { StyleSheet, View } from 'react-native';
import { useState } from 'react'
import CustomModal from './components/Modal';
import AddItem from './components/AddItem';
import List from './components/List';
import Header from './components/Header';
import StartGameScreen from './pages/StartGameScreen';

export default function App() {

  const [ textItem, setTextItem ] = useState('')
  const [ itemList, setItemList ] = useState([])
  const [ modalVisible, setModalVisible] = useState(false)
  const [ itemSelected, setItemSelected] = useState({})

  const onHandlerChangeItem = (text) => {setTextItem(text)}
  const onHandlerAddItem = () => {
    console.log('Se agrego el item', textItem)
    setItemList(currenItems => [...currenItems, { id: Date.now(), value: textItem, completed: false }] )
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
      <Header title={'Hola'} />
      <StartGameScreen />
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
