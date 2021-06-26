import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateBook from "../../../../admin/book/FormAddBook";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const CreateBookPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateBook />
      </div>
      <Footer />
    </>
  );
};

export default CreateBookPage;
