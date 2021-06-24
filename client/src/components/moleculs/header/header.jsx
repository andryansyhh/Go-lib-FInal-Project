import React from "react";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div
            onClick={() => {
              history.push("/");
            }}
            className="navbar-brand pe-auto navname"
          >
            Go-Lib
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav navlogin">
              <li
                onClick={() => {
                  history.push("/login");
                }}
                className="Login pe-auto"
              >
                <div className="nav-link active" aria-current="page">
                  Login
                </div>
              </li>
              <li
                onClick={() => {
                  history.push("/register");
                }}
                className="nav-item navregis"
              >
                <div className="nav-link active" aria-current="page">
                  Register
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
