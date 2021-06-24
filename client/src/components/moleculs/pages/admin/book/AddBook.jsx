import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateBook from "../../../../admin/book/FormAddBook";

const CreateBookPage = () => {
  
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateBook />
      </div>
    </>
  );
};

export default CreateBookPage;
