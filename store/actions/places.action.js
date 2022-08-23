import * as fs from 'expo-file-system'
// import { API_MAPS_KEY } from '../../conf'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image, location) => {
  return async dispatch => {
    // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_MAPS_KEY}`)
    // if (!response.ok) throw new Error('No se ha podido comunicar con Google Maps API')

    // const resData = await response.json();
    // if (!resData.results) throw new Error('No se ha podido  obtener la direccion')

    // const address = resData.results[0].formatted_address;
    const address = "Sin direccion";

    const fileName = image.split('/').pop()
    const Path = fs.documentDirectory + fileName

    try {
      await fs.moveAsync({
        from: image,
        to: Path
      })
    } catch (error) {
      console.log(error.message)
      throw error
    }

    dispatch({
      type: ADD_PLACE,
      payload: {
        title,
        image: Path,
        address,
        lat: location.lat,
        lng: location.lng,
      }
    })
  }
}