import React, { useEffect, useState } from "react";
import { Form, Figure, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleButton from "react-google-button";
import { registerUser } from "../../../redux/user/userAction";
import imageRegis from "../../../assets/Mobile-login-pana.svg";
import { useHistory } from "react-router";

const Register = () => {
  const { user, error, isLoading, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (!!localStorage.getItem("accessToken")) {
      history.push("/");
    }
  }, []);

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      user_name: userName,
      email: email,
      password: pass,
    };

    // console.log(data);

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
              </div>
            </div>
            <div className="col-sm form-container">
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              {!success && (
                <Form className="" onSubmit={registerSubmit}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Control
                      type="fullname"
                      placeholder="Full Name"
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Control
                      type="name"
                      placeholder="User Name"
                      required
                      onChange={(e) => {
                        e.preventDefault();
                        setUserName(e.target.value);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicEmail">
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

                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      required
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
                      value={isLoading ? "Loading..." : "Register"}
                      disabled={isLoading ? true : false}
                    />
                  </Form.Group>
                </Form>
              )}
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
