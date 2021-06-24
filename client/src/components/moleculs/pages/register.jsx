import React, { useEffect, useState } from "react";
import { Form, Figure } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleButton from "react-google-button";
import { registerUser } from "../../../redux/user/userAction";
import imageRegis from "../../../assets/Mobile-login-pana.svg";

const Register = () => {
  const userRegisterData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      user_name: userName,
      email: email,
      password: pass,
    };

    console.log(data);

    dispatch(registerUser(data));
  };

  return (
    <>
      <Header />
      <div className="container-fluid page-container">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm">
              <div className="img-container">
                <img src={imageRegis} alt="" />
              </div>{" "}
            </div>
            <div className="col-sm form-container">
              <Form className="" onSubmit={registerSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control
                    type="fullname"
                    placeholder="Enter FullName"
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control
                    type="name"
                    placeholder="Enter Username"
                    onChange={(e) => {
                      e.preventDefault();
                      setUserName(e.target.value);
                    }}
                  />
                </Form.Group>
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
                    value="Register"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          {/* <GoogleButton /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
