import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import ImageSelector from "../components/ImageSelector";
import LocationSelector from "../components/LocationSelector";
import { COLORS } from "../constants/colors";
import { addPlace } from "../store/actions/places.action";

const NewPlaceScreen = ({navigation, route}) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [location, setLocation] = useState(null)

  const onHandlerTitle = text => setTitle(text)

  const onHandlerSave = () => {
    dispatch(addPlace(title, image, location))
    navigation.navigate('Direcciones')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput 
          style={styles.input}
          onChangeText={onHandlerTitle}
          value={title}
        />
        <ImageSelector onImage={image => setImage(image)} />
        <LocationSelector onLocation={setLocation} mapLocation={route?.params?.mapLocation} />
        <Button 
          title="Grabar Direccion" 
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