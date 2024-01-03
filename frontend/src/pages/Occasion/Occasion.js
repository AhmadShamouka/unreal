import React from "react";
import "./styleOccasion.css";
import Hexagon from "../../common/base/hexagon/Hexagon";
import Outdoor from "../../common/images/Outdoor-Adventure.jpeg";
import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
// import swim from "../../common/images/swim.jpeg";
const Occasion = () => {
  return (
    <div>
      <h1>Occasion</h1>
      <section className="hexagons-temp">
        <div className="hexa3 flex center">
          <Hexagon bgImage={Outdoor} hexaText="OutDoor Activity" />
          <Hexagon bgImage={swim} hexaText="Beachparty" />
          <Hexagon bgImage={swim} hexaText="Beachparty" />
        </div>
        <div className="hexa4 flex center">
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
        </div>
        <div className="hexa3 flex center">
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
        </div>
      </section>
    </div>
  );
};

export default Occasion;
