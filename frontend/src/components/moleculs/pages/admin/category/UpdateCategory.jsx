import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateCategory from "../../../../admin/category/FormUpdateCategory";

const UpdateCategoryPage = () => {
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateCategory />
      </div>
    </>
  );
};

export default UpdateCategoryPage;
