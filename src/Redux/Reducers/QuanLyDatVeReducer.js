import { ThongTinLichChieu } from "../../_Core/Models/ThongTinPhongVe";
import { actionTypes } from "../Types/actionTypes";
const initialState = {
  thongTinPhongVe: new ThongTinLichChieu(), //Toaj  1 lớp đối tuowngnj cho nó thì bên dưới comp ta sẽ ko cần dùng ? nữa vì nó có giá trị mặc định rồi.Có thể làm or không tùy thg leader
};

export const QuanLyDatVeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_THONG_TIN_PHONG_VE:
      return { ...state, thongTinPhongVe: payload };
    default:
      return state;
  }
};
