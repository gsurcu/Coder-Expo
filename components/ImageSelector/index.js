import React, { useState } from "react";
import { View, Button, Image, Text, Alert, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'
import { COLORS } from "../../constants/colors";

const ImageSelector = props => {
  const [pickedUrl, setPickedUrl] = useState()

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();console.log(status);

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la camara para usar la aplicacion',
        [{text: 'Ok'}]
      )
      return false
    }

    return true
  }

  const handlerTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8
    });

    setPickedUrl(image.uri);
    props.onImage(image.uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUrl ? (
          <Text>No hay imagen seleccionada...</Text>
        ) : (
          <Image  
            style={styles.image}
            source={{uri: pickedUrl}}
          />
        )}
      </View>
      <Button 
        title="Tomar Foto"
        color={COLORS.LIGHT_PINK}
        onPress={handlerTakeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.BLUSH,
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  }
})

export default ImageSelector;