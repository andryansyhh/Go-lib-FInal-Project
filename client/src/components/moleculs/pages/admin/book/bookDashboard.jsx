import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import BookContent from "../../../../admin/book/BookContent";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const BookDashboard = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <BookContent />
      </div>
      <Footer />
    </>
  );
};

export default BookDashboard;
