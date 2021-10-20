import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import { actionGetListMovieSearch } from "../../../../Redux/Actions/MovieActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SearchModal = () => {
  const dispatch = useDispatch();
  const { movieListSearch } = useSelector((state) => state.MovieReducer);
  const [open, setOpen] = React.useState(false);
  const [tenPhim, setTenPhim] = React.useState("");
  const searchRef = React.useRef();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTenPhim("");
  };

  const handleSearch = () => {};
  return (
    <div>
      <Button onClick={handleOpen}>Search Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            height: "500px",

            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <div className="fixed w-5/6 mx-auto">
            <TextField
              name="tenPhim"
              value={tenPhim}
              type="text"
              label="Bạn muốn tìm phim gì"
              className="w-full "
              variant="standard"
              onChange={(e) => {
                setTenPhim(e.target.value);
                if (searchRef.current) {
                  clearTimeout(searchRef.current);
                }
                searchRef.current = setTimeout(() => {
                  dispatch(actionGetListMovieSearch(tenPhim));
                }, 700);
              }}
            />
          </div>
          <div className="overflow-y-scroll h-5/6  mt-16">
            <div className="sear-reusult ">
              {movieListSearch?.map((item, index) => {
                return (
                  <div className="grid grid-cols-3 m-4 ">
                    <div className="grid-span-1">
                      <Link to={`/movie/detail/${item.maPhim}`}>
                        <img
                          onClick={() => {
                            setOpen(false);
                            handleSearch();
                          }}
                          className="shadow-2xl"
                          src={item.hinhAnh}
                          alt={item.hinhAnh}
                          style={{
                            height: "120px",
                            width: "80px",
                            borderRadius: "10px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-span-2">
                      <p>{item.tenPhim}}</p>
                      <hr />
                      <p className="bg-gray-200 p-2 rounded-lg shadow-xl mt-4">
                        {moment(item.ngayKhoiChieu).format("DD-MM-YYYY")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default SearchModal;
