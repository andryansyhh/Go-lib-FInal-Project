import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Form, Button, Alert, ProgressBar } from "react-bootstrap";
import ToggleMenu from "../ToggleMenu";
import { fetchCategories } from "../../../redux/admin/category/adminCategoryAction";
import {
  resetForm,
  updateBook,
  updateBookFile,
} from "../../../redux/admin/book/adminBookAction";
import BookContentUpdate from "./BookContentUpdate";

function UpdateBook() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [categoryID, setCategoryID] = useState(0);
  const [file, setFile] = useState("");
  const { isLoading, fileProgress } = useSelector((state) => state.adminBook);
  const { categories } = useSelector((state) => state.adminCategory);
  const bookID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );
  const formData = new FormData();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(resetForm());
  }, []);

  const submitUpdateBook = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      url_video: urlVideo,
      category_id: parseInt(categoryID),
    };

    formData.append("file", file);

    if (title || urlVideo || categoryID) {
      dispatch(updateBook(bookID, data, history));
    }
    if (file) {
      dispatch(updateBookFile(bookID, formData, history));
    }
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Update Book</h3>
        <div className="container-fluid">
          <div className="container d-flex flex-column justify-content-center align-items-center mb-3">
            <BookContentUpdate />
            <Form className="col-sm-6 mt-1" onSubmit={submitUpdateBook}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  placeholder="Embed Video"
                  onChange={(e) => {
                    e.preventDefault();
                    setUrlVideo(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  name="file"
                  onChange={(e) => {
                    e.preventDefault();
                    setFile(e.target.files[0]);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formButton">
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onClick={(e) => {
                    e.preventDefault();
                    setCategoryID(e.target.value);
                  }}
                >
                  <option selected>Choose category ...</option>
                  {categories.data &&
                    categories.data.map((data, index) => {
                      return (
                        <option key={index} value={data.id}>
                          {data.category_name}
                        </option>
                      );
                    })}
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formButton">
                <Button
                  variant="primary"
                  type="submit"
                  disabled={
                    !!!title && !!!urlVideo && !!!categoryID && !!!file
                      ? true
                      : false
                  }
                >
                  {isLoading ? "Loading..." : "Update"}
                </Button>
              </Form.Group>
              {file && fileProgress !== 0 && fileProgress !== 100 && (
                <ProgressBar
                  animated
                  now={fileProgress}
                  label={`${fileProgress}%`}
                />
              )}
              {fileProgress == 100 && (
                <Alert variant="success">Update file succeed</Alert>
              )}
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBook;
