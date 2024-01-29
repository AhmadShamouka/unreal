import React from "react";
import "./style.css";

const Button = ({
  type,
  disabled,
  text,
  onClick,
  bgColor = "blue-bg",
  textColor = "white-text",
}) => {
  return (
    <button
      className={`flex center  ${bgColor} ${textColor} base-button`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
