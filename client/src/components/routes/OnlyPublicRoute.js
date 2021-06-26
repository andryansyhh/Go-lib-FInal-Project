import React from 'react'
import { Route, Redirect } from "react-router-dom";

const OnlyPublicRoute = props => {
  const authUser = !!localStorage.getItem("accessToken");

  return !authUser ? <Route {...props}>{props.children}</Route> : <Redirect to="/home" />;
}

export default OnlyPublicRoute;
