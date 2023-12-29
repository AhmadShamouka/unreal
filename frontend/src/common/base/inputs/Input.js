import React from "react";
import "./style.css";
const Input = ({ text, type, bgColor, textColor }) => {
  return (
    <div>
      <label className="label-common">{text}</label>
      <input
        id={text}
        className={`flex center ${type} ${bgColor} ${textColor} input-common`}
        type={type}
      />
    </div>
  );
};

export default Input;
