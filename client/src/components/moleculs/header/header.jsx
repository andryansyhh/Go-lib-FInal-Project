import React from "react";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <div
            onClick={() => {
              history.push("/");
            }}
            class="navbar-brand pe-auto navname"
          >
            Go-Lib
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav navlogin">
              <li
                onClick={() => {
                  history.push("/login");
                }}
                class="Login pe-auto"
              >
                <div class="nav-link active" aria-current="page">
                  Login
                </div>
              </li>
              <li
                onClick={() => {
                  history.push("/register");
                }}
                class="nav-item navregis"
              >
                <div class="nav-link active" aria-current="page">
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
