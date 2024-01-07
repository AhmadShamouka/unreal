import React, { useState } from "react";
import "./styleOccasion.css";
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
import stylish from "../../common/images/Athleisure-Style.jpeg";
import formal from "../../common/images/aa.jpeg";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import Footer from "../../components/footer/Footer";
import SelectOption from "../../common/base/select/SelectOption";
const Occasion = () => {
  const [activeDiv, setActiveDiv] = useState(0);
  const [blurredHexagon, setBlurredHexagon] = useState(null);

  const handleHexagonClick = (hexagonNumber) => {
    setBlurredHexagon(hexagonNumber);
  };
  const handleSwitch = (divNumber) => {
    setActiveDiv(divNumber);
  };

  return (
    <div className="occasion">
      <UserNavbar />
      <div className="occasion-container">
        <section className="hexagons-temp">
          <h1>Occasion</h1>
          <div className="hexa3 flex center">
            <Hexagon
              bgImage={Outdoor}
              hexaText="OutDoor Activity"
              onClick={() => handleHexagonClick(1)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 1}
            />
            <Hexagon
              bgImage={beach}
              hexaText="Beach Vacation"
              onClick={() => handleHexagonClick(2)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 2}
            />
            <Hexagon
              bgImage={Athletic}
              hexaText="Athletic Activity"
              onClick={() => handleHexagonClick(3)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 3}
            />
          </div>
          <div className="hexa4 flex center">
            <Hexagon
              bgImage={meeting}
              hexaText=" business meeting"
              onClick={() => handleHexagonClick(4)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 4}
            />
            <Hexagon
              bgImage={sleepover}
              hexaText="sleepover"
              onClick={() => handleHexagonClick(5)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 5}
            />
            <Hexagon
              bgImage={Traditional}
              hexaText="Traditional occastion"
              onClick={() => handleHexagonClick(6)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 6}
            />
            <Hexagon
              bgImage={wedding}
              hexaText="wedding events"
              onClick={() => handleHexagonClick(7)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 7}
            />
          </div>
          <div className="hexa3 flex center">
            <Hexagon
              bgImage={casual}
              hexaText="Casual Outing"
              onClick={() => handleHexagonClick(8)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 8}
            />
            <Hexagon
              bgImage={party}
              hexaText="party"
              onClick={() => handleHexagonClick(9)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 9}
            />
            <Hexagon
              bgImage={Graduation}
              hexaText="Graduation Ceremony"
              onClick={() => handleHexagonClick(10)}
              isBlurred={blurredHexagon !== null && blurredHexagon !== 10}
            />
          </div>
        </section>

        <section className="switchable">
          <h1>Choose Your Style </h1>
          <div className="switchable-container flex center">
            <div
              className={`switchable-div ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 1
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(1)}
            >
              <img src={stylish} alt="" />
              <h3>Casual</h3>
            </div>
            <div
              className={`switchable-div ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 2
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(2)}
            >
              <img src={formal} alt="" />
              <h3>formal</h3>
            </div>
            <div
              className={`switchable-div ${
                activeDiv === 0
                  ? "active-switch"
                  : activeDiv === 3
                  ? "active-switch"
                  : "blurred"
              }`}
              onClick={() => handleSwitch(3)}
            >
              <img src={classic} alt="" />
              <h3>classic</h3>
            </div>
          </div>
        </section>
        <section className="personal-info">
          <h1>Personal Information</h1>
          <div className="personal-info-container flex center">
            <select name="Season">
              <SelectOption value="winter" text="Winter" />
              <SelectOption value="spring" text="Spring" />
              <SelectOption value="summer" text="Summer" />
              <SelectOption value="fall" text="Fall" />
            </select>
            <select name="Hijab">
              <SelectOption value="True" text="With Hijab" />
              <SelectOption value="False" text="Without Hijab" />
            </select>
            <select name="Budget-range">
              <SelectOption value="Low" text="Low (Under 200$)" />
              <SelectOption value="Medium" text="Low (Between 200$  1500$)" />
              <SelectOption value="High" text="Low (Over 1500$)" />
            </select>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Occasion;
