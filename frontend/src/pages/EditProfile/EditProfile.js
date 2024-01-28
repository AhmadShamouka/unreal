import React, { useState, useMemo } from "react";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import "./styleEditProfile.css";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
const EditProfile = () => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    sex: "",
    age: "",
    country: "",
  });
  return (
    <div className="edit-profile-container flex center">
      <div className="edit-profile flex center">
        <div className="edit-profile-text flex center">
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
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
