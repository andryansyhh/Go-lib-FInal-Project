import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchOneBook } from "../../../redux/admin/book/adminBookAction";
import Loading from "../../moleculs/spinner/Spinner";
import style from "../user/styles.css";

const BookContentUpdate = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { book, isLoading } = useSelector((state) => state.adminBook);
  const bookID = location.pathname.substr(
    location.pathname.lastIndexOf("/") + 1
  );

  useEffect(() => {
    dispatch(fetchOneBook(bookID));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mt-3" id="page-content-wrapper">
          <div className="col-sm d-flex justify-content-center mx-auto">
            <Table responsive="sm">
              {book && (
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{book.data.id}</td>
                  </tr>
                  <tr>
                    <th>Title</th>
                    <td>{book.data.title}</td>
                  </tr>
                  <tr>
                    <th>File</th>
                    <td>{book.data.url_file}</td>
                  </tr>
                  <tr>
                    <th>URL Video</th>
                    <td>{book.data.url_video}</td>
                  </tr>
                  <tr>
                    <th>Category ID</th>
                    <td>{book.data.category_id}</td>
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

export default BookContentUpdate;
