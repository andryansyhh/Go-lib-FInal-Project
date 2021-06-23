import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateBook from "../../../../admin/book/FormUpdateBook";

const UpdateBookPage = () => {
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateBook />
      </div>
    </>
  );
};

export default UpdateBookPage;
