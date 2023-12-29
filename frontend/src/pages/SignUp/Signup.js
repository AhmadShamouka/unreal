import React from "react";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="container flex">
        <div className="child-img"></div>
        <div className="child-inputs flex center">
          <div className="child-logo">
            <img href="/" src={logo} alt="logo" />
          </div>
          <Input
            text="Username"
            placeholder="Enter your Username"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
          />
          <Input
            text="Email"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Email"
          />
          <Input
            text="Passowrd"
            type="passowrd"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Password"
          />
          <Input
            text="Age"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Age"
          />
          <Input
            text="Country"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Country"
          />
          <Input
            text="Sex"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Sex"
          />
          <Button text="Sign Up" bgColor="white-bg" textColor="blue-text" />
          <a href="/login">Don't have Account!Create New?</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
