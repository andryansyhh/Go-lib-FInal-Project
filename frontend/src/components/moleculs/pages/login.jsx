import React, { useState } from "react";
import { Form, Figure } from "react-bootstrap";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../../redux/user/userAction";

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { error } = useSelector((state) => state.user);

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: pass,
    };

    console.log(data);

    if (!error) {
      dispatch(loginUser(data));
      history.push("/");
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-end">
        <Form className="col-4 mt-5" onSubmit={loginSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                e.preventDefault();
                setPass(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formButton">
            <Form.Control
              className="btn btn-primary"
              type="submit"
              value="Login"
            />
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
