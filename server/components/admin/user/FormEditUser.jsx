import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Form, Button, Alert } from "react-bootstrap";
import { createUser, updateUser } from "../../../redux/admin/user/adminAction";
import ToggleMenu from "../ToggleMenu";
import UserContentUpdate from "./UserUpdateData";

function UpdateUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const { isLoading } = useSelector((state) => state.admin);
  const userID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );

  const submitUpdateUser = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      user_name: userName,
      email: email,
    };

    dispatch(updateUser(userID, data));
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Update User</h3>
        <div className="container-fluid">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <UserContentUpdate />
            <Form className="col-sm-6 mt-1" onSubmit={submitUpdateUser}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => {
                    e.preventDefault();
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    e.preventDefault();
                    setUserName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formButton">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!!!name && !!!userName && !!!email ? true : false}
                >
                  {isLoading ? "Loading..." : "Update"}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateUser;
