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
import NavBar from "../../components/navbar/Navbar";
const Occasion = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleSwitch = (divNumber) => {
    setActiveDiv(divNumber);
  };
  return (
    <div className="occasion">
      <NavBar />
      <section className="hexagons-temp">
        <h1>Occasion</h1>
        <div className="hexa3 flex center">
          <Hexagon bgImage={Outdoor} hexaText="OutDoor Activity" />
          <Hexagon bgImage={beach} hexaText="Beach Vacation" />
          <Hexagon bgImage={Athletic} hexaText="Athletic Activity" />
        </div>
        <div className="hexa4 flex center">
          <Hexagon bgImage={meeting} hexaText=" business meeting" />
          <Hexagon bgImage={sleepover} hexaText="sleepover" />
          <Hexagon bgImage={Traditional} hexaText="Traditional occastion" />
          <Hexagon bgImage={wedding} hexaText="wedding events" />
        </div>
        <div className="hexa3 flex center">
          <Hexagon bgImage={casual} hexaText="Casual Outing" />
          <Hexagon bgImage={party} hexaText="party" />
          <Hexagon bgImage={Graduation} hexaText="Graduation Ceremony" />
        </div>
      </section>
      <section>
        <h1>Choose Your Style </h1>
        <div className="switchable-container">
          <div
            className={`switchable-div ${
              activeDiv === 0
                ? "active"
                : activeDiv === 1
                ? "active"
                : "blurred"
            }`}
            onClick={() => handleSwitch(1)}
          >
            <p>Div 1</p>
          </div>
          <div
            className={`switchable-div ${
              activeDiv === 0
                ? "active"
                : activeDiv === 2
                ? "active"
                : "blurred"
            }`}
            onClick={() => handleSwitch(2)}
          >
            <p>Div 2</p>
          </div>
          <div
            className={`switchable-div ${
              activeDiv === 0
                ? "active"
                : activeDiv === 3
                ? "active"
                : "blurred"
            }`}
            onClick={() => handleSwitch(3)}
          >
            <p>Div 3</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Occasion;
