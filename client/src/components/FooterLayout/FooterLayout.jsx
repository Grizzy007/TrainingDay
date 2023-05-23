import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assert/logo/logo_1.png";

import { IconFacebook, IconInstagram, IconTwitter } from "../Icons";

const FooterLayout = () => {
  return (
    <div className="c-footer-layout bg-black">
      <div className="c-footer-layout__container container py-3">
        <div className="c-footer-layout__container-info d-flex flex-row align-items-center justify-content-between ">
          <div className="c-footer-layout__container__info-company d-flex flex-column">
            <Link
              className="c-footer-layout__policy text-white text-decoration-none"
              to="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="c-footer-layout__us text-white text-decoration-none"
              to="#"
            >
              Contact Us
            </Link>
          </div>
          <div className="c-footer-layout__container-logo d-flex flex-column align-items-center">
            <img src={logo} alt="logo" style={{ width: 70 }} />
            <span className="c-footer-layout__copyright-text text-white">
              Training Day Copyright© 2023
            </span>
          </div>
          <div className="c-footer-layout__media d-flex">
            <Link
              to="#"
              className="c-footer-layout__media-wrap d-flex justify-content-center align-items-center  bg-white rounded-circle"
              style={{
                height: 26,
                width: 26,
                paddingBottom: 2,
                marginRight: 6,
              }}
            >
              <IconFacebook style={{ fill: "black", width: "8px" }} />
            </Link>
            <Link
              to="#"
              className="c-footer-layout__media-wrap d-flex justify-content-center align-items-center  bg-white rounded-circle"
              style={{
                height: 26,
                width: 26,
                paddingBottom: 2,
                marginRight: 6,
              }}
            >
              <IconTwitter style={{ fill: "black", width: "16px" }} />
            </Link>
            <Link
              to="#"
              className="c-footer-layout__media-wrap d-flex justify-content-center align-items-center  bg-white rounded-circle"
              style={{
                height: 26,
                width: 26,
                paddingBottom: 2,
                marginRight: 6,
              }}
            >
              <IconInstagram style={{ fill: "black", width: "16px" }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayout;
