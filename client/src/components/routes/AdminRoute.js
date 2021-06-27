import React from 'react';
import { Route, Redirect } from "react-router-dom";
import NotFound from "../../components/moleculs/pages/NotFound"

const AdminRoute = props => {
  const authUser = !!localStorage.getItem("accessToken");
  const isAdmin = btoa("admin")

  return (authUser && atob(localStorage.getItem(isAdmin)) === "admin") ? <Route {...props}>{props.children}</Route> : <Route component={NotFound} />;
}

export default AdminRoute;