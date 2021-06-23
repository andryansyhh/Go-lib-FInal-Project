import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateUser from "../../../../admin/user/FormEditUser";

const UpdateUserPage = () => {
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateUser />
      </div>
    </>
  );
};

export default UpdateUserPage;
