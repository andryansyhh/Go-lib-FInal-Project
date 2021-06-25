import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import contentAction from "../../../redux/content/contentAction";
import { Card, Button } from "react-bootstrap";
import noImage from "../../../assets/noimage.png";
import styled from "styled-components";
import Header from "../header/header";
import Footer from "../footer/footer";

const ContentPage = () => {
  const contentData = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(contentAction.fetchAllContents());
  }, []);

  const previousPage = () => {
    if (currentPage !== 0) {
      setCurrentPage((currentPage - 1) % 9);
    }
  };

  const nextPage = () => {
    if (currentPage + 1 < contentData.data.articles.length) {
      setCurrentPage((currentPage + 1) % 9);
    }
  };

  const NewCard = styled.div`
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    }
  `;

  return (
    <>
      <Header />
      {Object.keys(contentData).length === 0 ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="container">
          <h3>Programming Content</h3>
          <div className="d-flex justify-content-between">
            <Button size="sm" href="/">
              Back to Landing
            </Button>
            <div>
              <Button
                size="sm"
                onClick={previousPage}
                className="mr-3"
                disabled={currentPage == 0 ? true : false}
              >
                Prev
              </Button>
              <Button
                size="sm"
                onClick={nextPage}
                disabled={currentPage == 8 ? true : false}
              >
                Next
              </Button>
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col-sm d-flex flex-wrap justify-content-center">
              {contentData &&
                contentData.data.articles
                  .slice(currentPage * 9, 9 * (currentPage + 1))
                  .map((data, index) => {
                    return (
                      <NewCard
                        style={{ width: "15rem", margin: "2rem" }}
                        key={index}
                      >
                        <a
                          href={data.url}
                          className="text-decoration-none"
                          target="_blank"
                        >
                          <Card.Img
                            variant="top"
                            src={data.urlToImage || noImage}
                            style={{
                              maxHeight: "25vh",
                              minHeight: "25vh",
                              padding: "1rem",
                            }}
                          />
                          <Card.Body
                            className="text-left"
                            style={{ fontSize: "0.8rem" }}
                          >
                            <Card.Title
                              style={{
                                fontSize: "1rem",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: "5",
                                overflow: "hidden",
                                textAlign: "justify",
                              }}
                            >
                              {data.title}
                            </Card.Title>
                            <Card.Text
                              style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: "2",
                                overflow: "hidden",
                                color: "black",
                              }}
                            >
                              {data.description}
                            </Card.Text>
                          </Card.Body>
                        </a>
                      </NewCard>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ContentPage;
