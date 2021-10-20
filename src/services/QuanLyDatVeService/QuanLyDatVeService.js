import movieApi from "../../apis/baseAxios";
import { DOMAIN } from "../../util/settings/config";

export const QuanLyDatVeService = {
  layThongTinPhongVe: (maLichChieu) => {
    return movieApi(
      `${DOMAIN}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
  datVe: (dataVe) => {
    return movieApi.post(`${DOMAIN}/QuanLyDatVe/DatVe`, dataVe);
  },
};
