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
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import base_url from "../../common/base/config";
const Login = () => {
  const [wrong, setWrong] = useState("errorMsg");
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
  const handleGoogle = (credentialResponse) => {
    if (credentialResponse && credentialResponse.credential) {
      const decodedToken = jwtDecode(credentialResponse.credential);
      const header = credentialResponse.credential;
      localStorage.setItem("jwtToken", header);

      dispatch(
        loginSuccess({
          username: decodedToken.name,
        })
      );

      navigate("/occasion");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}api/login`, formData);
      const header = response.data.authorisation.token;
      localStorage.setItem("jwtToken", header);

      if (response.data.user.admin === 1) {
        navigate("/dashboard");
      } else if (response.data.user.admin === 0) {
        navigate("/occasion");
      } else if (response.data.message === "Unauthorized") {
        setWrong("errorMsg-signup");
      } else if (
        response.data.user.sex == "" ||
        response.data.user.country == "" ||
        response.data.user.password == "" ||
        response.data.user.age == ""
      ) {
        navigate("/profile");
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
      if (error.message === "Request failed with status code 401") {
        setWrong("errorMsg-signup");
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

          <div className={wrong}>
            <h5>Check your Email and Password</h5>
          </div>
          <GoogleLogin onSuccess={handleGoogle} />
          <div className="flex center">
            <a> Don't have Account?</a>
            <Link to="/signup">
              <h4>Create One</h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
