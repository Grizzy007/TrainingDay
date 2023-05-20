import React from 'react';

import './HomeView.css';

const HomeView = (props) => {
  const { someProps } = props;
  return (
    <div className="c-component">
      {`Component example ${someProps}`}
    </div>
  );
};

export default HomeView;
