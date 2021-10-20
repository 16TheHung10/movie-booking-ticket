import movieApi from "../../apis/baseAxios";
import { actionTypes } from "../Types/actionTypes";
import { createActions } from "./CreateActions";

export const getCarouselAction = async (dispatch) => {
  try {
    const res = await movieApi("/QuanLyPhim/LayDanhSachBanner");
    //đưa lên reducer
    dispatch(createActions(actionTypes.SET_CAROUSEL, res.data.content));
  } catch (err) {
    console.error(err);
  }
};
