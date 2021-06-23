import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import learningbro from "../../../assets/Learning-bro.svg";

function LandingPage() {
  return (
    <div>
      <Header />
      <div className="container-fluid  page-container section1-container">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm">
              <div className="row">
                <h1 className="title">
                  “No matter how busy you may think you are, you must find time
                  for reading, or surrender yourself to self-chosen ignorance.”
                </h1>
                <p>― Atwood H. Townsend</p>
                <button type="button" class="btn btn-primary">
                  More
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
            <div className="col-sm text-center">20+ Katergori</div>
            <div className="col-sm text-center">80+ Materi</div>
          </div>
        </div>
      </div>

      <div className="container-fluid  page-container section3-container">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm">
              <div className="row">
                <h2 className="text-center">Content</h2>
              </div>
              <div className="row content-container">
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm card-container">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
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
