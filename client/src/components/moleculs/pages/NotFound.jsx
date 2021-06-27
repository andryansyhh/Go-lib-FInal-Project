import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";

const NotFound = () => (
  <div>
    <Header />
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1>404 - Not Found!</h1>
      <Link to="/">Go to Landing</Link>
    </div>
    <Footer />
  </div>
);

export default NotFound;
