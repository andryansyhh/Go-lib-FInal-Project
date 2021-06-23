import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateUser from "../../../../admin/user/FormAddUser";

const CreateUserPage = () => {
  return (
    <>
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateUser />
      </div>
    </>
  );
};

export default CreateUserPage;
