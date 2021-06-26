import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../redux/user/userAction";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <div
              onClick={() => {
                history.push("/");
              }}
              className="navbar-brand navname"
            >
              <h2>Go-Lib</h2>
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
              <ul className="navbar-nav">
                <li>
                  <Link
                    onClick={() => {
                      history.push("/news");
                    }}
                    className="nav-link active"
                    aria-current="page"
                  >
                    News
                  </Link>
                </li>
                {accessToken ? (
                  <li>
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(logoutUser());
                        history.push("/login");
                      }}
                      className="nav-link active"
                      aria-current="page"
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        onClick={() => {
                          history.push("/login");
                        }}
                        className="nav-link active"
                        aria-current="page"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          history.push("/register");
                        }}
                        className="nav-link active"
                        aria-current="page"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
