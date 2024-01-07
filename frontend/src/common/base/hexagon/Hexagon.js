import React, { useState } from "react";
import "./styleHexagon.css";

const Hexagon = ({ bgImage, hexaText }) => {
  const [color, setColor] = useState("hidden");
  const [counter, setCounter] = useState(0);
  const [blur, setBlur] = useState("");
  const handleHover = () => {
    setCounter((prevCounter) => prevCounter + 1);
    if (counter === 0) {
      setColor("base");
    } else if (counter === 1) {
      setColor("one");
    } else if (counter === 2) {
      setColor("two");
    } else if (counter === 3) {
      setColor("three");
    } else if (counter >= 4) {
      setCounter(0);
      setColor("base");
    }
  };

  const handleHoverOut = () => {
    setColor("hidden");
  };
  const handleBlur = () => {
    setBlur("blur");
  };
  return (
    <div className="hex_row_odd">
      <div className="center-hexagon">
        <div
          className="hexagon"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
          onClick={handleBlur}
        >
          <div className={`hex1 ${blur}`}>
            <div
              className="hex2"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className={`desc ${color}`}>
                <h2>{hexaText}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hexagon;
