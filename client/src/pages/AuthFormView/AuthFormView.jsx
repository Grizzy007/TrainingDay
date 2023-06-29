import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { login, registration } from "../../hooks/userApi";
import { Context } from "../..";
import toast, { Toaster } from "react-hot-toast";

import rock from "../../assert/photo/authentication/rock.jpg";

import { PAGE } from "../../config/config";

import MainLayout from "../../components/MainLayout";

import "./AuthFormView.css";

const AuthFormView = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = useContext(Context);

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
    login: "No valid your email",
    password: "Password must be more than 6 characters",
    confirmPassword: "Passwords should be equal",
  };

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-/.]+[.][a-zA-Z0-9-]+$/;

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

    // if (!currentFormDate.login && !currentFormDate.password) {
    //   return tempFormError;
    // }

    if (!validateEmail(currentFormDate.login)) {
      tempFormError.login = errorText.login;
      tempFormError.hasError = true;
    }

    if (!validatePassword(currentFormDate.password)) {
      tempFormError.password = errorText.password;
      tempFormError.hasError = true;
    }

    if (location.pathname === PAGE.LOGIN.PATH) return tempFormError;

    if (
      !validateConfirmPassword(
        currentFormDate.password,
        currentFormDate.confirmPassword
      )
    ) {
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

    if (
      formError.password !== errorText.password &&
      formError.confirmPassword !== errorText.confirmPassword
    ) {
      setFormError({ ...defaultFormError });
    } else {
      setFormError(clearCurrentError);
    }
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

  const registerUser = async (data) => {
    try {
      await registration(data);
      toast.success("Successfully registered!");
      toast("Now, we can login", {
        icon: "📢",
      });
      navigate(PAGE.LOGIN.PATH);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error || 'Oops. Something went wrong');
      setFormError({
        ...formError,
        confirmPassword: error.response.data.error,
        hasError: true,
      });
    }
  };

  const loginUser = async (data) => {
    try {
      const response = await login(data);
      user.setUserData(response);
      user.setIsAuth(true);
      toast.success("Successfully login!", {
        duration: 1000,
      });
      setTimeout(() => navigate(user.getGuardPath), 1000);
    } catch (error) {
      toast.error(`${error.response.data.error}`);
      setFormError({
        ...formError,
        password: error.response.data.error,
        hasError: true,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formError.hasError) return;

    if (location.pathname === PAGE.REGISTRATION.PATH) {
      return registerUser(authData);
    }

    if (location.pathname === PAGE.LOGIN.PATH) {
      return loginUser(authData);
    }
  };

  useEffect(() => {
    const isHasFormError = formError.hasError;
    const isValidateError = validateForm(authData).hasError;
    if (!authData.login && !authData.password) {
      setIsDisabledBtn(true);
    } else {
      setIsDisabledBtn(isHasFormError || isValidateError);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formError]);

  useEffect(() => {
    if (location.pathname === PAGE.SUGGEST_NEW_PROGRAM.PATH || location.pathname === PAGE.USERPROFILE.PATH) {
      navigate(PAGE.REGISTRATION.PATH);
    }
    setFormError(defaultFormError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <MainLayout>
      <Toaster />
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
                  <span className="v-auth-input__error">
                    {formError.password}
                  </span>
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
