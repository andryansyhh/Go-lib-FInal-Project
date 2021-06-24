import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchOneUser } from "../../../redux/admin/user/adminAction";
import Loading from "../../moleculs/spinner/Spinner";
import style from "../user/styles.css";

const UserContentUpdate = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isLoading } = useSelector((state) => state.admin);
  const userID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    dispatch(fetchOneUser(userID));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-3" id="page-content-wrapper">
          <div className="col-sm-4 d-flex justify-content-center mx-auto">
            <Table responsive="sm">
              {user && (
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{user.data.id}</td>
                  </tr>
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
    </>
  );
};

export default UserContentUpdate;
