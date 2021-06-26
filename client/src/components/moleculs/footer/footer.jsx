import React from "react";
import { Link } from "react-router-dom";

const socMeds = [
  { className: "fab fa-instagram me-3", href: "https://www.instagram.com/syahandryan_/?hl=id" },
  { className: "fab fa-facebook me-3" },
  { className: "fab fa-twitter me-3" },
];

const Footer = () => {
  return (
    <div className="container-fluid footer-container ">
      <footer className="text-center">
        {/* footer top */}
        <div className="row justify-content-center footer-1">
          <div className="col-sm-4 d-flex justify-content-center">
            <h1>Go-Lib</h1>
          </div>
          <div className="col-sm-4 d-flex justify-content-center flex-column">
            <h3>Our Contact</h3>
            <ul className="list-unstyled">
              <li>golib@gmail.com</li>
              <li>+622134567</li>
              <li>Jakarta Selatan, Indonesia</li>
            </ul>
          </div>
          <div className="col-sm-4 d-flex justify-content-center align-self-start flex-column ">
            <div className="row">
              <h3>Social Media</h3>
            </div>
            <div className="row justify-content-start">
              <div className="col">

                {socMeds.map((socMed) => (
                  <a href={socMed.href} target="_blank"> <i className={socMed.className} ></i> </a>
                ))}

              </div>
            </div>
          </div>
        </div>
        {/* footer bottom */}
        <div>
          <div className="container">
            <div className="row justify-content-center footer">
              Copyright ©2021 Go-lib Team
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
