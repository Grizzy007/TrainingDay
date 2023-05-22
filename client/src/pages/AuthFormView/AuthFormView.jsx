import React from "react";

import MainLayout from "../../components/MainLayout";
import rock from "../../assert/photo/authform/rock.jpg";

import "./AuthFormView.scss";

const AuthFormView = () => {
  return (
    <MainLayout>
      <div className="v-auth">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="v-auth__form ">
            <h2 className="v-auth__form-title grid">BE BETTER</h2>
            <div className="v-auth__form-wrapper d-flex flex-column justify-content-center">
              <div className="v-auth__wrap-input">
                <input
                  type="text"
                  className="v-auth__input"
                  placeholder="Enter your e-mail"
                />
              </div>
              <div className="v-auth__wrap-input">
                <input
                  type="password"
                  className="v-auth__input"
                  placeholder="Password"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="p-2 px-4 btn rounded-pill btn-danger">
                  SIGN IN
                </button>
              </div>
            </div>
          </div>
          <img className="align-self-end" src={rock} alt="rock" />
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthFormView;
