import React from "react";


const socMeds = [{className:"fab fa-instagram mx-3"}, {className:"fab fa-facebook mx-3"}, {className:"fab fa-twitter mx-3"},];

const Footer = () => {


  return (
    <div className="position-absolute bottom-0 start-0 end-0">
      <footer className="d-flex flex-column bg-light">
        <div className="footer-top row">
          <div className="col-4">
            <h1>Go-Lib</h1>
          </div>
          <div className="col-4 "><h3>Our Contact</h3>
          <ul className="list-unstyled">
              <li>golib@gmail.com</li>
              <li>+622134567</li>
              <li>Jakarta Selatan, Indonesia</li>
          </ul>
          </div>
          <div className="col-4 "><h3>Social Media</h3>
          <div>
              {socMeds.map(socMed => (<i className= {socMed.className}></i> ))}
          </div>
          </div>
        </div>
        <div className="footer-bottom">Copyright ©2021 Go-lib Team</div>
      </footer>
      </div>
  );
};

export default Footer;
