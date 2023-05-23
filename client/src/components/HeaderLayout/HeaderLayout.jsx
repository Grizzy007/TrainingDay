/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { NavLink, Link } from "react-router-dom";

import { PAGE } from "../../config/config";

import { IconUserNav } from "../Icons";

const HeaderLayout = () => {
  const handleCheckActiveLink = (link) => {
    return link.isActive ? "nav-link active" : "nav-link";
  };

  return (
    <div className="c-header-layout bg-black">
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-black" data-bs-theme="dark">
          <div className="container-fluid px-0">
            <Link className="navbar-brand fw-bold" to={PAGE.NAVIGATE.PATH}>
              Training Day
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse justify-content-end navbar-collapse ml-auto"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                >
                  HOME
                </NavLink>
                <NavLink
                  to="/catalog"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                >
                  CATALOG
                </NavLink>
                <NavLink
                  to="/suggest-new-program"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                >
                  SUGGESTION NEW PROGRAM
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                  style={{
                    padding: "6px 0px 0px 0.5rem",
                  }}
                >
                  <IconUserNav style={{ fill: "white" }} />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderLayout;
