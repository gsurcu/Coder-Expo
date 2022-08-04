import { legacy_createStore as createStore, combineReducers } from "redux";

//reducers
import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/breads.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadsReducer
})

export default createStore(RootReducer)