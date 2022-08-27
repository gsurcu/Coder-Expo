import React from "react";
import { View, Image, StyleSheet } from "react-native";

const MapPreview = props => {
  // const mapPreviewUrl = ''

  return (
    <View style={{...styles.mapPreview, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: "center",
    alignItems: "center",
  },
  mapImage: {
    width: '100%',
    height: '100%',
  }
})

export default MapPreview;