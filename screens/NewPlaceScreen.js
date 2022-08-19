import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import { COLORS } from "../constants/colors";
import { addPlace } from "../store/actions/places.action";

const NewPlaceScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const onHandlerTitle = text => setTitle(text)

  const onHandlerSave = () => {
    dispatch(addPlace(title))
    navigation.navigate('Direcciones')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <ImageSelector onImage={image => console.log(image)} />
        <TextInput 
          style={styles.input}
          onChangeText={onHandlerTitle}
          value={title}
        />
        <Button 
          title="GrabarDireccion" 
          color={COLORS.MAROON} 
          onPress={onHandlerSave} 
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4
  }
})

export default NewPlaceScreen;