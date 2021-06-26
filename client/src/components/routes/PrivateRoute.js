import React from 'react';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = props => {
  const authUser = !!localStorage.getItem("accessToken");

  return authUser ? <Route {...props}>{props.children}</Route> : <Redirect to="/login" />;
}

export default PrivateRoute
