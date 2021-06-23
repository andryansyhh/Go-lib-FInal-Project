import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Form, Button, Alert } from "react-bootstrap";
import ToggleMenu from "../ToggleMenu";
import { updateCategory } from "../../../redux/admin/category/adminCategoryAction";
import CategoryContentUpdate from "./CategoryContentUpdate";

function UpdateCategory() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [categoryName, setCategoryName] = useState("");
  const { isLoading } = useSelector((state) => state.adminCategory);
  const categoryID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );

  const submitUpdateCategory = (e) => {
    e.preventDefault();
    const data = {
      category_name: categoryName,
    };

    dispatch(updateCategory(categoryID, data));
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Update Category</h3>
        <div className="container-fluid">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <CategoryContentUpdate />
            <Form className="col-sm-6 mt-1" onSubmit={submitUpdateCategory}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Category Name"
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
                  disabled={!!!categoryName ? true : false}
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

export default UpdateCategory;
