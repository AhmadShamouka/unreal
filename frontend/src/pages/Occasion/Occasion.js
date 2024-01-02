import React from "react";
import "./styleOccasion.css";
import Hexagon from "../../common/base/hexagon/Hexagon";
import swim from "../../common/images/swim.jpeg";
const Occasion = () => {
  return (
    <div>
      <h1>Occasion</h1>
      <section flex center>
        <Hexagon bgImage={swim} />

        <Hexagon bgImage={swim} /
      </section>
    </div>
  );
};

export default Occasion;
