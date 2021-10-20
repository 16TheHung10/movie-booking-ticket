import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./Reducers/CarouselReducer";
import { MovieReducer } from "./Reducers/MovieReducer";
import { ModalReducer } from "./Reducers/ModalReducer";
import { QuanLyRapReducer } from "./Reducers/QuanLyRapReducer";
import { UserReducer } from "./Reducers/UserReducer";
import { QuanLyDatVeReducer } from "./Reducers/QuanLyDatVeReducer";
const rootReducer = combineReducers({
  CarouselReducer,
  MovieReducer,
  ModalReducer,
  QuanLyRapReducer,
  UserReducer,
  QuanLyDatVeReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
