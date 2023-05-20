/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { PAGE } from "../../config/config";
import { observer } from "mobx-react-lite";

import { IconUserNav } from "../Icons";

import "./HeaderLayout.scss";

const HeaderLayout = observer(() => {
  const handleCheckActiveLink = (link) => {
    return link.isActive ? "nav-link active" : "nav-link ";
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
                  to="/login"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                >
                  CATALOG
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
                >
                  SUGGESTION NEW PROGRAM
                </NavLink>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    handleCheckActiveLink({ isActive })
                  }
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
});

export default HeaderLayout;
