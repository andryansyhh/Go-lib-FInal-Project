import React from "react";
import { Button, Navbar } from "react-bootstrap";
import style from "./user/styles.css";
import menu from "../../assets/menu.png";

const ToggleMenu = () => {
  const sidebarToggle = (event) => {
    event.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
    localStorage.setItem(
      "sb|sidebar-toggle",
      document.body.classList.contains("sb-sidenav-toggled")
    );
  };

  return (
    <>
      <div className="container-fluid d-flex mt-4">
        <Navbar.Toggle
          onClick={sidebarToggle}
          type="button"
          variant="outline-primary"
          bg="transparent"
          expand="lg"
        >
          <img src={menu} style={{ width: "30px" }} />
        </Navbar.Toggle>
      </div>
    </>
  );
};

export default ToggleMenu;
