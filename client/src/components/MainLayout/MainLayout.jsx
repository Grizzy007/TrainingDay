import React from "react";

import HeaderLayout from "../HeaderLayout";
import FooterLayout from "../FooterLayout";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div
      className="c-main-layout"
      style={{ minHeight: "100vh", width: "100%", overflow: "hidden" }}
    >
      <HeaderLayout />
      <main
        className="app-content d-flex"
        style={{ minHeight: "calc(100vh - 178px)" }}
      >
        {children}
      </main>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
