import { BREADS } from '../../data/breads'

// actions
import { SELECT_BREAD, FILTERED_BREAD } from '../actions/bread.action'

const initialState = {
  list: BREADS,
  filteredBread: [],
  selectedID: null
}

const BreadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BREAD:
      return {
        ...state,
        selectedID: state.list.find(bread => bread.id === action.breadID).id
      };
    case FILTERED_BREAD:
      return {
        ...state,
        filteredBread: state.list.filter(bread => bread.category === action.categoryID)
      };
    default:
      return state;
  }
}

export default BreadsReducer;