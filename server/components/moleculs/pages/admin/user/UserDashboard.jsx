import React from "react";
import Sidebar from "../../../../admin/Sidebar";
import UserContent from "../../../../admin/user/UserContent";
import style from "../../../../admin/user/styles.css";

const UserDashboard = () => {
  return (
    <>
      <div className="d-flex mt-3 vh-100" id="wrapper">
        <Sidebar />
        <UserContent />
      </div>
    </>
  );
};

export default UserDashboard;
