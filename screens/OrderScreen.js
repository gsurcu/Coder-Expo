import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import OrderItem from "../components/OrderItem"
// redux
import { useDispatch, useSelector, connect} from "react-redux"
// actions
import { deleteOrder, getOrders } from "../store/actions/order.action";

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(store => store.order.list);console.log(typeof orders, ': useSelector_order');
  // const [items, setItems] = useState(orders)
  useEffect(() => {
    dispatch(getOrders()); console.log(typeof orders, ': useEffect_order');
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

export default connect()(OrderScreen);