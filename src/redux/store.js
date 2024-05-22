import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import restaurantReducer from "./reducers/restaurantReducer";
import basketReducer from "./reducers/basketReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  cart: basketReducer,
  products: productReducer,
});

// const store = createStore(rootReducer,applyMiddleware(thunk));

export default createStore(rootReducer, applyMiddleware(thunk));

/*
 *applymiddleware her hangi bir ara yazılımı redux'a dahil etmeye yarar.
 * burada "thunk" için kullanıldı.
 */
