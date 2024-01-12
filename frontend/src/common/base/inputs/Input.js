import React from "react";
import "./style.css";
const Input = ({
  required,
  text,
  value,
  name,
  type,
  bgColor,
  onChange,
  textColor,
  placeholder,
}) => {
  return (
    <div className="container-common-input">
      <label className="label-common">{text}</label>
      <input
        required
        id={text}
        className={`flex center ${type} ${bgColor} ${textColor} input-common`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
