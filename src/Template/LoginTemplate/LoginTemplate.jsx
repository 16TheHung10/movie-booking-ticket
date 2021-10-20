import { TextField } from "@material-ui/core";
import React from "react";
import logo from "../../assets/Image/logo.jpg";
import { Link, Redirect, Route } from "react-router-dom";
import "./LoginTemplate.css";
import { TOKEN } from "../../util/settings/config";
const LoginTemplate = (props) => {
  const { Component, ...resProps } = props;
  return !localStorage.getItem(TOKEN) ? (
    <Route
      {...resProps}
      render={(routeProps) => {
        return (
          <div className="text-gray-100 w-full relative main h-screen">
            <div className="glass ">
              <div className="relative h-full glass2">
                <div className="form-content absolute flex flex-col">
                  <img
                    className="mb-8 rounded-2xl shadow-2xl"
                    src={logo}
                    alt="logo"
                  />

                  <Component {...routeProps} />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default LoginTemplate;
