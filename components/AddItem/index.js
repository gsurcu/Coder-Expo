import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function AddItem(params) {
  const { textItem, onHandlerChangeItem, onHandlerAddItem} = params;

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Escribe aqui' 
        style={styles.input} 
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <Button title='Add'  onPress={onHandlerAddItem} disabled={textItem.length < 1? true : false} />
    </View>
  )
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
});