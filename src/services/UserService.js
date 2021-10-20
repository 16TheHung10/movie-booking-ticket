import axios from "axios";
import movieApi from "../apis/baseAxios";
import { DOMAIN } from "../util/settings/config";

export const UserService = {
  login: (info) => {
    return movieApi.post(`${DOMAIN}/QuanLyNguoiDung/DangNhap`, info);
  },
  register: (info) => {
    return movieApi.post(`${DOMAIN}/QuanLyNguoiDung/DangKy`, info);
  },
};
