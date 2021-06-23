import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Form, Button, Alert } from "react-bootstrap";
import ToggleMenu from "../ToggleMenu";
import { createBook } from "../../../redux/admin/book/adminBookAction";
import { fetchCategories } from "../../../redux/admin/category/adminCategoryAction";

function CreateBook() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [categoryID, setCategoryID] = useState(0);
  const [file, setFile] = useState("");
  const { error, isLoading } = useSelector((state) => state.adminBook);
  const { categories } = useSelector((state) => state.adminCategory);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const formData = new FormData();

  const submitCreateBook = (e) => {
    e.preventDefault();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("url_video", urlVideo);
    formData.append("category_id", categoryID);

    dispatch(createBook(formData, history));
  };

  return (
    <>
      <div className="mt-3" id="page-content-wrapper">
        <div className="d-flex justify-content-between">
          <ToggleMenu />
        </div>
        <h3>Add New Book</h3>
        <div className="container-fluid">
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="container d-flex justify-content-center">
            <Form
              className="col-sm-6 mt-5"
              onSubmit={submitCreateBook}
              encType="multipart/form-data"
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={(e) => {
                    e.preventDefault();
                    setTitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="text"
                  name="url_video"
                  placeholder="URL Video"
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
                  required
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
                  name="category_id"
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

export default CreateBook;
