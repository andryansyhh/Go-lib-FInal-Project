import React from 'react';
import { Route, Redirect } from "react-router-dom";

const AdminRoute = props => {
  const authUser = !!localStorage.getItem("accessToken");
  const isAdmin = btoa("admin")

  return (authUser && atob(localStorage.getItem(isAdmin)) === "admin") ? <Route {...props}>{props.children}</Route> : <Redirect to="/login" />;
}

export default AdminRoute;