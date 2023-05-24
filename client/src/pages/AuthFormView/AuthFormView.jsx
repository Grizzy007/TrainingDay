import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import MainLayout from "../../components/MainLayout";
import rock from "../../assert/photo/authentication/rock.jpg";

import { login, registration } from "../../http/userAPI";
import { Context } from "../..";

import { PAGE } from "../../config/config";

import "./AuthFormView.scss";

const AuthFormView = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === PAGE.LOGIN.PATH;
  const defaultAuthDate = {
    login: '',
    password: '',
  }

  const {user} = useContext(Context);
  
  const [authData, setAuthDate] = useState(defaultAuthDate);


  const handleChange = (event) => {
    const eventTarget = event.currentTarget;
    const newAuthDate = {
      ...authData,
      [eventTarget.name]: eventTarget.value,
    }
    setAuthDate(newAuthDate);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isLogin) {
        const response = await login(authData);
        user.setUser(response);
      } else {
        const response = await registration(authData);
        user.setUser(response);
      }
      user.setAuth(true);
      navigate(PAGE.USERPROFILE.PATH)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

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
                  onChange={handleChange}
                  value={authData.login}
                  name="login"
                />
              </div>
              <div className="v-auth__wrap-input">
                <input
                  type="password"
                  className="v-auth__input"
                  placeholder="Password"
                  onChange={handleChange}
                  value={authData.password}
                  name="password"
                />
              </div>
              <div className="v-auth__register mb-5">
                {location.pathname !== PAGE.REGISTRATION.PATH ? (
                  <span>
                    Don't have an account?
                    <Link to={PAGE.REGISTRATION.PATH}>Register</Link>.
                  </span>
                ) : (
                  <span>
                    Have an account?
                    <Link to={PAGE.LOGIN.PATH}>Login</Link>.
                  </span>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="p-2 px-4 btn rounded-pill btn-danger"
                  onClick={handleSubmit}
                >
                  {location.pathname === PAGE.REGISTRATION.PATH
                    ? "SIGN UP"
                    : "SIGN IN"}
                </button>
              </div>
            </div>
          </div>
          <img className="align-self-end" src={rock} alt="rock" />
        </div>
      </div>
    </MainLayout>
  );
});

export default AuthFormView;
