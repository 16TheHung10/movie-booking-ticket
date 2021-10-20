import { actionTypes } from "../Types/actionTypes";

const initialState = [];

export const CarouselReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CAROUSEL:
      state = payload;
      return [...state];
    default:
      return state;
  }
};
