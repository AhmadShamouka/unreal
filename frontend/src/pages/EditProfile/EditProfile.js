import React, { useState, useMemo, useEffect } from "react";
import Input from "../../common/base/inputs/Input";
import { useNavigate } from "react-router-dom";
import base_url from "../../common/base/config";
import Button from "../../common/base/button/Button";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
import "./styleEditProfile.css";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/loading/Loading";
const EditProfile = () => {
  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;
  const navigate = useNavigate();
  const [active, setActive] = useState("errorMsg");
  const [required, setRequired] = useState("errorMsg");
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
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      formData.age == "" ||
      formData.country == "" ||
      formData.password == "" ||
      formData.sex == ""
    ) {
      setRequired("errorMsg-signup");
    } else {
      setRequired("errorMsg");

      try {
        const response = await axios.post(
          `${base_url}api/editProfile`,
          formData,
          {
            headers: {
              Authorization: authorization,
            },
          }
        );

        navigate("/signin");
      } catch (error) {
        if (error.message === "Request failed with status code 422") {
          setActive("errorMsg-signup");
        }
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}api/user`, {
          headers: {
            Authorization: authorization,
          },
        });

        setUser(response.data);
      } catch (error) {}
    };

    fetchData();
  }, []);
  if (Object.keys(user).length === 0) {
    <LoadingSpinner />;
  } else {
    return (
      <div className="edit-profile-container flex center">
        <div className="edit-profile flex center">
          <form
            onSubmit={handleSubmit}
            className="edit-profile-text flex center"
          >
            <div className="child-logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <Input
              text="Email"
              value={user.user.email}
              disabled={true}
              bgColor="bg-blue"
              textColor="text-white"
            />
            <Input
              text="Username"
              value={user.user.username}
              disabled={true}
              bgColor="bg-blue"
              textColor="text-white"
            />

            <Input
              required
              onChange={handleChange}
              text="Password"
              name="password"
              type="password"
              placeholder={"Enter your Password (min. 6 characters)"}
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
                value={user.user.country}
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
            <div className={required}>
              <h5>All Inputs Required</h5>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default EditProfile;
