import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import ShowCart from '../components/ShowCart'

// redux
import { useSelector, useDispatch, connect } from 'react-redux'
// actions
import { addItem } from '../store/actions/cart.action'

const BreadDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const breadID = useSelector(store => store.breads.selectedID);
  const breads = useSelector(store => store.breads.list);
  const bread = breads.find(item => item.id === breadID);

  const handlerAddItemCart = () => dispatch(addItem(bread));

  return (
    <View style={styles.container} >
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{bread.name}</Text>
        </View>
        <View>
          <Text style={styles.description}>{bread.description}</Text>
        </View>
        <View>
          <Text style={styles.price}>{bread.price}</Text>
        </View>
        <View style={styles.cart}>
          <Button title='Agregar al Carrito' onPress={handlerAddItemCart} />
        </View>
      </View>
      <ShowCart navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    paddingBottom: 120
  },
  item: {
    flex: 1,
  },
  title : {
    fontSize: 20,
    fontFamily: 'OpenSansBold',
    marginBottom: 10,
  },
  description: {},
  price: {},
  cart: {
    alignItems: 'center',
  },
})

export default connect()(BreadDetailScreen);