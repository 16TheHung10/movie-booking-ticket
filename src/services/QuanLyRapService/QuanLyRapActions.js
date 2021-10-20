import movieApi from "../../apis/baseAxios";
import { DOMAIN } from "../../util/settings/config";

export const QuanLyRap = {
  layThongTinHeThongRap: () => {
    return movieApi(
      `${DOMAIN}/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`
    );
  },
};
