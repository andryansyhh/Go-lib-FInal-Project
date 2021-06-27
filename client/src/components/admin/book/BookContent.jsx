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
  deleteBook,
  fetchBooks,
} from "../../../redux/admin/book/adminBookAction";

const BookContent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.adminBook);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [bookTitle, setBookTitle] = useState("");
  const [bookID, setBookID] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);
  var currentBooks = [];
  var filterSearch = [];
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  if (books.data) {
    currentBooks = books.data.slice(indexOfFirstUser, indexOfLastUser);
    filterSearch = books.data.filter((item) => {
      return search !== "" ? item.title.includes(search) : "";
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
            <SearchMenu searching={searching} searchBy="Search by title" />
          </div>
          <h3 className="mt-1">Books</h3>
          <div className="container-fluid d-flex justify-content-end">
            <Button
              href="/admin/books/add"
              className="mb-2 btn btn-primary text-light"
            >
              Add Book
            </Button>
          </div>
          <div className="container">
            <table className="table table-striped table-bordered table-responsive-xl">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>File</th>
                  <th>Video</th>
                  <th>Category ID</th>
                  <th colSpan="2" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {search == ""
                  ? currentBooks.map((data, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {usersPerPage * currentPage == 10
                              ? index + 1
                              : currentPage + index + usersPerPage - 1}
                          </td>
                          <td>{data.title}</td>
                          <td>{data.url_file}</td>
                          <td
                            style={{
                              maxWidth: "150px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {data.url_video}
                          </td>
                          <td>{data.category_id}</td>

                          <td>
                            <Button
                              href={"/admin/books/edit/" + data.id}
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
                                setBookID(data.id);
                                setBookTitle(data.title);
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
                                  Are you sure to delete {bookTitle} ?
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
                                    dispatch(deleteBook(bookID, history));
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
                        <td>{data.title}</td>
                        <td>{data.url_file}</td>
                        <td
                          style={{
                            maxWidth: "150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {data.url_video}
                        </td>
                        <td>{data.category_id}</td>

                        <td>
                          <Button
                            href={"/admin/books/edit/" + data.id}
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
                              setBookID(data.id);
                              setBookTitle(data.title);
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
                                Are you sure to delete {bookTitle} ?
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
                                  dispatch(deleteBook(bookID, history));
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
            </table>
            <div className="d-flex justify-content-end">
              {search == "" && (
                <Pagination
                  usersPerPage={usersPerPage}
                  totalUsers={books.data ? books.data.length : 0}
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

export default BookContent;
