import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkStyledHeader } from "../../Components/Link/LinkStyled";
import { actionGetListMovie } from "../../Redux/Actions/MovieActions";
import HomeCarousel from "../../Template/HomeTemplate/Layout/Carousel/HomeCarousel";
import { useStyles } from "./HomeCss";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSpring, animated } from "@react-spring/web";
import { StarFilled, PlayCircleOutlined } from "@ant-design/icons";
import "./Home.css";
import HomeModal from "./HomeModal/HomeModal";
import { createActions } from "../../Redux/Actions/CreateActions";
import { actionTypes } from "../../Redux/Types/actionTypes";
import { Tabs } from "antd";
import { layThongTinHeThongRapAction } from "../../Redux/Actions/QuanLyRapActions";
import HomeMenuMobile from "./HomeMenuMobile/HomeMenuMobile";
import { Link } from "react-router-dom";
const Home = (props) => {
  const dispatch = useDispatch();
  const [loadMore, setLoadMore] = useState({
    dangChieu: 8,
    sapChieu: 8,
    hot: 8,
  });
  const [movieDetail, setMovieDetail] = useState([]);

  const classes = useStyles();
  const { movieList } = useSelector((state) => state.MovieReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    dispatch(actionGetListMovie());
    dispatch(layThongTinHeThongRapAction());
  }, []);
  const loadMoreMovie = useCallback(
    (type) => {
      toggle(!state);
      setTimeout(() => {
        setLoadMore((prevState) => {
          return { ...prevState, [type]: (prevState[type] += 8) };
        });
      }, 0);
    },
    [loadMore]
  );

  const showTrailer = (movieInfo) => {
    dispatch(createActions(actionTypes.OPEN_MODAL));
    setMovieDetail(movieInfo);
  };

  const { TabPane } = Tabs;
  function callback(key) {}
  return (
    <div className=" mx-auto relative">
      <HomeModal movieDetail={movieDetail} />
      <HomeCarousel />

      <Tabs
        style={{ color: "white" }}
        defaultActiveKey="1"
        onChange={callback}
        centered
      >
        <TabPane tab="ĐANG CHIẾU" key="1">
          <section className="text-gray-600 body-font mb-44">
            <div className="container px-5 py-2 mx-auto mt-4">
              <div className="flex flex-wrap -m-4">
                {movieList
                  .filter((movie) => movie.dangChieu === true)
                  .slice(0, loadMore.dangChieu)
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={classNames(
                          "p-4 xl:w-1/4 lg:w-1/3 md:w-1/2  ",
                          classes.item
                        )}
                      >
                        <div
                          style={{
                            boxShadow: "rgb(33 29 29) 0px 5px 15px",
                            background: "#eedcdc1f",
                          }}
                          className=" bg-opacity-90 px-4 pt-4  rounded-lg overflow-hidden text-center relative movie-item"
                        >
                          <div className={classes.rate}>
                            {" "}
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-100  mb-1">
                              {item.danhGia}
                            </h2>
                            <StarFilled spin style={{ color: "#ffe201" }} />
                          </div>
                          <div className="item-img mb-4">
                            <img
                              className={classes.movieItem}
                              src={item.hinhAnh}
                              alt={item.hinhAnh.toString()}
                            />
                            <button
                              type="button"
                              className="btn-trailer"
                              onClick={() => {
                                showTrailer(item);
                              }}
                              style={{ transition: "all .5s" }}
                            >
                              <i class="far fa-play-circle  icon-play"></i>
                            </button>

                            <div className="item-img-overlay"></div>
                          </div>
                          <Link
                            to={`/movie/detail/${item.maPhim}`}
                            className=""
                          >
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-100 ">
                              {item.tenPhim?.toUpperCase()}
                            </h1>
                            <p
                              style={{ textAlign: "justify", color: "beige" }}
                              className="leading-relaxed mb-3 sm:hidden md:block"
                            >
                              {item.moTa?.substring(0, 150)}{" "}
                              <LinkStyledHeader
                                className={classes.viewMore}
                                to={`/movie/detail/${item.maPhim}`}
                              >
                                {" "}
                                {"(... view more)"}
                              </LinkStyledHeader>
                            </p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <animated.button
                className={classNames(
                  `${
                    loadMore.dangChieu >=
                    movieList.filter((item) => item.dangChieu).length
                      ? classes.displayNone
                      : ""
                  }`,
                  classes.loadMoreButton
                )}
                onClick={() => {
                  loadMoreMovie("dangChieu");
                }}
                style={{
                  scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}
              >
                LOAD MORE
              </animated.button>
            </div>
          </section>
        </TabPane>
        <TabPane tab="SẮP CHIẾU" key="2">
          <section className="text-gray-600 body-font mb-44">
            <div className="container px-5 py-2 mx-auto mt-4">
              <div className="flex flex-wrap -m-4">
                {movieList
                  .filter((movie) => movie.sapChieu === true)
                  .slice(0, loadMore.sapChieu)
                  .map((item, index) => {
                    return (
                      <Link
                        to={`movie/detail/${item.maPhim}`}
                        className={classNames(
                          "p-4 xl:w-1/4 lg:w-1/3 md:w-1/2 ",
                          classes.item
                        )}
                      >
                        <div
                          style={{
                            background: "#eedcdc1f",
                            boxShadow: "rgb(33 29 29) 0px 5px 15px",
                          }}
                          className="h-full bg-gray-100 bg-opacity-90 px-4 pt-4  rounded-lg overflow-hidden text-center relative movie-item"
                        >
                          <div className={classes.rate}>
                            {" "}
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-100  mb-1">
                              {item.danhGia}
                            </h2>
                            <StarFilled spin style={{ color: "#ffe201" }} />
                          </div>
                          <div className="item-img">
                            <img
                              className={classes.movieItem}
                              src={item.hinhAnh}
                              alt={item.hinhAnh.toString()}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                showTrailer(item);
                              }}
                              style={{ transition: "all .5s" }}
                            >
                              <i class="far fa-play-circle  icon-play"></i>
                            </button>

                            <div className="item-img-overlay"></div>
                          </div>
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-100">
                            {item.tenPhim?.toUpperCase()}
                          </h1>
                          <p
                            style={{ textAlign: "justify", color: "beige" }}
                            className="leading-relaxed mb-3 sm:hidden md:block"
                          >
                            {item.moTa?.substring(0, 150)}{" "}
                            <LinkStyledHeader
                              className={classes.viewMore}
                              to="/"
                            >
                              {" "}
                              {"(... view more)"}
                            </LinkStyledHeader>
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>

              <animated.button
                className={classNames(
                  `${
                    loadMore.sapChieu >=
                    movieList.filter((item) => item.sapChieu).length
                      ? classes.displayNone
                      : ""
                  }`,
                  classes.loadMoreButton
                )}
                onClick={() => {
                  loadMoreMovie("sapChieu");
                }}
                style={{
                  scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}
              >
                LOAD MORE
              </animated.button>
            </div>
          </section>
        </TabPane>
        <TabPane tab="HOT" key="3">
          <section className="text-gray-600 body-font mb-44">
            <div className="container px-5 py-2 mx-auto mt-4">
              <div className="flex flex-wrap -m-4">
                {movieList
                  .filter((movie) => movie.hot === true)
                  .slice(0, loadMore.hot)
                  .map((item, index) => {
                    return (
                      <Link
                        to={`movie/detail/${item.maPhim}`}
                        className={classNames(
                          "p-4 xl:w-1/4  lg:w-1/3 md:w-1/2  ",
                          classes.item
                        )}
                      >
                        <div
                          style={{
                            background: "#eedcdc1f",
                            boxShadow: "rgb(33 29 29) 0px 5px 15px",
                          }}
                          className="h-full bg-gray-100 bg-opacity-90 px-4 pt-4  rounded-lg overflow-hidden text-center relative movie-item"
                        >
                          <div className={classes.rate}>
                            {" "}
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-100  mb-1">
                              {item.danhGia}
                            </h2>
                            <StarFilled spin style={{ color: "#ffe201" }} />
                          </div>
                          <div className="item-img">
                            <img
                              className={classes.movieItem}
                              src={item.hinhAnh}
                              alt={item.hinhAnh.toString()}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                showTrailer(item);
                              }}
                              style={{ transition: "all .5s" }}
                            >
                              <i class="far fa-play-circle  icon-play"></i>
                            </button>

                            <div className="item-img-overlay"></div>
                          </div>
                          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-100 mt-10">
                            {item.tenPhim?.toUpperCase()}
                          </h1>
                          <p
                            style={{ textAlign: "justify", color: "beige" }}
                            className="leading-relaxed mb-3 sm:hidden md:block"
                          >
                            {item.moTa?.substring(0, 150)}{" "}
                            <LinkStyledHeader
                              className={classes.viewMore}
                              to="/"
                            >
                              {" "}
                              {"(... view more)"}
                            </LinkStyledHeader>
                          </p>
                        </div>
                      </Link>
                    );
                  })}
              </div>

              <animated.button
                className={classNames(
                  `${
                    loadMore.hot >= movieList.filter((item) => item.hot).length
                      ? classes.displayNone
                      : ""
                  }`,
                  classes.loadMoreButton
                )}
                onClick={() => {
                  loadMoreMovie("hot");
                }}
                style={{
                  scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}
              >
                LOAD MORE
              </animated.button>
            </div>
          </section>
        </TabPane>
      </Tabs>
      <div className="md:container mx-auto  md:block">
        <div className="lg:hidden md:block">
          <HomeMenuMobile heThongRapChieu={heThongRapChieu} />
        </div>
        <div className="lg:block sm:hidden">
          <HomeMenu heThongRapChieu={heThongRapChieu} />
        </div>
      </div>
    </div>
  );
};

export default Home;
