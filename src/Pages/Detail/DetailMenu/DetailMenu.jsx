import React, { memo, useEffect, useState } from "react";
import { Tabs, Radio, Space } from "antd";
import classNames from "classnames";
import { Link } from "react-router-dom";
import moment from "moment";
import { LinkTime } from "../../../Components/Link/LinkStyled";
import { layThongTinHeThongRapAction } from "../../../Redux/Actions/QuanLyRapActions";

const { TabPane } = Tabs;
const DetailMenu = (props) => {
  const { heThongRapChieu, tenPhim } = props;
  const [tenHeThongRap, setTenHeThongRap] = useState("BHDStar");
  const [tenRap, setTenRap] = useState();
  const [cumRapIndex, setCumRapIndex] = useState(0);
  const [colorCV, setColorCV] = useState("green");
  const [logoCumRap, setLogoCumRap] = useState();
  const heThongRapSelected = heThongRapChieu.find(
    (item) => item.maHeThongRap === tenHeThongRap
  );
  const [rapSelected, setRapSelected] = useState();

  useEffect(() => {
    setLogoCumRap(heThongRapChieu[0]?.logo);
  }, [heThongRapChieu]);
  useEffect(() => {
    setRapSelected(heThongRapSelected?.lstCumRap[0]);
  }, [heThongRapSelected]);
  useEffect(() => {
    switch (tenHeThongRap) {
      case "BHDStar":
        setColorCV("green");
        break;
      case "CGV":
        setColorCV("red");
        break;
      case "CineStar":
        setColorCV("#ff5fff");
        break;
      case "Galaxy":
        setColorCV("orange");
        break;
      case "LotteCinima":
        setColorCV("red");
        break;
      case "MegaGS":
        setColorCV("yellow");
        break;
      default:
        break;
    }
  }, [tenHeThongRap, colorCV]);
  const renderHeThongRap = () => {
    return heThongRapChieu.map((heThong, index) => {
      return (
        <li
          key={index}
          className={`border-b-2 px-2 py-4 he-thong-rap-item ${
            heThong.maHeThongRap === tenHeThongRap
              ? "opacity-100"
              : "opacity-30"
          }`}
        >
          <img
            onClick={() => {
              setTenHeThongRap(heThong.maHeThongRap);
              setLogoCumRap(heThong.logo);
              setCumRapIndex(0);
            }}
            className={`mx-auto `}
            width="50"
            style={{ cursor: "pointer" }}
            src={heThong.logo}
            alt=""
          />
        </li>
      );
    });
  };
  const renderListRap = () => {
    return heThongRapSelected?.lstCumRap?.map((item, index) => {
      return (
        <li
          key={index}
          className={`border-b-2 px-2 py-4 he-thong-rap-item ${
            index === cumRapIndex ? "opacity-100" : "opacity-60"
          }`}
        >
          <div className="flex">
            <img
              onClick={() => {
                setCumRapIndex(index);
                setRapSelected(item);
              }}
              className="sm:hidden md:block"
              style={{
                cursor: "pointer",
                marginRight: "20px",
                width: "50px",
                height: "50px",
              }}
              src={logoCumRap}
              alt=""
            />
            <div className="info-rap text-white">
              <p className="m-0 sm:text-xs lg:text-base">
                {" "}
                <span
                  style={{ color: colorCV }}
                  className="sm:text-xs lg:text-base"
                >
                  {" "}
                  {item.tenCumRap.split("-")[0]}
                </span>
                {item.tenCumRap.split("-")[1]}
              </p>
              <p className="m-0 text-xs">{item.diaChi}</p>
            </div>
          </div>
        </li>
      );
    });
  };
  const film = rapSelected?.danhSachPhim?.findIndex(
    (phim) => phim.tenPhim === tenPhim
  );
  console.log("rap selected", rapSelected);
  console.log("tenPhim", tenPhim);
  console.log("film", film);
  const renderMovie = () => {
    return rapSelected?.danhSachPhim
      ?.filter((phim) => phim.tenPhim === tenPhim)
      .map((item, index) => {
        return (
          <li key={index} className="flex p-4 w-full border-b-2">
            <img
              width="100"
              src={item.hinhAnh}
              alt={item.hinhAnh}
              className="mr-4 rounded-md shadow-2xl h-36 sm:hidden  md:block"
            />
            <div className="info-movie">
              <p className="text-2xl font-semibold text-green-400 m-0">
                {item.tenPhim}
              </p>
              <p className="text-sm  text-gray-400  m-0">
                {rapSelected.diaChi}
              </p>
              <div className="flex flex-wrap">
                {item.lstLichChieuTheoPhim
                  ?.slice(0, 10)
                  .map((lichChieu, index) => {
                    return (
                      <LinkTime
                        className="shadow-xl"
                        key={index}
                        to={`/checkout/${lichChieu.maLichChieu}`}
                      >
                        {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                      </LinkTime>
                    );
                  })}
              </div>
            </div>
          </li>
        );
      });
  };

  return (
    <div className="flex mb-4 ticket-container-detail">
      <div className="w-24 h-full border-r-2 ">
        <ul className="m-0">{renderHeThongRap()}</ul>
      </div>
      <div className="w-1/3 ">
        <ul className="m-0  overflow-y-scroll" style={{ height: "597px" }}>
          {renderListRap()}
        </ul>
      </div>
      <div className="w-2/3  relative">
        <div className="w-full h-full glass-detail"></div>
        <ul
          className="m-0  overflow-y-scroll absolute top-0 left-0 w-full"
          style={{ height: "597px" }}
        >
          {film !== -1 ? (
            renderMovie()
          ) : (
            <li>
              <p className="text-center text-4xl mt-56">
                Không có lịch chiếu tại rạp này
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(DetailMenu);
