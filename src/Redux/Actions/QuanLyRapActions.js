import { QuanLyRap } from "../../services/QuanLyRapService/QuanLyRapActions";
import { actionTypes } from "../Types/actionTypes";
import { createActions } from "./CreateActions";

export const layThongTinHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await QuanLyRap.layThongTinHeThongRap();
      dispatch(createActions(actionTypes.SET_HE_THONG_RAP, data.content));
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
