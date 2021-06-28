import React, { useEffect, useState } from "react";
import { Form, Figure, Alert, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import GoogleButton from "react-google-button";
import { registerUser, resetForm } from "../../../redux/user/userAction";
import imageRegis from "../../../assets/Mobile-login-pana.svg";
import { useHistory } from "react-router";
import { fetchOneUser, updateUser } from "../../../redux/admin/user/adminAction";
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

        console.log(user)
    }, []);

    const updateSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: name,
            user_name: userName,
            email: email,
            password: confirm,
        };

        checkPass();
        if (errorPass === false) {
            dispatch(updateUser(userId, data));
        }

    };

    const checkPass = () => {
        if (pass !== confirm) { setErrorPass(true) }
    }

    return (
        <>
            <Header />
            <div className="container-fluid page-container">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-sm">
                            <div className="img-container">
                                {isLoading ? (
                                    <Loading />
                                ) : (
                                    <div className="mt-3" id="page-content-wrapper">
                                        <div className="col-sm-4 d-flex justify-content-center mx-auto">
                                            <Table responsive="sm">
                                                {user && (
                                                    <tbody>
                                                        <tr>
                                                            <th>Full Name</th>
                                                            <td>{user.data.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>User Name</th>
                                                            <td>{user.data.user_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Email</th>
                                                            <td>{user.data.email}</td>
                                                        </tr>
                                                    </tbody>
                                                )}
                                            </Table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-sm form-container">
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}
                            {!success && (
                                <Form className="" onSubmit={updateSubmit}>
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
                                    {errorPass && (
                                        <Alert variant="danger">
                                            Password not match
                                        </Alert>
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

export default Update;
