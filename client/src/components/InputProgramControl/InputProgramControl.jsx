import React from "react";

import "./InputProgramControl.css";

const InputProgramControl = (props) => {
  const { label, name, value, placeholder, onChange, handleClick } = props;

  const videoClassName = (name === 'link') ? 'c-input-program-control__input_video' : '';
  const inputClassName = `c-input-program-control__input ${videoClassName}`

  const handleChange = (event) =>
    typeof onChange === "function" ? onChange(event) : null;

  return (
    <label className="c-input-program-control">
      <span className="c-input-program-control__label fw-semibold fs-3 text-white">
        {label}
      </span>
      <form className="c-input-program-control__container">
        <input
          className={inputClassName}
          onChange={handleChange}
          name={name}
          type="text"
          value={value}
          placeholder={placeholder}
        />
        {name === 'link' && 
          <button onClick={handleClick} className="c-input-program-control__btn">
          <span className="fw-bold fs-5 " >CHECK</span>
        </button>
        }
      </form>
    </label>
  );
};

export default InputProgramControl;
