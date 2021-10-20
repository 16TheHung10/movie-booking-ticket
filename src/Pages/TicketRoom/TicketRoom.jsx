import { TextField } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVe,
  layThongTinPhongVe,
} from "../../Redux/Actions/QuanLyDatVeActions";
import WeekendIcon from "@mui/icons-material/Weekend";
import "./TicketRoom.css";
const TicketRoom = (props) => {
  const dispatch = useDispatch();
  const { thongTinPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);
  const [gheDangDat, setGheDangDat] = useState([]);
  const { danhSachGhe, thongTinPhim } = thongTinPhongVe;
  const maLichChieu = props.match.params.id;
  useEffect(() => {
    dispatch(layThongTinPhongVe(maLichChieu));
  }, []);
  const { user } = useSelector((state) => state.UserReducer);
  const addGhe = (item) => {
    const findGhe = gheDangDat.findIndex((ghe) => ghe.maGhe === item.maGhe);
    if (findGhe === -1) {
      gheDangDat.push(item);
      setGheDangDat([...gheDangDat]);
    } else {
      gheDangDat.splice(findGhe, 1);
      setGheDangDat([...gheDangDat]);
    }
  };
  const renderGhe = () => {
    return danhSachGhe?.map((item, index) => {
      let disabled = item.daDat === true ? true : false;
      let gheDaDat = item.daDat === true ? "ghe-da-dat" : "";
      let findIndex = gheDangDat.findIndex((ghe) => ghe.maGhe === item.maGhe);
      let classGheDangDat = findIndex === -1 ? "" : "ghe-dang-dat";
      return (
        <Fragment>
          <button
            onClick={() => {
              addGhe(item);
            }}
            disabled={disabled}
            className={`ghe shadow-2xl relative ${gheDaDat} ${classGheDangDat}`}
          >
            {item.daDat === false ? (
              <WeekendIcon style={{ fontSize: "37px", color: "#001232" }} />
            ) : (
              "X"
            )}
            {item.loaiGhe === "Vip" ? (
              <i
                disabled={disabled}
                class="fas fa-crown absolute icon-crow"
              ></i>
            ) : (
              ""
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };
  const renderGheDangDat = () => {
    return gheDangDat?.map((item, index) => {
      return (
        <button
          onClick={() => {
            addGhe(item);
          }}
          className="ghe-da-chon shadow-2xl"
        >
          {"Ghế : "}
          {item.tenGhe} {" - "} {item.giaVe}
          {" Đ"}
        </button>
      );
    });
  };
  const handleDatve = () => {
    dispatch(datVe({ maLichChieu: maLichChieu, danhSachVe: gheDangDat }));
    setGheDangDat([]);
  };
  console.log("phong ve", gheDangDat);
  return (
    <div className="main-checkout w-full ">
      <div className="container" style={{ background: "inherit" }}>
        <div className="grid grid-cols-12 " style={{ background: "inherit" }}>
          <div className="col-span-8 gap-y-px glass-ticket-room2">
            <div className="w-full bg-gray-900 h-2 "></div>
            <div className="monitor"></div>
            <div className=" mx-auto">{renderGhe()}</div>
          </div>
          <div className="col-span-4 glass-ticket-room relative">
            <h1 className="text-center text-6xl text-green-400">
              {gheDangDat
                ?.reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              đ
            </h1>
            <p>Address : {thongTinPhim.diaChi} </p>
            <p>Ngay chieu : {thongTinPhim.ngayChieu}</p>
            <hr />
            <div className="w-full grid grid-cols-7 my-2">
              <div className="col-span-7 text-left">
                Ghế đang đặt : {gheDangDat.length} {" Ghế"}
              </div>
              <div
                className="col-span-7  text-green-400 "
                style={{ maxHeight: "280px", overflowY: "scroll" }}
              >
                <div className="flex  flex-wrap justify-between">
                  {renderGheDangDat()}
                </div>
              </div>
            </div>
            <hr />
            <p className="text-left text-gray-300 text-sm my-2">
              Email : {user.email}{" "}
            </p>
            <hr />
            <p className="text-left text-gray-300 text-sm my-2">
              Phone : {user.soDT ? user.SoDT : "0971046732"}
            </p>
            <hr />
            <div>
              <div className="text-left my-2">Mã giảm giá</div>
              <div className="grid grid-cols-2 mb-2">
                <TextField
                  className="col-span-1 text-gray-100"
                  label="Nhập mã giảm giá"
                />
                <button className="col-span-1">Áp dụng</button>
              </div>
            </div>
            <hr />
            <p className="text-left text-sm my-2">Hình thức thanh toán :</p>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  style={{ height: "30px", width: "60px" }}
                  src="data:image/png;base64,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"
                  alt="visa"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="mx-auto"
                  style={{ height: "30px", width: "60px" }}
                  src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png"
                  alt="papal"
                />
              </div>
              <div className="col-span-1">
                <img
                  className="mx-auto"
                  style={{ height: "30px", width: "30px" }}
                  src="https://upload.wikimedia.org/wikipedia/vi/archive/f/fe/20201011055543%21MoMo_Logo.png"
                  alt="visa"
                />
              </div>
            </div>
            <div className="w-2/3 mx-auto">
              <button
                type="button"
                onClick={handleDatve}
                className=" mt-5 w-full dat-ve mx-auto"
              >
                Đặt vé
              </button>
            </div>
            <div className="warning absolute bottom-0 left-5">
              <p>
                <span className="text-red-600">! </span> Chú ý : vé đã mua không
                thể hoàn trả
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketRoom;
