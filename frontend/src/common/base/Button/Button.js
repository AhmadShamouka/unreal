import React from "react";
import "./style.css";

const Button = ({
  type,
  text,

  bgColor = "blue-bg",
  textColor = "white-text",
}) => {
  return (
    <button
      className={`flex center  ${bgColor} ${textColor} base-button`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
