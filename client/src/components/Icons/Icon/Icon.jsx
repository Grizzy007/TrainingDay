import React from 'react';

import './Icon.css';

const Icon = (props) => {
  const {
    size,
    inverse,
    children,
    onClick,
    classNameIconType,
    style,
  } = props;
  const classSize = size ? `c-icon_${size}` : 'c-icon_md';
  const classInverse = inverse ? 'inverse' : '';
  const classClickable = onClick ? 'clickable' : '';
  const classIcon = `c-icon ${classNameIconType} ${classSize} ${classInverse} ${classClickable}`;

  const handleClick = (event) => {
    if (typeof onClick === 'function') {
      return onClick(event);
    }
    return null;
  };

  return (
    <span style={style} className={classIcon} onClick={handleClick}>
      {children}
    </span>
  );
};

export default Icon;
