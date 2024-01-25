import React, { useState } from "react";
import logo from "../../common/base/logo/image/logo.png";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import "./styles.css";
import { useStore } from "react-redux";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Login/loginSlice";
const Login = () => {
  const [active, setActive] = useState("errorMsg");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const store = useStore();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );
      const header = response.data.authorisation.token;
      localStorage.setItem("jwtToken", header);

      if (response.data.user.admin === 1) {
        navigate("/dashboard");
      } else if (response.data.user.admin === 0) {
        navigate("/occasion");
      }
      dispatch(
        loginSuccess({
          username: response.data.user.username,
          age: response.data.user.age,
          admin: response.data.user.admin,
          sex: response.data.user.sex,
          country: response.data.user.country,
        })
      );
    } catch (error) {
      console.error("Error during form submission:", error);
      if (error.message === "Request failed with status code 401") {
        setActive("errorMsg-signup");
      }
    }
  };
  return (
    <div className="login">
      <div className="container-login flex">
        <div className="child-img"></div>
        <form onSubmit={handleSubmit} className="child-inputs flex center">
          <div className="child-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Input
            required
            onChange={handleChange}
            text="Email"
            name="email"
            type="email"
            textColor="text-white"
            placeholder="Enter your Email"
          />
          <Input
            required
            onChange={handleChange}
            text="Password"
            name="password"
            type="password"
            placeholder="Enter your Password (min. 6 characters)"
            pattern=".{6,}"
            textColor="text-white"
          />
          <Button
            type="submit"
            text="Sign In"
            bgColor="white-bg"
            textColor="blue-text"
          />
          <div className={active}>
            <h5>Email address Does not exists!</h5>
          </div>
          <div className="flex center">
            <a> Don't have Account?</a>
            <Link to="/signin">
              <h4>Create One</h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
