import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons"

const ShowCart = ({navigation}) => {
  const handlerShowCart = () => navigation.push('Cart')// No me funciona, F

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlerShowCart}>
        <Ionicons name="cart" size={24} color="white" />
        <Text style={{color: 'white'}}>Ver Carrito</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
})

export default ShowCart