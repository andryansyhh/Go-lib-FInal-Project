import React, { useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useDispatch } from "react-redux";
import contentAction from "../../../redux/content/contentAction";
import { useHistory } from "react-router";

import learningbro from "../../../assets/Learning-bro.svg";

function LandingPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <div className="container-fluid  section1-container">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm">
              <div className="row">
                <h1>
                  “No matter how busy you may think you are, you must find time
                  for reading, or surrender yourself to self-chosen ignorance.”
                </h1>
                <p>― Atwood H. Townsend</p>
                <br />
                <button
                  onClick={() => {
                    history.push("/login");
                  }}
                  type="button"
                  class="btn btn-primary"
                >
                  Go to Home Page
                </button>
              </div>
            </div>
            <div className="col-sm">
              <div className="img-container">
                <img
                  classname="img-fluid img-landing"
                  src={learningbro}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  page-container section2-container">
        <div className="container">
          <div className="row ">
            <div className="col-sm align-items-center">
              <div className="row ">
                <i class="fas fa-folder-open fa-5x"></i>
              </div>
              <div className="row text-center">20+ Categories</div>
            </div>
            <div className="col-sm align-items-center">
              <div className="row">
                <i class="fas fa-book fa-5x"></i>
              </div>
              <div className="row text-center">80+ E-books</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  page-container section3-container">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm">
              <div className="row">
                <h2 className="text-center">Tech news</h2>
              </div>
              <div className="row content-container">
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
