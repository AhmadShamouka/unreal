import React from "react";
import logo from "../../common/base/logo/image/logo.png";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import "./styles.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
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
            bgColor="bg-blue"
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
            bgColor="bg-blue"
            textColor="text-white"
          />
          <Button
            type="submit"
            text="Sign In"
            bgColor="white-bg"
            textColor="blue-text"
          />

          <a href="/Register">Don't have Account?Create One!</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
