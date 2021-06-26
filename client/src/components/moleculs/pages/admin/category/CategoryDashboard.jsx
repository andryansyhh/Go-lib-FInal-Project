import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CategoryContent from "../../../../admin/category/CategoryContent";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const CategoryDashboard = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CategoryContent />
      </div>
      <Footer />
    </>
  );
};

export default CategoryDashboard;
