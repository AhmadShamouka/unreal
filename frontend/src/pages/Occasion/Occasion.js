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
import wedding from "../../common/images/wedding.jpeg";
const Occasion = () => {
  return (
    <div>
      <h1>Occasion</h1>
      <section className="hexagons-temp">
        <div className="hexa3 flex center">
          <Hexagon bgImage={Outdoor} hexaText="OutDoor Activity" />
          <Hexagon bgImage={beach} hexaText="Beach Vacation" />
          <Hexagon bgImage={Athletic} hexaText="Athletic Activity" />
        </div>
        <div className="hexa4 flex center">
          <Hexagon bgImage={meeting} hexaText="OutDoor Activity" />
          <Hexagon bgImage={sleepover} hexaText="Beach Vacation" />
          <Hexagon bgImage={Traditional} hexaText="Athletic Activity" />
          <Hexagon bgImage={wedding} hexaText="OutDoor Activity" />
        </div>
        <div className="hexa3 flex center">
          <Hexagon bgImage={casual} hexaText="OutDoor Activity" />
          <Hexagon bgImage={beach} hexaText="Beach Vacation" />
          <Hexagon bgImage={Athletic} hexaText="Athletic Activity" />
        </div>
      </section>
    </div>
  );
};

export default Occasion;
