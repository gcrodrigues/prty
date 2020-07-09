import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
// import AuthContext from "../contexts/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // const { signed } = useContext(AuthContext);
  const token = localStorage.getItem("token");
  return token && !isPrivate ? (
    <Redirect to="/myevents" />
  ) : token && !isPrivate ? (
    <Redirect to="/myevents" />
  ) : !token && isPrivate ? (
    <Redirect to="/login" />
  ) : (
    <Route component={Component} {...rest} />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  components: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
