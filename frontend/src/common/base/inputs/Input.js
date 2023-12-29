import React from "react";

const Input = ({ text, type, bgColor, textColor }) => {
  return (
    <div>
      <label htmlFor={text}>{text}</label>
      <input
        id={text}
        className={`flex center ${type} ${bgColor} ${textColor}`}
        type={type}
      />
    </div>
  );
};

export default Input;
