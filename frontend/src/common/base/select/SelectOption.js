import React from "react";

const SelectOption = ({ text, value, name, bgColor, textColor }) => {
  return <option value={value}>{text}</option>;
};

export default SelectOption;
