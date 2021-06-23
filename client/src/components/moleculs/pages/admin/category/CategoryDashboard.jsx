import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CategoryContent from "../../../../admin/category/CategoryContent";

const CategoryDashboard = () => {
  return (
    <>
      <div className="d-flex mt-3 vh-100" id="wrapper">
        <Sidebar />
        <CategoryContent />
      </div>
    </>
  );
};

export default CategoryDashboard;
