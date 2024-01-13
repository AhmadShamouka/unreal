import React from "react";

const SelectOption = ({ text, value, hidden, required, disabled }) => {
  return (
    <option
      value={value}
      hidden={hidden}
      required={required}
      disabled={disabled}
    >
      {text}
    </option>
  );
};

export default SelectOption;
