import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import style from "../../../../admin/user/styles.css";
import CreateUser from "../../../../admin/user/FormAddUser";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const CreateUserPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3" id="wrapper">
        <Sidebar />
        <CreateUser />
      </div>
      <Footer />
    </>
  );
};

export default CreateUserPage;
