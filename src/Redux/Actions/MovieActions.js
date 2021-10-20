import { MovieService } from "../../services/MovieService/MovieService";
import { actionTypes } from "../Types/actionTypes";
import { createActions } from "./CreateActions";

export const actionGetListMovie = (tenPhim) => {
  return (dispatch) => {
    MovieService.getListMovie(tenPhim)
      .then((res) => {
        dispatch(createActions(actionTypes.SET_MOVIE_LIST, res.data.content));
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
export const actionGetListMovieSearch = (tenPhim) => {
  return (dispatch) => {
    MovieService.getListMovie(tenPhim)
      .then((res) => {
        dispatch(
          createActions(actionTypes.SET_MOVIE_LIST_SEARCH, res.data.content)
        );
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};
export const actionGetMovieDetail = (movieId) => {
  return async (dispatch) => {
    try {
      const { data } = await MovieService.getMovieDetail(movieId);
      dispatch(createActions(actionTypes.SET__MOVIE_DETAILS, data.content));
      console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };
};
