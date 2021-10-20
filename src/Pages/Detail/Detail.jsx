import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetMovieDetail } from "../../Redux/Actions/MovieActions";
import { layThongTinHeThongRapAction } from "../../Redux/Actions/QuanLyRapActions";
import ReactPlayer from "react-player";
import "./Detail.css";
import DetailMenu from "./DetailMenu/DetailMenu";
import DetailMobile from "./DetailMenuMobile/DetailMobile";
const Detail = (props) => {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((state) => state.MovieReducer);
  const movieId = props.match.params.id;
  useEffect(() => {
    dispatch(actionGetMovieDetail(movieId));
    dispatch(layThongTinHeThongRapAction());
    window.scrollTo(0, 0);
  }, []);
  console.log("detail", movieDetails);
  return (
    <>
      <div
        className="background relative sm:mb-80 lg:mb-0"
        style={{ paddingTop: "74px", height: "874px" }}
      >
        <div
          className="blur"
          style={{
            backgroundImage: `url("${movieDetails.hinhAnh}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            filter: "blur(10px)",
          }}
        ></div>
        <div
          className="container movie-info grid grid-cols-2  absolute  w-full z-10"
          style={{ top: "25%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="sm:col-span-2 sm:m-auto lg:col-span-1 xl:px-16 sm:px-0">
            <img
              className="mx-auto rounded-2xl shadow-2xl"
              src={movieDetails.hinhAnh}
              alt={movieDetails.hinhANh}
              style={{ height: "30rem", width: "90%" }}
            />
          </div>
          <div className="sm:col-span-3 lg:col-span-1 movie-info  w-full  sm:mb-90 sm:mt-2">
            <p className="text-gray-100 lg:text-3xl sm:text-center sm:text-xl grid grid-cols-2">
              <span className="lg:text-3xl sm:text-xl sm:text-center xl:col-span-1 bg-gray-300 rounded-xl text-gray-900 p-2 w-2/3 mx-auto">
                {moment(movieDetails.dateTime).format("DD/MM/YYYY")}{" "}
              </span>
              <span className="lg:text-3xl sm:text-xl xl:col-span-1 sm:text-center xl:text-right mx-auto">
                {movieDetails.tenPhim}
              </span>
            </p>
            <ReactPlayer
              style={{ borderRadius: "15px", overflow: "hidden" }}
              className=" sm:h-full rounded-xl mx-auto"
              width="100%"
              height="81%"
              url={movieDetails.trailer}
            />
            <p></p>
          </div>
          <div className="sm:col-span-3 lg:col-span-1 flex relative sm:hidden lg:block">
            <div className="danh-gia-bg "></div>
            <h1 className="absolute danh-gia-num">{movieDetails.danhGia}/10</h1>
          </div>
        </div>
        <div className="over-lay absolute bottom-0 left-0 w-full"></div>
      </div>
      <div className="w-full mt-10">
        <h1
          className="text-center  uppercase text-3xl"
          style={{ color: "#fb4226" }}
        >
          Chi tiết
        </h1>
        <p className="text-white w-2/3 text-justify mx-auto">
          {" "}
          {movieDetails.moTa}
        </p>
      </div>
      <div className="md:container mx-auto  md:block ">
        <h1
          className="text-center  uppercase text-3xl mt-20 mb-0"
          style={{ color: "#fb4226" }}
        >
          Mua vé
        </h1>
        <div className="lg:hidden md:block">
          <DetailMobile
            heThongRapChieu={heThongRapChieu}
            tenPhim={movieDetails.tenPhim}
          />
        </div>
        <div className="lg:block sm:hidden">
          <DetailMenu
            heThongRapChieu={heThongRapChieu}
            tenPhim={movieDetails.tenPhim}
          />
        </div>
      </div>
    </>
  );
};

export default Detail;
