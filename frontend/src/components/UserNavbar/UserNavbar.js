import React, { useState, useEffect } from "react";
import "./styleUserNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { useStore } from "react-redux";
import { FaUser } from "react-icons/fa";
import store from "../../core/store";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../common/base/button/Button";
import axios from "axios";
import { loginSuccess, logoutSuccess } from "../../pages/Login/loginSlice";
import base_url from "../../common/base/config";
const UserNavbar = () => {
  const navigate = useNavigate();
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
    if (edit === "none") {
      setEdit("edit__active");
    } else setEdit("none");
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      const authorization = "Bearer " + token;
      const getUser = async () => {
        try {
          const response = await axios.get(`${base_url}api/user`, {
            headers: {
              Authorization: authorization,
            },
          });
          const userData = response.data.user;
          dispatch(
            loginSuccess({
              username: userData.username,
              age: userData.age,
              admin: userData.admin,
              sex: userData.sex,
              country: userData.country,
            })
          );
          console.log(store.getState());
        } catch (error) {
          console.error("Error fetching user data:", error);
          // Handle error more gracefully, e.g., display a message to the user
        }
      };
      getUser();
    } else {
      // Token doesn't exist, handle accordingly (e.g., navigate to sign-in page)
      localStorage.clear();
      navigate("/signin");
    }
  }, [dispatch, base_url, navigate]);
  return (
    <nav>
      <div className={active}>
        <Link to="/">
          <div className="logo-nav-user"></div>
        </Link>

        <ul className="links_user flex center">
          <li className="nav__item">
            <a href="/" className="nav__link_user">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="/occasion" className="nav__link_user">
              Occasion
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link_user">
              Find
            </a>
          </li>
        </ul>
        <div>
          <div className="buttons flex center">
            <FaUser color="white" onClick={editProfile} />
            <h3>{Username}</h3>
          </div>
          <div className={edit}>
            <div>
              <Button text="Log Out" onClick={handleLogOut} />
            </div>
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
