import React from "react";
import "./style.css";

const Button = ({
  text,
  onClicked,
  bgColor = "blue-bg",
  textColor = "white-text",
}) => {
  return (
    <button
      className={`flex center full-width rounded-small ${bgColor} ${textColor} base-button`}
      onClick={() => onClicked()}
    >
      {text}
    </button>
  );
};

export default Button;
