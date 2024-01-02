import React from "react";
import "./styleOccasion.css";
import Hexagon from "../../common/base/hexagon/Hexagon";
import swim from "../../common/images/swim.jpeg";
const Occasion = () => {
  return (
    <div>
      <h1>Occasion</h1>
      <section>
        <div className="flex ">
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
        </div>
        <div className="flex ">
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
        </div>
        <div className="flex ">
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
          <Hexagon bgImage={swim} />
        </div>
      </section>
    </div>
  );
};

export default Occasion;
