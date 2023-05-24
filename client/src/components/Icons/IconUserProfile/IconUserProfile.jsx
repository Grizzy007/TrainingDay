import React from "react";
import Icon from "../Icon";

const IconUserProfile = (props) => {
  const { size, inverse, onClick, style } = props;

  return (
    <Icon
      size={size}
      inverse={inverse}
      onClick={onClick}
      style={style}
      classNameIconType="c-icon-user-profile"
    >
      <svg
        viewBox="0 0 67 76"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.5001 38.221C43.8531 38.221 52.244 29.8492 52.244 19.5197C52.244 9.19011 43.8531 0.818359 33.5001 0.818359C23.147 0.818359 14.7562 9.19011 14.7562 19.5197C14.7562 29.8492 23.147 38.221 33.5001 38.221ZM46.6208 42.8963H44.1753C40.9244 44.3865 37.3074 45.2339 33.5001 45.2339C29.6927 45.2339 26.0904 44.3865 22.8248 42.8963H20.3793C9.51373 42.8963 0.698242 51.6917 0.698242 62.5326V68.6106C0.698242 72.4823 3.84663 75.6236 7.7272 75.6236H59.2729C63.1535 75.6236 66.3019 72.4823 66.3019 68.6106V62.5326C66.3019 51.6917 57.4864 42.8963 46.6208 42.8963Z"
        />
      </svg>
    </Icon>
  );
};

export default IconUserProfile;
