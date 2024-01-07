import React from "react";

const SelectOption = ({ text, value, name, bgColor, textColor }) => {
  return (
    <option value={value} name={name}>
      {text}
    </option>
  );
};

export default SelectOption;
