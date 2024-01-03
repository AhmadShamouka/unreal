import React from "react";
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
import NavBar from "../../components/navbar/Navbar";
const Occasion = () => {
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
      </section>
    </div>
  );
};

export default Occasion;
