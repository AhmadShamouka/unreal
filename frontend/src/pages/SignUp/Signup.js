import React, { useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
const SignUp = () => {
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
            onChange={handleChange}
            text="Username"
            name="username"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Username"
          />
          <Input
            onChange={handleChange}
            text="Email"
            name="email"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Email"
          />
          <Input
            onChange={handleChange}
            text="Password"
            name="password"
            type="password"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Password"
          />
          <Input
            onChange={handleChange}
            text="Age"
            name="age"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Age"
          />

          <div className="select-input flex">
            <label>Country</label>
            <Select
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
          <a href="/login">Already Have an account? Log In</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
