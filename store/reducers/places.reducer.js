import Place from "../../models/Place"
import { ADD_PLACE, LOAD_PLACES } from "../actions/places.action"

const initialState = {
  places: []
}
export const PlacesReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case ADD_PLACE:
      const newPLace = new Place(
        payload.id , 
        payload.title, 
        payload.image, 
        payload.address, 
        payload.lat, 
        payload.lng
      )
      return {
        ...state,
        places: [state.places, newPLace]
      }
    case LOAD_PLACES:
      return {
        ...state,
        places: action.places.map(item => new Place(
          item.id,
          item.title,
          item.image,
          item.address,
          item.lat,
          item.lng
        ))
      }
    default:
      return state
  }  
}