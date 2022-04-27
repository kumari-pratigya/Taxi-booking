import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src="./img/logo.png" alt="logo" />
      </div>
      <header>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Home
            </a>
          </li>
          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Get Taxi
            </a>
          </li>
          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Services
            </a>
          </li>
          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Gallery
            </a>
          </li>
          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Testmonials
            </a>
          </li>

          <li>
            <a href="#" id="nav-direction" className="nav-link px-2 link-dark">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
