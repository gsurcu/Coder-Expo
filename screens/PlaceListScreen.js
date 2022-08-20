import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import PlaceItem from "../components/PlaceItem";

const PlaceListScreen = ({navigation}) => {
  const places = useSelector(state => state.places.places)
  console.log(places);
  const renderItem = data => {
    <PlaceItem 
      title={data.item.title}
      image={data.item.image}
      address="123 Street, City, Country"
      onSelect={() => navigation.navigate('Detalle')}
    />
  }

  return (
    <>
      { places && places.length > 0 ? (
          <FlatList 
            data={places}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        ) : (
          <Text>No hay lugares</Text>
        )
      }
    </>
  )
}

export default PlaceListScreen;