import React, { memo } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createActions } from "../../../Redux/Actions/CreateActions";
import { actionTypes } from "../../../Redux/Types/actionTypes";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const HomeModal = (props) => {
  const dispatch = useDispatch();
  const { movieDetail } = props;
  const { visible } = useSelector((state) => state.ModalReducer);
  //   const [visible, setVisible] = useState(false);
  console.log("detail", movieDetail);
  return (
    <div>
      <>
        <Modal
          title={movieDetail?.tenPhim}
          style={{ borderRadius: "20px" }}
          centered
          footer={[
            <Link
              to={`/movie/detail/${movieDetail.maPhim}`}
              onClick={() => dispatch(createActions(actionTypes.CLOSE_MODAL))}
            >
              Buy ticket
            </Link>,
          ]}
          visible={visible}
          onOk={() => dispatch(createActions(actionTypes.CLOSE_MODAL))}
          onCancel={() => dispatch(createActions(actionTypes.CLOSE_MODAL))}
          width={1000}
        >
          <ReactPlayer
            style={{ borderRadius: "15px", overflow: "hidden" }}
            className=" sm:h-full rounded-xl mx-auto"
            width="100%"
            height="480px"
            url={movieDetail.trailer}
          />
        </Modal>{" "}
      </>
    </div>
  );
};

export default memo(HomeModal);
