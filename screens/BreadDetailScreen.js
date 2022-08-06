import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
// redux
import { useSelector, useDispatch } from 'react-redux'
// actions
import { addItem } from '../store/actions/cart.action'
import { COLORS } from '../constants/colors'

const BreadDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const breadID = useSelector(store => store.breads.selectedID);
  const breads = useSelector(store => store.breads.list);
  const bread = breads.find(item => item.id === breadID);

  const handlerAddItemCart = () => dispatch(addItem(bread));

  return (
    <View style={styles.container} >
      <Text style={styles.title}>{bread.name}</Text>
      <Text>{bread.description}</Text>
      <Text>{bread.price}</Text>
      <Text>{bread.weight}</Text>
      <View style={styles.buttons}>
        <Button title='Agregar al Carrito' onPress={handlerAddItemCart} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title : {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
  buttons: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'

  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 6,
  },
})

export default BreadDetailScreen;