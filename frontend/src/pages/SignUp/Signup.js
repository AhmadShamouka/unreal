import React, { useState, useMemo } from "react";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
const SignUp = () => {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (value) => {
    setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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
            placeholder="Enter your Username"
            type="text"
            bgColor="bg-blue"
            textColor="text-white"
          />
          <Input
            onChange={handleChange}
            text="Email"
            type="text"
            name="email"
            bgColor="bg-blue"
            textColor="text-white"
            placeholder="Enter your Email"
          />
          <Input
            onChange={handleChange}
            text="Passowrd"
            type="password"
            name="password"
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit "
            text="Sign Up"
            bgColor="white-bg"
            textColor="blue-text"
          />
          <a href="/login">Already Have account? Log In</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
