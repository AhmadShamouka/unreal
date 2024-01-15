import React, { useState, useEffect } from "react";
import "./stylesNavbar.css";
import Button from "../../common/base/button/Button";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const closeMenuOnResize = () => {
    if (window.innerWidth > 768) {
      setActive("nav__menu");
      setIcon("nav__toggler");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", closeMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    if (icon === "nav__toggler") {
      setIcon("nav__x toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav>
      <div className={active}>
        <div className="logo-nav" href="/"></div>
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
          <Link to="/signin">
            <Button text="Sign In" bgColor="white-bg" textColor="blue-text" />
          </Link>
          <Link to="/signup">
            <Button text="Sign Up" />
          </Link>
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
