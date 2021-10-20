import React, { memo, useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../Redux/Actions/CarouselAcitons";
import { useStyles } from "./style";
import classNames from "classnames";
import "./carousel.css";

const HomeCarousel = () => {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.CarouselReducer);

  const classes = useStyles();
  useEffect(() => {
    dispatch(getCarouselAction);
  }, []);
  const renderCarousel = () => {
    return banner.map((item, index) => {
      return (
        <div key={index} className={classes.relative}>
          <div
            className={classNames(classes.root, "carousel-img")}
            style={{
              backgroundImage: `url(${item.hinhAnh})`,
              filter: "blur(8px",
            }}
          ></div>
          <div
            style={{ backgroundImage: `url(${item.hinhAnh})` }}
            className={classNames(classes.overLay, "carousel-overlay")}
          ></div>
          <div className={classNames(classes.overLayFooter)}></div>
        </div>
      );
    });
  };
  console.log(banner);
  return (
    <div>
      <Carousel autoplay={true} dots={true}>
        {renderCarousel()}
      </Carousel>
    </div>
  );
};

export default memo(HomeCarousel);
