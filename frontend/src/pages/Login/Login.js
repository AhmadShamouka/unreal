import React from "react";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import "./styles.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
const Login = () => {
  return (
    <>
      <UserNavbar />
      <div className="login flex center">
        <div className="container flex center">
          <div className="login-img"></div>
          <div className="login-inputs ">
            <Input
              text="Username"
              type="text"
              bgColor="bg-blue"
              textColor="text-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
