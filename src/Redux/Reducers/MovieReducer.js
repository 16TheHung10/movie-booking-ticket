import { actionTypes } from "../Types/actionTypes";

const initialState = {
  movieList: [],
  movieListSearch: [],
  movieDetails: {},
};

export const MovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_MOVIE_LIST:
      return { ...state, movieList: payload };
    case actionTypes.SET_MOVIE_LIST_SEARCH:
      return { ...state, movieListSearch: payload };
    case actionTypes.SET__MOVIE_DETAILS:
      return { ...state, movieDetails: payload };
    default:
      return state;
  }
};
