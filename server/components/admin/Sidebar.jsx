import React from "react";
import { Button } from "react-bootstrap";
import style from "./user/styles.css";

const Sidebar = () => {
  return (
    <>
      <div className="mt-3" id="sidebar-wrapper">
        <div className="list-group list-group-flush" expand="lg">
          <Button className="mt-4 m-2" href="/admin/users">
            User
          </Button>
          <Button className="m-2" href="/admin/categories">
            Category
          </Button>
          <Button className="m-2" href="/admin/books">
            Book
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
