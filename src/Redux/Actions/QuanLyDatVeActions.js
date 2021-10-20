import { QuanLyDatVeService } from "../../services/QuanLyDatVeService/QuanLyDatVeService";
import { actionTypes } from "../Types/actionTypes";
import { createActions } from "./CreateActions";

export const layThongTinPhongVe = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const { data } = await QuanLyDatVeService.layThongTinPhongVe(maLichChieu);
      dispatch(createActions(actionTypes.SET_THONG_TIN_PHONG_VE, data.content));
      console.log("phong ve", data.content);
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const datVe = (dataDatVe) => {
  return async () => {
    try {
      await QuanLyDatVeService.datVe(dataDatVe);
      alert("ĐẶT VÉ THÀNH CÔNG");
    } catch (err) {
      alert("ĐẶT VÉ THÀNH THỤ");
      console.log(err.response);
    }
  };
};
