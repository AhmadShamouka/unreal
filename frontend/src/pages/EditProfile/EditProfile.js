import React, { useState, useMemo } from "react";
import Input from "../../common/base/inputs/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../common/base/button/Button";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import "./styleEditProfile.css";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
const EditProfile = () => {
  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;
  const navigate = useNavigate();
  const options = useMemo(() => {
    const countryOptions = countryList().getData();
    return countryOptions.map((country) => ({
      value: country.label,
      label: country.label,
    }));
  }, []);
  const [formData, setFormData] = useState({
    password: "",
    sex: "",
    age: "",
    country: "",
  });
  const [active, setActive] = useState("errorMsg");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/editProfile",
        formData,
        {
          headers: {
            Authorization: authorization,
          },
        }
      );
      console.log(response.data);
      navigate("/signin");
    } catch (error) {
      console.error(error.message);
      if (error.message === "Request failed with status code 422") {
        setActive("errorMsg-signup");
      }
    }
  };
  return (
    <div className="edit-profile-container flex center">
      <div className="edit-profile flex center">
        <form onSubmit={handleSubmit} className="edit-profile-text flex center">
          <div className="child-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

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
            text="Submit"
            bgColor="white-bg"
            textColor="blue-text"
          />
          <div className={active}>
            <h5>Error Try Again</h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
