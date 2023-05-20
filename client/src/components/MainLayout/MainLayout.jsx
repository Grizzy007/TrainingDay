import React from "react";

import "./MainLayout.scss";
import HeaderLayout from "../HeaderLayout";
import FooterLayout from "../FooterLayout/FooterLayout";

const MainLayout = (props) => {
  const { children } = props;
  return (
    <div className="c-main-layout">
      <HeaderLayout />
        <main className="app-content">{children}</main>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
