import React from 'react';

import './Component.scss';

const Component = (props) => {
  const { someProps } = props;
  return (
    <div className="c-component">
      {`Component example ${someProps}`}
    </div>
  );
};

export default Component;
