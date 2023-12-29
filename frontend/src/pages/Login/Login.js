import React from "react";
import logo from "../../common/base/logo/image/logo.png";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import "./styles.css";

const Login = () => {
  return (
    <div className="login">
      <div className="container flex">
        <div className="child-img"></div>
        <div className="child-inputs flex center">
          <div className="child-logo">
            <img href="/" src={logo} alt="logo" />
          </div>
          <Input
            text="Email"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Email"
            required
          />
          <Input
            text="Passowrd"
            type="passowrd"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Password"
          />

          <Button text="Sign In" bgColor="white-bg" textColor="blue-text" />

          <a href="/login">Don't have Account!Create New?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
