import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import UpdateUser from "../../../../admin/user/FormEditUser";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const UpdateUserPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <UpdateUser />
      </div>
      <Footer />
    </>
  );
};

export default UpdateUserPage;
