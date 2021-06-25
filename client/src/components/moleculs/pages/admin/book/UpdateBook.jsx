import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateBook from "../../../../admin/book/FormUpdateBook";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const UpdateBookPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateBook />
      </div>
      <Footer />
    </>
  );
};

export default UpdateBookPage;
