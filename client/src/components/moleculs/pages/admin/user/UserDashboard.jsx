import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import UserContent from "../../../../admin/user/UserContent";
import style from "../../../../admin/user/styles.css";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <div className="d-flex mt-3 vh-100" id="wrapper">
        <Sidebar />
        <UserContent />
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;
