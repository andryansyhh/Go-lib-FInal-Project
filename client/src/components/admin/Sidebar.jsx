import React from "react";
import { Button } from "react-bootstrap";
import "./user/styles.css";

const Sidebar = () => {
  return (
    <>
      <div className="mt-3" id="sidebar-wrapper">
        <div className="list-group list-group-flush" expand="lg">
          <Button
            className="mt-4 m-2 btn btn-primary text-light"
            href="/admin/users"
          >
            User
          </Button>
          <Button
            className="m-2 btn btn-primary text-light"
            href="/admin/categories"
          >
            Category
          </Button>
          <Button
            className="m-2 btn btn-primary text-light"
            href="/admin/books"
          >
            Book
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
