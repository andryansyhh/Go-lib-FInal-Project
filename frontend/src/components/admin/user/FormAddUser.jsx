import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Form, Button, Alert } from "react-bootstrap";
import { createUser } from "../../../redux/admin/user/adminAction";
import ToggleMenu from "../ToggleMenu";

function CreateUser() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading } = useSelector((state) => state.admin);

  const submitCreateUser = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      user_name: userName,
      email: email,
      password: password,
    };

    dispatch(createUser(data, history));
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Add New User</h3>
        <div className="container-fluid">
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="container d-flex justify-content-center">
            <Form className="col-sm-6 mt-5" onSubmit={submitCreateUser}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  required
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
                  required
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
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  autocomplete="new-password"
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formButton">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading ? true : false}
                >
                  {isLoading ? "Loading..." : "Add"}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
