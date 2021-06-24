import React, { useState } from "react";
import { Form, Figure } from "react-bootstrap";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../../redux/user/userAction";
import imageLogin from "../../../assets/Login-amico.svg";

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
      <Header />

      <div className="container-fluid page-container">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm">
              <div className="img-container">
                <img src={imageLogin} alt="" />
              </div>
            </div>
            <div className="col-sm form-container">
              <Form className="" onSubmit={loginSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      e.preventDefault();
                      setEmail(e.target.value);
                    }}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      e.preventDefault();
                      setPass(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="" controlId="formButton">
                  <Form.Control
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
