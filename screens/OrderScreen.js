import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import OrderItem from "../components/OrderItem"
// redux
import { useDispatch, useSelector} from "react-redux"
// actions
import { deleteOrder, getOrders } from "../store/actions/order.action";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(store => store.order.list);

  useEffect(() => {
    dispatch(getOrders())
  }, [])
  const onHandlerDeleteItem = id => dispatch(deleteOrder(id))

  const renderCardItem = ({ item }) => (
    <OrderItem item={item} onDelete={onHandlerDeleteItem} />
  )
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  }
})

export default OrderScreen;