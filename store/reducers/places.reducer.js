import Place from "../../models/Place"
import { ADD_PLACE } from "../actions/places.action"

const initialState = {
  places: []
}
export const PlacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPLace = new Place(Date.now(), action.payload.title, action.payload.image)
      return {
        ...state,
        places: state.places.concat(newPLace)
      }
    default:
      return state
  }  
}