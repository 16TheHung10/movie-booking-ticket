import movieApi from "../../apis/baseAxios";

export const MovieService = {
  getListMovie: (tenPhim) => {
    return movieApi("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01", {
      params: { tenPhim },
    });
  },
  getMovieDetail: (movieId) => {
    return movieApi(`/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`);
  },
};
