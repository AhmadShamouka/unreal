import React from "react";
import "./style.css";
const Input = ({ text, type, bgColor, textColor, placeholder }) => {
  return (
    <div className="container-common-input">
      <label className="label-common">{text}</label>
      <input
        id={text}
        className={`flex center ${type} ${bgColor} ${textColor} input-common`}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
