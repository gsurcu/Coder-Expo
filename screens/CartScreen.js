import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import CartItem from "../components/CartItem";
// redux
import { useSelector, useDispatch, connect } from "react-redux";
// actions
import { confirmCart, removeItem } from "../store/actions/cart.action";

const CartScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.cart.items);
  const total = useSelector(store => store.cart.total);

  const handlerConfirmCart = () => dispatch(confirmCart(items, total))
  const handlerDeleteItem = id => dispatch(removeItem(id))

  const renderItem = data => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  )
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList 
          data={items}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.confirm} 
          onPress={total === 0? () => {}: handlerConfirmCart}
        >
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    fontFamily: "OpenSansBold",
    padding: 8
  }
})

export default connect()(CartScreen);