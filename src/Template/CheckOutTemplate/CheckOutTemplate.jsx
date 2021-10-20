import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "../../util/settings/config";

const CheckOutTemplate = (props) => {
  const { Component, ...restProps } = props;
  return localStorage.getItem(TOKEN) ? (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default CheckOutTemplate;
