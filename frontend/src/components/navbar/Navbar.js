import React, { useState } from "react";
import "./stylesNavbar.css";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";
import logo1 from "../../common/base/logo/image/UNREAL (2).png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  const navigateToSignin = () => {
    navigate("/signin");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <nav>
      <div className={active}>
        <div className="logo-nav">
          <img src={logo} alt="logo" href="/" className="nav__brand" />
        </div>
        <ul className="links flex center">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Template
            </a>
          </li>
        </ul>
        <div className="buttons">
          <Button
            text="Sign In"
            bgColor="white-bg"
            textColor="blue-text"
            onClicked={navigateToSignin}
          />
          <Button text="Sign Up" onClicked={navigateToSignup} />
        </div>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
