import * as fs from 'expo-file-system'
import { fetchAddress, insertAddress } from '../../db';

export const ADD_PLACE = 'ADD_PLACE'
export const LOAD_PLACES = 'LOAD_PLACES'

export const addPlace = (title, image, location) => {
  return async dispatch => {
    const address = "Sin direccion";

    const fileName = image.split('/').pop()
    const Path = fs.documentDirectory + fileName

    try {
      await fs.moveAsync({
        from: image,
        to: Path
      })

      const result = await insertAddress(
        title,
        Path,
        address,
        location.lat,
        location.lng
      )
      console.log(result);

      dispatch({
        type: ADD_PLACE,
        payload: {
          id: result.insertId,
          title,
          image: Path,
          address,
          lat: location.lat,
          lng: location.lng,
        }
      })
    } catch (error) {
      console.log(error.message, ' : addPlace')
      throw error
    }
  }
}

export const loadAddress = () => {
  return async dispatch => {
    try {
      const result = await fetchAddress()
      console.log(result);
      dispatch({type: LOAD_PLACES, places: result.rows._array})
    } catch (error) {
      console.log(error.message, ' : loadAddress');
      throw error
    }
  }
}