import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Form, Button, Alert } from "react-bootstrap";
import ToggleMenu from "../ToggleMenu";
import { createCategory } from "../../../redux/admin/category/adminCategoryAction";

function CreateCategory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("");
  const { error, isLoading } = useSelector((state) => state.adminCategory);

  const submitCreateCategory = (e) => {
    e.preventDefault();
    const data = {
      category_name: categoryName,
    };

    dispatch(createCategory(data, history));
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Add New Category</h3>
        <div className="container-fluid">
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="container d-flex justify-content-center">
            <Form className="col-sm-6 mt-5" onSubmit={submitCreateCategory}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Category Name"
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setCategoryName(e.target.value);
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

export default CreateCategory;
