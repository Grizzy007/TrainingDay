import React from 'react';
import Icon from '../Icon';

const IconChevronDown = (props) => {
  const {
    size,
    inverse,
    onClick,
    style,
  } = props;

  return (
    <Icon size={size} inverse={inverse} onClick={onClick} style={style} classNameIconType="c-icon-chevron-down">
      <svg viewBox="0 0 20 13" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.22276 11.8154L0.321959 2.91456C-0.10732 2.48529 -0.10732 1.78932 0.321959 1.36008L1.36009 0.321948C1.78864 -0.106597 2.48319 -0.107422 2.91274 0.320116L10 7.37419L17.0873 0.320116C17.5168 -0.107422 18.2114 -0.106597 18.6399 0.321948L19.678 1.36008C20.1073 1.78936 20.1073 2.48533 19.678 2.91456L10.7773 11.8154C10.348 12.2446 9.65204 12.2446 9.22276 11.8154Z" />
      </svg>
    </Icon>
  );
};

export default IconChevronDown;
