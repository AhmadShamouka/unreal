import React, { useState, useEffect } from "react";
import "./styleUserNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "react-redux";
import { FaUser } from "react-icons/fa";
const UserNavbar = () => {
  const { username, sex, country, age, isAuthenticated } = useSelector(
    (state) => state.login
  );
  const store = useStore();
  const dispatch = useDispatch();
  const [active, setActive] = useState("nav__menu_user");
  const [icon, setIcon] = useState("nav__toggler");
  const [edit, setEdit] = useState("none");
  const closeMenuOnResize = () => {
    if (window.innerWidth > 768) {
      setActive("nav__menu_user");
      setIcon("nav__toggler");
    }
  };
  const Username = username;
  useEffect(() => {
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  const navToggle = () => {
    if (active === "nav__menu_user") {
      setActive("nav__menu_user nav__active");
    } else setActive("nav__menu_user");

    if (icon === "nav__toggler") {
      setIcon("nav__x toggle");
    } else setIcon("nav__toggler");
  };
  const editProfile = () => {
    setEdit((prevEdit) => (prevEdit === "none" ? "edit__active" : "none"));
    console.log(edit);
  };
  return (
    <nav>
      <div className={active}>
        <div className="logo-nav-user" href="/"></div>
        <ul className="links_user flex center">
          <li className="nav__item">
            <a href="/" className="nav__link_user">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link_user">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link_user">
              Template
            </a>
          </li>
        </ul>
        <div>
          <div className="buttons flex center">
            <FaUser color="white" onClick={editProfile} />
            <h3>{Username}</h3>
          </div>
          <div className={edit}>
            <h2>HELLO</h2>
          </div>
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

export default UserNavbar;
