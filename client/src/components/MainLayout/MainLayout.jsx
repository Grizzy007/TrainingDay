import React from "react";

import "./MainLayout.css";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="c-main-layout">
      <main className="app-content">{children}</main>
    </div>
  );
};

export default MainLayout;
