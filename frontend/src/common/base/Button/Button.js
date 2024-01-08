import React from "react";
import "./style.css";

const Button = ({
  type,
  text,
  onClicked,
  bgColor = "blue-bg",
  textColor = "white-text",
}) => {
  return (
    <button
      className={`flex center  ${bgColor} ${textColor} base-button`}
      onClick={() => onClicked()}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
