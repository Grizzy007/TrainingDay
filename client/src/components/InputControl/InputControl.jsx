import React from 'react';

// Components
// import { IconCalendar } from '../Icons';

// Style
import './InputControl.scss';

const InputControl = (props) => {
  const {
    label,
    type,
    name,
    value,
    onChange,
    placeholder,
  } = props;

  // State
  const labelClassName = label ? 'label' : '';
  const visitedClassName = value ? 'visited' : '';
  const inputType = type || 'text';
  const blockInputClassName = `c-input ${labelClassName}`;
  const inputClassName = inputType === 'date' ? `c-input__input c-input__input_date  ${visitedClassName}` : 'c-input__input';

  // Component Logic
  const handleChange = (event) => (typeof onChange === 'function' ? onChange(event) : null);

  return (
    <label className={blockInputClassName}>
      {label && <span className="c-input__label-text">{label}</span>}
      <input
        className={inputClassName}
        type={inputType}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default InputControl;
