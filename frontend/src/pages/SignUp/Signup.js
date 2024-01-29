import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import base_url from "../../common/base/config";
const SignUp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("errorMsg");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    sex: "",
    age: "",
    country: "",
  });

  const options = useMemo(() => {
    const countryOptions = countryList().getData();
    return countryOptions.map((country) => ({
      value: country.label,
      label: country.label,
    }));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption.value });
  };

  const handleGoogle = async (credentialResponse) => {
    if (credentialResponse && credentialResponse.credential) {
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log("Decoded Token: ", decodedToken);

      const userData = {
        username: decodedToken.name,
        email: decodedToken.email,
      };
      console.log(userData);
      try {
        const response = await axios.post(`${base_url}api/register`, userData);
        console.log(response);
        navigate("/signin");
      } catch (error) {
        console.log(error);
        if (error.message === "Request failed with status code 422") {
          setActive("errorMsg-signup");
        }
      }
    } else {
      console.log("Registration Failed: No credential response");
    }
  };
  const handleError = (error) => {
    if (error) {
      setActive("errorMsg-signup");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${base_url}api/register`, formData);

      navigate("/signin");
      if (response.data.message === "The email has already been taken.") {
        setActive("errorMsg-signup");
      }
    } catch (error) {
      console.error(error.message);
      if (error.message === "Request failed with status code 422") {
        setActive("errorMsg-signup");
      }
    }
  };

  return (
    <div className="signup">
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
            text="Username"
            name="username"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Username"
          />
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
          <Input
            required
            onChange={handleChange}
            text="Age"
            name="age"
            type="number"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Age"
          />

          <div className="select-input flex">
            <label>Country</label>
            <Select
              required
              placeholder="Country"
              options={options}
              name="country"
              className="select-country"
              onChange={(selectedOption) =>
                handleSelectChange("country", selectedOption)
              }
            />
          </div>
          <div className="select-input flex">
            <label className="common-label">Gender</label>
            <Select
              required
              placeholder="Gender"
              className="select-country"
              name="sex"
              options={[
                { value: "female", label: "Female" },
                { value: "male", label: "Male" },
              ]}
              onChange={(selectedOption) =>
                handleSelectChange("sex", selectedOption)
              }
            />
          </div>

          <Button
            type="submit"
            text="Sign Up"
            bgColor="white-bg"
            textColor="blue-text"
          />
          <GoogleLogin
            buttonText="Register with Google"
            onSuccess={handleGoogle}
            onFailure={handleError}
          />
          <div className={active}>
            <h5>Email address already exists!</h5>
          </div>
          <div className="signup-text flex center">
            <a>Already Have an account?</a>
            <Link to="/signin">
              <h4>Log In</h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
