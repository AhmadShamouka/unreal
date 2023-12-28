import React from "react";
import Button from "../../common/base/Button";

const Navbar = ({ bgColor }) => {
  const handlePost = () => {};
  return (
    <div>
      <header className="header">
        <nav className="navbar-container">
          <a href="/" className="logo">
            Brand
          </a>
          <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
          <div className="menu" id="menu">
            <ul className="menu-inner">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Home
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Feature
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Product
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <Button
            text="Sign In"
            bgColor="blue"
            onClicked={() => handlePost()}
          />
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
