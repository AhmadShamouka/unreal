import React, { useState } from "react";
import base_url from "../../common/base/config";
import "./styleOccasion.css";
import { useNavigate } from "react-router-dom";
import Hexagon from "../../common/base/hexagon/Hexagon";
import Outdoor from "../../common/images/Outdoor-Adventure.jpeg";
import beach from "../../common/images/Beach-Vacation.jpeg";
import Athletic from "../../common/images/Athletic.png";
import casual from "../../common/images/Casual-Outing.jpg";
import meeting from "../../common/images/Business-Meeting.jpeg";
import sleepover from "../../common/images/Sleepover.jpeg";
import Traditional from "../../common/images/Traditional-Celebration.jpeg";
import party from "../../common/images/party.jpeg";
import wedding from "../../common/images/wedding.jpeg";
import Graduation from "../../common/images/graduation.jpeg";
import classic from "../../common/images/classic.jpeg";
import stylish from "../../common/images/casualwomen.jpeg";
import formal from "../../common/images/aa.jpeg";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import SelectOption from "../../common/base/select/SelectOption";
import Button from "../../common/base/button/Button";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { occasionCreated } from "../Occasion/occasionSlice";

const Occasion = () => {
  const [active, setActive] = useState("errorMsg");
  const [wrong, setWrong] = useState("errorMsg");
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");
  const authorization = "Bearer " + token;
  const [activeDiv, setActiveDiv] = useState(0);
  const { sex, country, age } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [blurredHexagon, setBlurredHexagon] = useState(null);
  const [formData, setFormData] = useState({
    occasion_type: "",
    style: "",
    season: "",
    budget_range: "",
    sex: sex,
    country: country,
    age: age,
  });

  const handleHexagonClick = (hexagonNumber, value) => {
    setBlurredHexagon(hexagonNumber);
    setFormData({ ...formData, occasion_type: value });
  };

  const handleSwitch = (divNumber, value) => {
    setActiveDiv(divNumber);
    setFormData({ ...formData, style: value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.occasion_type === "" || formData.style === "") {
      setActive("errorMsg-display");
    } else {
      try {
        const response = await axios.post(`${base_url}api/occasion`, formData, {
          headers: {
            Authorization: authorization,
          },
        });

        console.log(response.data);
        if (response.data.status === "success") {
          dispatch(occasionCreated(response.data.suggested_link));
          navigate("/find");
        }
        if (
          response.data.message ===
          "An error occurred: cURL error 6: Could not resolve host: api.openai.com (see https://curl.haxx.se/libcurl/c/libcurl-errors.html) for https://api.openai.com/v1/chat/completions"
        ) {
          setWrong("errorMsg-display");
        }
      } catch (error) {}
    }
  };

  return (
    <div className="occasion">
      <UserNavbar />
      <form onSubmit={handleSubmit} className="occasion-container">
        <section className="hexagons-temp">
          <h1>Click to Choose Your Occasion</h1>
          <hr className="hr-line" />

          <div name="occasion_type" className="hexa3 flex center">
            <Hexagon
              value="outdoor activity"
              bgImage={Outdoor}
              hexaText="OutDoor Activity"
              onClick={(e) => handleHexagonClick(1, "outdoor activity")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 1}
            />
            <Hexagon
              bgImage={beach}
              value="beach vacation"
              hexaText="Beach Vacation"
              onClick={() => handleHexagonClick(2, "beach vacation")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 2}
            />
            <Hexagon
              value="sport"
              bgImage={Athletic}
              hexaText="Athletic Activity"
              onClick={() => handleHexagonClick(3, "sport")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 3}
            />
          </div>
          <div className="hexa4 flex center">
            <Hexagon
              value="meeting"
              bgImage={meeting}
              hexaText="Business Meeting"
              onClick={() => handleHexagonClick(4, "meeting")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 4}
            />
            <Hexagon
              value="sleepover"
              bgImage={sleepover}
              hexaText="Sleepover"
              onClick={() => handleHexagonClick(5, "sleepover")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 5}
            />
            <Hexagon
              value="traditional"
              bgImage={Traditional}
              hexaText="Traditional Occastion"
              onClick={() => handleHexagonClick(6, "traditional")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 6}
            />
            <Hexagon
              value="wedding"
              bgImage={wedding}
              hexaText="Wedding Events"
              onClick={() => handleHexagonClick(7, "wedding")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 7}
            />
          </div>
          <div className="hexa3 flex center">
            <Hexagon
              value="casual outing"
              bgImage={casual}
              hexaText="Casual Outing"
              onClick={() => handleHexagonClick(8, "casual outing")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 8}
            />
            <Hexagon
              value="party"
              bgImage={party}
              hexaText="Party"
              onClick={() => handleHexagonClick(9, "party")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 9}
            />
            <Hexagon
              value="graduation cermony"
              bgImage={Graduation}
              hexaText="Graduation Ceremony"
              onClick={() => handleHexagonClick(10, "graduation cermony")}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 10}
            />
          </div>
        </section>

        <section className="switchable">
          <h1>Click to Choose Your Style </h1>
          <hr className="hr-line" />
          <div className="switchable-container flex center">
            <div
              className={`card card-color-0 ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 1
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(1, "casual")}
            >
              <div className="border"></div>
              <img src={stylish} alt="" />
              <h2>Casual</h2>
            </div>
            <div
              className={`card card-color-0 ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 2
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(2, "formal")}
            >
              <div className="border"></div>
              <img src={formal} alt="" />
              <h2>Formal</h2>
            </div>

            <div
              className={`card card-color-0 ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 3
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(3, "classic")}
            >
              <div className="border"></div>
              <img src={classic} alt="" />
              <h2>Classic</h2>
            </div>
          </div>
        </section>
        <section className="personal-info">
          <h1>Personal Information</h1>
          <hr className="hr-line" />
          <div className="personal-info-container flex center">
            <div className="label-select">
              <h4>Enter The Season of Your Occasion</h4>
              <select name="season" required onChange={handleChange}>
                <SelectOption value="" text="Which Season?" hidden />
                <SelectOption value="winter" text="Winter" />
                <SelectOption value="spring" text="Spring" />
                <SelectOption value="summer" text="Summer" />
                <SelectOption value="fall" text="Fall" />
              </select>
            </div>
            <div className="label-select">
              <h4>Please Enter your Budget Range</h4>
              <select name="budget_range" required onChange={handleChange}>
                <SelectOption value="" text="Budget Range" hidden />
                <SelectOption value="low" text="Low" />
                <SelectOption value="medium" text="Medium" />
                <SelectOption value="high" text="High" />
              </select>
            </div>
          </div>
          <div className="find-btn flex center">
            <Button
              type="submit"
              text="FIND NOW!"
              bgColor="white-bg"
              textColor="blue-text"
            />
          </div>
          <div className={active}>
            <h5>Please Select Occasion and Style!</h5>
          </div>
          <div className={wrong}>
            <h5>Please Connect to the Internet</h5>
          </div>
        </section>
      </form>

      <Footer />
    </div>
  );
};

export default Occasion;
