import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { fetchBooks } from "../../../redux/admin/book/adminBookAction";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";

const DetailCategoriPage = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((state) => state.adminBook);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  console.log(books);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center">List All Category</h2>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-3">
            <button className="btn btn-primary text-light">Back to Home</button>
          </div>
          <div className="col-3">
            <form action="">
              <div className="form-row">
                <div className="col-10">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="form-control"
                    placeholder="Search Books.."
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-primary">
                    <li className="fa fa-search text-white"></li>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          {books.data &&
            books.data.map((book) => {
              return (
                <div className="col-6 col-md-3 mt-4">
                  <Card className="shadow-sm">
                    <Card.Img
                      variant="top"
                      src="https://www.iconpacks.net/icons/2/free-pdf-download-icon-2617-thumb.png"
                    />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      {/* <Card.Text>{book.url_file}</Card.Text> */}
                      <Button variant="primary" className="text-light">
                        Go somewhere
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DetailCategoriPage;
