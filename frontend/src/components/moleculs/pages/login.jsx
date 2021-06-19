import React from "react";
import {Form, Figure} from "react-bootstrap"
import Footer from "../footer/footer"
import Header from "../header/header";


const Register = () => (
    <>
<Header/>
<div className="container d-flex justify-content-end">
<Form className="col-4 mt-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formButton" >
      <Form.Control className="btn btn-primary" type="Button" value="Login" />
  </Form.Group>
</Form>
</div>
<Footer/>
</>
)

export default Register;