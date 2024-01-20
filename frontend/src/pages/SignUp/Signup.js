import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../common/base/inputs/Input";
import Button from "../../common/base/button/Button";
import logo from "../../common/base/logo/image/logo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData
      );
      console.log(response.data);
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
          <div className={active}>
            <h5>Email address already exists!</h5>
          </div>
          <a href="/signin">Already Have an account? Log In</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
