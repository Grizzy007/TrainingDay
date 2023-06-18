import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import toast, { Toaster } from "react-hot-toast";

import MainLayout from "../../components/MainLayout";
import { IconUserProfile } from "../../components/Icons";
import InputControl from "../../components/InputControl";

import { Context } from "../..";

import { PAGE } from "../../config/config";
import { updateUser } from "../../hooks/userApi";

const UserProfileView = observer(() => {
  const navigate = useNavigate();

  const { user } = useContext(Context);

  const defaultUserDate = {
    nickname: "",
    birthday: "",
    email: "",
    phoneNumber: "",
  };

  const [userData, setUserDate] = useState(user.getUserData || defaultUserDate);

  const handleChange = (event) => {
    const eventTarget = event.currentTarget;

    setUserDate({
      ...userData,
      [eventTarget.name]: eventTarget.value,
    });
  };

  const updateUserData = async (data) => {
    try {
      await updateUser(data);
      toast.success("Successfully updated!");
    } catch (error) {
      toast.error(`${error.response.data.error}`);
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();

    user.setUserData(userData);
    updateUserData(userData);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setUserDate(user.getUserData);
  };

  const handleLogOut = () => {
    user.setIsAuth(false);
    user.setUserData(null);
    localStorage.setItem("token", "");
    navigate(PAGE.NAVIGATE.PATH);
  };

  return (
    <MainLayout>
      <Toaster />
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
              name="nickname"
              placeholder="Enter your name"
              onChange={handleChange}
              value={userData.nickname || ""}
            />
            <InputControl
              label="Date of Birth"
              type="date"
              name="birthday"
              placeholder="Enter your name"
              onChange={handleChange}
              value={userData.birthday || ""}
            />
            <InputControl
              label="Email"
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={userData.email || ""}
            />
            <InputControl
              label="Mobile"
              type="text"
              name="phoneNumber"
              placeholder="+380 97 886 0761"
              onChange={handleChange}
              value={userData.phoneNumber || ""}
            />
          </div>
          <div className="d-grid gap-2 d-md-block">
            <button
              style={{ minWidth: 220 }}
              className="btn btn-danger btn-lg me-2 "
              type="button"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button
              style={{ minWidth: 220 }}
              className="btn btn-success btn-lg ms-2"
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
