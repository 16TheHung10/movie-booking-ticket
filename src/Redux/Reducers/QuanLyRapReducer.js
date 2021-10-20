import { actionTypes } from "../Types/actionTypes";

const initialState = {
  heThongRapChieu: [],
};

export const QuanLyRapReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_HE_THONG_RAP:
      return { ...state, heThongRapChieu: payload };
    default:
      return { ...state };
  }
};
