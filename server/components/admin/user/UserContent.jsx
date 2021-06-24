import React, { useEffect, useState } from "react";
import { Button, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteUser, fetchUsers } from "../../../redux/admin/user/adminAction";
import Loading from "../../moleculs/spinner/Spinner";
import SearchMenu from "../SearchMenu";
import style from "../user/styles.css";
import ToggleMenu from "../ToggleMenu";
import Pagination from "./Pagination";

const UserContent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector((state) => state.admin);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [user, setUser] = useState("");
  const [userID, setUserID] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  var currentUsers = [];
  if (users.data) {
    currentUsers = users.data.slice(indexOfFirstUser, indexOfLastUser);
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-3" id="page-content-wrapper">
          <div className="d-flex justify-content-between">
            <ToggleMenu />
            <SearchMenu />
          </div>
          <h3 className="mt-1">Users</h3>
          <div className="container-fluid d-flex justify-content-end">
            <Button href="/admin/users/add" className="mb-2">
              Add User
            </Button>
          </div>
          <div className="container-fluid">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th colSpan="2" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentUsers &&
                  currentUsers.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {usersPerPage * currentPage == 5
                            ? index + 1
                            : currentPage + index + usersPerPage - 1}
                        </td>
                        <td>{data.name}</td>
                        <td>{data.user_name}</td>
                        <td>{data.email}</td>
                        <td>
                          <Button href={"/admin/users/edit/" + data.id}>
                            Update
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => {
                              setShow(true);
                              setUserID(data.id);
                              setUser(data.user_name);
                            }}
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
                                Are you sure to delete user {user} ?
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
                                  dispatch(deleteUser(userID, history));
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
              <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.data ? users.data.length : 0}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserContent;
