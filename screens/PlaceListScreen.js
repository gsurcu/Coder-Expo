import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import PlaceItem from "../components/PlaceItem";
import { loadAddress } from "../store/actions/places.action";

const PlaceListScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const places = useSelector(state => state.places.places)
  // console.log(places);

  useEffect(() => {
    dispatch(loadAddress())
  }, [])
  const renderItem = data => (
    <PlaceItem 
      title={data.item.title}
      image={data.item.image}
      address={data?.item.address}
      onSelect={() => navigation.navigate('Detalle', {
        placeID: data.item.id
      })}
    />
  )

  return (
    <>
      { places?.length > 0 ? (
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