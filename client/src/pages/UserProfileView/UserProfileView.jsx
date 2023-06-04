import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

import MainLayout from "../../components/MainLayout";
import { IconUserProfile } from "../../components/Icons";
import InputControl from "../../components/InputControl";

import { Context } from "../..";
import { updateUser } from "../../http/userAPI";

import { PAGE } from "../../config/config";


const UserProfileView = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const defaultUserDate = {
    userName: "",
    birth: "",
    email: "",
    phone: "",
  };

  
  // console.log(user.userData());
  // console.log(user.userData);
  // console.log(user.userData());

  const [userData, setUserDate] = useState(defaultUserDate);

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;

    setUserDate({
      ...userData,
      [eventTarget.name]: eventTarget.value,
    });
  };

  const handleSave = async(event) => {
    event.preventDefault();

    const response = await updateUser(userData);

    setUserDate(response);
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setUserDate(user);
  };

  const handleLogOut = () => {
    user.setIsAuth(false);
    user.setUser(null);
    navigate(PAGE.NAVIGATE.PATH);
  };

  useEffect(() => {
    console.log(userData); 
  })

  return (
    <MainLayout>
      <div className="v-auth row g-0">
        <div className="v-auth__left col-6 p-4 col-md-3 text-white bg-black d-flex flex-column justify-content-around">
          <div className="v-auth__wrap-user">
            <div
              className="v-auth__user m-auto mb-2 bg-white rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: 120, height: 120 }}
            >
              <IconUserProfile style={{ fill: "black", width: 48 }} />
            </div>
            <div className="v-auth__user-subtitle text-center fw-bolder fs-4">
              Let`s get you set up
            </div>
          </div>
          <button
            onClick={handleLogOut}
            className="fw-bolder btn btn-light"
            type="button"
          >
            Log out
          </button>
        </div>
        <div className="v-auth__right d-flex flex-column justify-content-center align-items-center col-sm-6 col-md-9">
          <div className="v-auth__input-control p-2 mb-5">
            <InputControl
              label="Username"
              type="text"
              name="userName"
              placeholder="Enter your name"
              onChange={handleChange}
              value={userData.userName}
            />
            <InputControl
              label="Date of Birth"
              type="date"
              name="birth"
              placeholder="Enter your name"
              onChange={handleChange}
              value={userData.birth}
            />
            <InputControl
              label="Email"
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={userData.email}
            />
            <InputControl
              label="Mobile"
              type="text"
              name="phone"
              placeholder="+380 97 886 0761"
              onChange={handleChange}
              value={userData.phone}
            />
          </div>
          <div className="d-grid gap-2 d-md-block">
            <button
              style={{ minWidth: 220 }}
              className="btn btn-secondary btn-lg me-2 "
              type="button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button
              style={{ minWidth: 220 }}
              className="btn btn-secondary btn-lg ms-2"
              type="button"
              onClick={handleSave}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
});

export default UserProfileView;
