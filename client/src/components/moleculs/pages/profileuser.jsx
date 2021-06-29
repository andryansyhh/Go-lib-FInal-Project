import React, { useEffect, useState } from "react";
import { Form, Figure, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleButton from "react-google-button";
import { registerUser, resetForm } from "../../../redux/user/userAction";
import imageRegis from "../../../assets/Mobile-login-pana.svg";
import { useHistory } from "react-router";
import {
  fetchOneUser,
  updateUser,
} from "../../../redux/admin/user/adminAction";
import Loading from "../spinner/Spinner";

const Update = () => {
  const { user, error, isLoading, success } = useSelector(
    (state) => state.admin
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const userId = localStorage.getItem("userId");
  const [confirm, setConfirm] = useState("");
  const [errorPass, setErrorPass] = useState(false);

  useEffect(() => {
    dispatch(resetForm());
    dispatch(fetchOneUser(userId));

    console.log(user);
  }, []);

  const updateSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      user_name: userName,
      email: email,
      password: confirm,
    };

    if (pass === confirm) {
      dispatch(updateUser(userId, data));
      clearPass();
    } else setErrorPass(true);
  };

  const clearPass = () => {
    document.getElementById("clear").reset();
  };

  return (
    <>
      <Header />
      <div className="container-fluid page-container">
        <div className="container">
          <div className="row justify-content-center align-items-start">
            <div className="col-sm">
              <div className="img-container">
                {isLoading ? (
                  <Loading />
                ) : (
                  <div className="mt-3" id="page-content-wrapper">
                    <div className="col-sm d-flex justify-content-start me-4">
                      <div
                        className="card edituser-card h-100"
                        style={{
                          minWidth: "25vw",
                          borderRadius: "10px",
                          minHeight: "39vh",
                        }}
                      >
                        <div className="card-body">
                          {user && (
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <h2 className="title mb-4 mx-auto">
                                  {" "}
                                  Your Profile{" "}
                                </h2>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-sm d-flex align-items-center">
                                    <h4 className="">Full Name :</h4>
                                  </div>
                                  <div className="col-sm d-flex align-items-center justify-content-end">
                                    <h4 className="title">{user.data.name}</h4>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-sm d-flex align-items-center">
                                    <h4 className="">Username :</h4>
                                  </div>
                                  <div className="col-sm d-flex align-items-center justify-content-end">
                                    <h4 className="title ">
                                      {user.data.user_name}
                                    </h4>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="row">
                                  <div className="col-sm d-flex align-items-center">
                                    <h4 className="">Email :</h4>
                                  </div>
                                  <div className="col-sm d-flex align-items-center justify-content-end">
                                    <h4 className="title ">
                                      {user.data.email}
                                    </h4>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-sm form-container">
              <h1 className="title mb-4 mx-auto"> Update Your Profile </h1>
              {error && <Alert variant="danger">{error}</Alert>}
              {success && <Alert variant="success">{success}</Alert>}
              <Form className="" id="clear" onSubmit={updateSubmit}>
                <Form.Group className="" controlId="formBasicEmail">
                  <Form.Control
                    type="fullname"
                    placeholder="Full Name"
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
                    placeholder="New Password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      e.preventDefault();
                      setPass(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="new-password"
                    onChange={(e) => {
                      e.preventDefault();
                      setConfirm(e.target.value);
                    }}
                  />
                </Form.Group>
                {errorPass && !success && (
                  <Alert variant="danger">Password not match</Alert>
                )}
                <Form.Group className="" controlId="formButton">
                  <Form.Control
                    className="btn btn-primary"
                    type="submit"
                    value={isLoading ? "Loading..." : "Save Change"}
                    disabled={isLoading ? true : false}
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

export default Update;
