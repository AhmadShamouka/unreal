import React, { useState } from "react";

import logo from "../../common/base/logo/image/logo.png";
import "./styleUserNavbar.css";
const UserNavbar = () => {
  const [active, setActive] = useState("nav__menu_user");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu_user") {
      setActive("nav__menu_user nav__active");
    } else setActive("nav__menu_user");

    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <div className={active}>
        <img src={logo} alt="logo" className="nav__brand" />
        <ul className="links">
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
        <h3>UserName</h3>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default UserNavbar;
