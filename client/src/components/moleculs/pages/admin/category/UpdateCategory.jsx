import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateCategory from "../../../../admin/category/FormUpdateCategory";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const UpdateCategoryPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateCategory />
      </div>
      <Footer />
    </>
  );
};

export default UpdateCategoryPage;
