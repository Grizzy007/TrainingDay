import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../../hooks/userApi";

import rock from "../../assert/photo/authentication/rock.jpg";

import { PAGE } from "../../config/config";

import MainLayout from "../../components/MainLayout";

// import useUserProfileMutations from "../../mutation/useUserProfileMutations";

import "./AuthFormView.css";

// import { useRecoilValue } from "recoil";
// import filterAuthErrorState from "../../newStore/selector/filterAuthErrorState";

const AuthFormView = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  // const { registerUser, loginUser } = useUserProfileMutations();

  // const authErrorUser = useRecoilValue(filterAuthErrorState);

  // const isLogin = location.pathname === PAGE.LOGIN.PATH;

  const defaultAuthDate = {
    login: null,
    password: null,
    confirmPassword: null,
  };

  const defaultFormError = {
    login: null,
    password: null,
    confirmPassword: null,
    hasError: false,
  };

  const errorText = {
    login: 'No valid your email',
    password: 'Password must be more than 6 characters',
    confirmPassword: "Passwords should be equal",
  }
  
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-/.]+[.][a-zA-Z0-9-]+$/;

  // const { user } = useContext(Context);

  const [authData, setAuthData] = useState(defaultAuthDate);
  const [formError, setFormError] = useState(defaultFormError);
  const [isDisabledBtn, setIsDisabledBtn] = useState(true);

  const validateEmail = (email) => {
    const exp = new RegExp(emailRegExp);
    return exp.test(email);
  };

  const validatePassword = (pwd) => pwd && pwd.length >= 6;

  const validateConfirmPassword = (pwd, confirmPwd) => pwd === confirmPwd;

  const validateForm = (currentFormDate) => {
    const tempFormError = {
      ...defaultFormError,
    };

    if (!validateEmail(currentFormDate.login)) {
      tempFormError.login = errorText.login;
      tempFormError.hasError = true;
    }

    if (!validatePassword(currentFormDate.password)) {
      tempFormError.password = errorText.password;
      tempFormError.hasError = true;
    }

    if (location.pathname === PAGE.LOGIN.PATH) return tempFormError;

    if (!validateConfirmPassword(currentFormDate.password, currentFormDate.confirmPassword)) {
      tempFormError.confirmPassword = errorText.confirmPassword;
      tempFormError.hasError = true;
    }

    return tempFormError;
  };

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;
    const newFormData = {
      ...authData,
      [eventTarget.name]: eventTarget.value,
    };

    setAuthData(newFormData);

    if (validateForm(newFormData).hasError) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(false);
    }
  };

  const handleFocus = (event) => {
    const eventTarget = event.currentTarget;
    const clearCurrentError = {
      ...formError,
      [eventTarget.name]: null,
    };
    
    setFormError(clearCurrentError);

    // if (formError.password !== errorText.password) {
    //   setFormError({ ...defaultFormError });
    // } else {
    //   setFormError(clearCurrentError);
    // }
  };

  const handleBlur = (event) => {
    if (event.currentTarget.name === "login") {
      const isValid = validateEmail(event.currentTarget.value);
      if (!isValid) {
        return setFormError({
          ...formError,
          login: errorText.login,
          hasError: true,
        });
      }
    }

    if (event.currentTarget.name === "password") {
      const isValid = validatePassword(event.currentTarget.value);
      if (!isValid) {
        return setFormError({
          ...formError,
          password: errorText.password,
          hasError: true,
        });
      }
    }

    if (event.currentTarget.name === "confirmPassword") {
      const isValid = validateConfirmPassword(
        authData.password,
        event.currentTarget.value
      );
      if (!isValid) {
        return setFormError({
          ...formError,
          confirmPassword: errorText.confirmPassword,
          hasError: true,
        });
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formError.hasError) return;

    if (location.pathname === PAGE.REGISTRATION.PATH) {
      const response = registration(authData);
      console.log(response);
    }

    if (location.pathname === PAGE.LOGIN.PATH) {
      return login(authData);
    }
  };

  useEffect(() => {
    // console.log(session.sessionData.hasError);
    if (!authData.login && !authData.password) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(formError.hasError && validateForm(authData).hasError);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formError]);

  return (
    <MainLayout>
      <div className="v-auth">
        <div className="container d-flex justify-content-between align-items-center">
          <form className="v-auth__form ">
            <h2 className="v-auth__form-title grid">BE BETTER</h2>
            <div className="v-auth__form-wrapper d-flex flex-column justify-content-center">
              <div className="v-auth-input">
                <input
                  type="text"
                  name="login"
                  value={authData.login || ""}
                  className="v-auth-input__input"
                  placeholder="Enter your e-mail"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {formError.login && (
                  <span className="v-auth-input__error">{formError.login}</span>
                )}
              </div>
              <div className="v-auth-input">
                <input
                  type="password"
                  name="password"
                  value={authData.password || ""}
                  className="v-auth-input__input"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {formError.password && (
                  <span className="v-auth-input__error">{formError.password}</span>
                )}
              </div>
              {location.pathname === PAGE.REGISTRATION.PATH && (
                <div className="v-auth-input">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={authData.confirmPassword || ""}
                    className="v-auth-input__input"
                    placeholder="Repeat your password"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                  {formError.confirmPassword && (
                    <span className="v-auth-input__error">
                      {formError.confirmPassword}
                    </span>
                  )}
                </div>
              )}
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
                  disabled={isDisabledBtn}
                >
                  {location.pathname === PAGE.REGISTRATION.PATH
                    ? "SIGN UP"
                    : "SIGN IN"}
                </button>
              </div>
            </div>
          </form>
          <img className="align-self-end" src={rock} alt="rock" />
        </div>
      </div>
    </MainLayout>
  );
});

export default AuthFormView;
