import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../contexts/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useContext(AuthContext);
  return signed && !isPrivate ? (
    <Redirect to="/myevents" />
  ) : !signed && isPrivate ? (
    <Redirect to="/login" />
  ) : (
    <Route component={Component} {...rest} />
  );

  /* if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  } */
  // return <Route component={Component} {...rest} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  components: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
