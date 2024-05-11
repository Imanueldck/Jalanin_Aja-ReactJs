import React from "react";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-white text-center p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h4>My Website</h4>
            <h5>
              <i>"Temukan Petualanganmu Bersama Jalanin Aja"</i>
            </h5>
          </div>
          <div className="col-md-6">
            <h5>Top Link</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#packages">Packages</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col text-center">&copy; 2024 Jalanin Aja,All Right Reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
