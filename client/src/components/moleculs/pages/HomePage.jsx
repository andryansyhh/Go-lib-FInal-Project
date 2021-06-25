import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import homeImage from "../../../assets/Code-typing-bro.svg";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid  page-container">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-sm">
              <div className="row">
                <h1 className="">
                  Welcome user, you can get and learn programming source here
                </h1>
                <button type="button" class="btn btn-primary">
                  More
                </button>
              </div>
            </div>
            <div className="col-sm">
              <div className="img-container">
                <img src={homeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  page-container">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-sm">
              <div className="row">
                <h2 className="text-center">List all Category</h2>
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
};

export default HomePage;
