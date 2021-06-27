import React, { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Loading from "../../moleculs/spinner/Spinner";
import SearchMenu from "../SearchMenu";
import style from "../user/styles.css";
import ToggleMenu from "../ToggleMenu";
import Pagination from "../user/Pagination";
import {
  deleteCategory,
  fetchCategories,
} from "../../../redux/admin/category/adminCategoryAction";

const CategoryContent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { categories, isLoading } = useSelector((state) => state.adminCategory);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [categoryName, setCategoryName] = useState("");
  const [categoryID, setCategoryID] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  var currentCategories = [];
  var filterSearch = [];
  if (categories.data) {
    currentCategories = categories.data.slice(
      indexOfFirstUser,
      indexOfLastUser
    );
    filterSearch = categories.data.filter((item) => {
      return search !== "" ? item.category_name.includes(search) : "";
    });
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const searching = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-3" id="page-content-wrapper">
          <div className="d-flex justify-content-between">
            <ToggleMenu />
            <SearchMenu
              searching={searching}
              searchBy="Search by category name"
            />
          </div>
          <h3 className="mt-1">Categories</h3>
          <div className="container-fluid d-flex justify-content-end">
            <Button
              href="/admin/categories/add"
              className="mb-2 btn btn-primary text-light"
            >
              Add Category
            </Button>
          </div>
          <div className="container-fluid">
            <Table striped bordered hover responsive="lg">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Category Name</th>
                  <th colSpan="2" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {search == ""
                  ? currentCategories.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {usersPerPage * currentPage == 10
                              ? index + 1
                              : currentPage + index + usersPerPage - 1}
                          </td>
                          <td>{data.category_name}</td>
                          <td>
                            <Button
                              href={"/admin/categories/edit/" + data.id}
                              className="btn btn-primary text-light"
                            >
                              Update
                            </Button>
                          </td>
                          <td>
                            <Button
                              variant="danger"
                              onClick={() => {
                                setShow(true);
                                setCategoryID(data.id);
                                setCategoryName(data.category_name);
                              }}
                              className="btn btn-primary text-light"
                            >
                              Delete
                            </Button>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              className="mt-5"
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>
                                  Are you sure to delete category {categoryName}{" "}
                                  ?
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                <Button
                                  variant="danger"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(
                                      deleteCategory(categoryID, history)
                                    );
                                    handleClose();
                                  }}
                                >
                                  Yes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </td>
                        </tr>
                      );
                    })
                  : null}
                {filterSearch &&
                  filterSearch.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {usersPerPage * currentPage == 10
                            ? index + 1
                            : currentPage + index + usersPerPage - 1}
                        </td>
                        <td>{data.category_name}</td>
                        <td>
                          <Button
                            href={"/admin/categories/edit/" + data.id}
                            className="btn btn-primary text-light"
                          >
                            Update
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setShow(true);
                              setCategoryID(data.id);
                              setCategoryName(data.category_name);
                            }}
                            className="btn btn-primary text-light"
                          >
                            Delete
                          </Button>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            className="mt-5"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Are you sure to delete category {categoryName} ?
                              </Modal.Title>
                            </Modal.Header>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button
                                variant="danger"
                                onClick={(e) => {
                                  e.preventDefault();
                                  dispatch(deleteCategory(categoryID, history));
                                  handleClose();
                                }}
                              >
                                Yes
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
            <div className="d-flex justify-content-end">
              {search == "" && (
                <Pagination
                  usersPerPage={usersPerPage}
                  totalUsers={categories.data ? categories.data.length : 0}
                  paginate={paginate}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryContent;
