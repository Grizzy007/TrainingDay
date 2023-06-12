import React from "react";

import "./TextAreaProgramControl.css";

const TextAreaProgramControl = (props) => {
  const { label, name, value, placeholder, onChange } = props;

  const handleChange = (event) =>
    typeof onChange === "function" ? onChange(event) : null;

  return (
    <label className="c-textarea-program-control">
      <span className="c-textarea-program-control__label fw-semibold fs-3 text-white">
        {label}
      </span>
      <textarea
          className="c-textarea-program-control__textarea"
          onChange={handleChange}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
        />
    </label>
  );
};

export default TextAreaProgramControl;
