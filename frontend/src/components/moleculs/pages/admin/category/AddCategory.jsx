import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateCategory from "../../../../admin/category/FormAddCategory";

const CreateCategoryPage = () => {
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateCategory />
      </div>
    </>
  );
};

export default CreateCategoryPage;
