import React from "react";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
          <a class="navbar-brand" href="/">
            Go-Lib
          </a>

          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="Login">
                <a class="nav-link active" aria-current="page" href="/">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
