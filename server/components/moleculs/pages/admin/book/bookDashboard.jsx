import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import BookContent from "../../../../admin/book/BookContent";

const BookDashboard = () => {
  return (
    <>
      <div className="d-flex mt-3 vh-100" id="wrapper">
        <Sidebar />
        <BookContent />
      </div>
    </>
  );
};

export default BookDashboard;
