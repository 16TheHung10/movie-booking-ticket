import React, { Fragment, useEffect, useState } from "react";
import { Route } from "react-router";
import HomeFooter from "./Layout/Footer/HomeFooter";
import Header from "./Layout/Header/Header";

const HomeTemplate = (props) => {
  const [toTop, setToTop] = useState(false);

  //path exact
  const { Component, ...resProps } = props;
  useEffect(() => {
    scrollFunction();
  }, [toTop]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const scrollFunction = () => {
    window.addEventListener("scroll", (event) => {
      if (window.pageYOffset > 300) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  };
  return (
    //Khi gõ đúng đường dẫn thì nó sẽ vào render
    <Route
      {...resProps} //cái này là để khi người dùng nhập đúng path thì nó sẽ chạy render.
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} toTop={toTop} />
            <button
              className={`fixed bottom-0 right-10 p-2 ${
                !toTop ? "hidden" : ""
              }`}
              type="button"
              onClick={() => {
                window.scroll({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <i className="fas fa-arrow-up text-gray-100"></i>
            </button>
            <HomeFooter />
          </Fragment>
        );
      }}
    />
  );
};

export default HomeTemplate;
