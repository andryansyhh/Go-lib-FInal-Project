import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Header from "../header/header";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { fetchCategories, fetchOneCategory } from "../../../redux/admin/category/adminCategoryAction";
import Loading from "../../moleculs/spinner/Spinner";
import styled from "styled-components";
import FolderImage from "../../../assets/folder.svg";

const AllCategori = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const { categories, isLoading } = useSelector((state) => state.adminCategory);
    const categoryID = location.pathname.substr(
        location.pathname.lastIndexOf("/") + 1
    );

    useEffect(() => {
        dispatch(fetchCategories())
        console.log(categories)
    }, []);

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
            <div className="container">
                <div className="row">
                    {/* <div className="col">
                        {category && (
                            // <h2 className="text-center">{category.data.category_name}</h2>
                        )}
                    </div> */}
                </div>
                <div className="row justify-content-between">
                    <div className="col-3">
                        <button
                            className="btn btn-primary text-light"
                            onClick={() => {
                                history.push("/home");
                            }}
                        >
                            Back to Home
                        </button>
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
                                        placeholder="Search Categori.."
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
                {isLoading ? (
                    <Loading />
                ) : (
                    <div className="row">
                        {categories.data &&
                            categories.data.map((category, index) => {
                                return (
                                    <NewCard
                                        style={{ width: "12rem", margin: "1rem" }}
                                        key={index}
                                    >
                                        <a
                                            href={`/categories/${category.id}`}
                                            className="text-decoration-none"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                dispatch(fetchOneCategory(category.id));
                                                history.push(`/categories/${category.id}`);
                                            }}
                                        >
                                            <Card.Img
                                                variant="top"
                                                src={FolderImage}
                                                style={{
                                                    maxHeight: "20vh",
                                                    minHeight: "20vh",
                                                    padding: "1rem",
                                                }}
                                            />
                                            <Card.Body
                                                className="text-center"
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                <Card.Title
                                                    style={{
                                                        fontSize: "1rem",
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient: "vertical",
                                                        WebkitLineClamp: "5",
                                                        overflow: "hidden",
                                                        textAlign: "center",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {category.category_name}
                                                </Card.Title>
                                            </Card.Body>
                                        </a>
                                    </NewCard>
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
};

export default AllCategori;
