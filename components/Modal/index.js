import { Modal, View, Text, StyleSheet } from 'react-native'


export default function CustomModal(params) {
  const { modalVisible, itemSelected, onHandlerDeleteItem } = params;
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <Text>Mi modal</Text>
          </View>
          <View style={styles.modal}>
            <Text>Estas seguro que desea borrar?</Text>
          </View>
          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}>{itemSelected.value}</Text>
          </View>
          <View style={styles.modalButton}>
            <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    backgroundColor: 'white',
    width: '80%',
    height: '50%',
    borderRadius: 10,
    padding: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column'
  },
  modalTitle: {
    backgroundColor: '#ccc',
    color: 'white',
    fontSize: 18,
  },
  modalMessage: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    marginTop: 15,
  },
  modalItem: {
    fontSize: 30
  }
});