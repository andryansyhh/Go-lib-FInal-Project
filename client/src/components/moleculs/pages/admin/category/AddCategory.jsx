import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateCategory from "../../../../admin/category/FormAddCategory";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const CreateCategoryPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateCategory />
      </div>
      <Footer />
    </>
  );
};

export default CreateCategoryPage;
