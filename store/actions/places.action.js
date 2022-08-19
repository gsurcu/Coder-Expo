import * as fs from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop()
    const Path = fs.documentDirectory + fileName

    try {
      fs.moveAsync({
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
        image: Path
      }
    })
  }
}