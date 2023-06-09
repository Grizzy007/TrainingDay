import React from "react";
import Icon from "../Icon";

const IconFacebook = (props) => {
  const { size, inverse, style, onClick } = props;

  return (
    <Icon
      size={size}
      inverse={inverse}
      onClick={onClick}
      style={style}
      classNameIconType="c-icon-facebook"
    >
      <svg
        viewBox="0 0 8 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 2.75008H6.4C5.29832 2.75008 5.33342 3.14316 5.33342 3.8619V4.99991H8L7.46658 8H5.33342V16H1.6V8H0V4.99991H1.6V3.58692C1.6 1.33782 2.79742 0 5.62684 0H8V2.75008Z"
        />
      </svg>
    </Icon>
  );
};

export default IconFacebook;
