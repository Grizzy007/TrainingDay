import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";

import MainLayout from "../../components/MainLayout";
import InputProgramControl from "../../components/InputProgramControl";

import "./SuggestNewProgramView.css";
import { IconYouTubeError } from "../../components/Icons";
import TextAreaProgramControl from "../../components/TextAreaProgramControl/TextAreaProgramControl";
import { newProgram } from "../../hooks/programApi";
import { Context } from "../..";

const SuggestNewProgramView = () => {
  const defaultFormData = {
    name: "",
    muscleGroup: "",
    duration: "",
    link: "",
    definition: "",
    description: "",
  };

  const { user } = useContext(Context);

  const youtubeRegex =
    // eslint-disable-next-line no-useless-escape
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

  const [formData, setFormData] = useState(defaultFormData);
  const [isViewVideo, setIsViewVideo] = useState(false);
  const [isYoutubeError, setIsYouTubeError] = useState(false);

  const handleChange = (e) => {
    const eventTarget = e.currentTarget;
    setFormData({
      ...formData,
      [eventTarget.name]: eventTarget.value,
    });

    if (!youtubeRegex.test(formData.link) && eventTarget.name === "link") {
      setIsYouTubeError(true);
    } else {
      setIsYouTubeError(false);
    }
  };

  const handleCheckVideo = (e) => {
    e.preventDefault();
    setIsViewVideo(true);
  };

  const handleSubmit = async() => {
    const response = await newProgram({...formData, trainer: user.getUserData().nickname});
    console.log(response.status);
  }

  return (
    <MainLayout>
      <div className="v-suggest-new-program">
        <div className="container">
          <div className="v-suggest-new-program__container">
            <div className="v-suggest-new-program__form">
              <InputProgramControl
                label="Name"
                name="name"
                value={formData.name}
                placeholder="Enter workout name"
                onChange={handleChange}
              />
              <InputProgramControl
                label="Muscle Group"
                name="group"
                value={formData.groups}
                placeholder="Enter Enter workout name"
                onChange={handleChange}
              />
              <InputProgramControl
                label="Duration"
                name="duration"
                value={formData.duration}
                placeholder="Enter workout time"
                onChange={handleChange}
              />
              <InputProgramControl
                label="Upload video link"
                name="link"
                value={formData.link}
                placeholder="Enter youtube URL"
                onChange={handleChange}
                handleClick={handleCheckVideo}
              />
              <TextAreaProgramControl
                label="Definition"
                name="definition"
                value={formData.definition}
                placeholder="Enter youtube definition"
                onChange={handleChange}
              />
              <TextAreaProgramControl
                label="Definition"
                name="description"
                value={formData.description}
                placeholder="Enter youtube description"
                onChange={handleChange}
              />
              <button
                style={{ minWidth: 220 }}
                className="btn btn-outline-warning btn-lg ms-2"
                type="button"
                onClick={handleSubmit}
              >
                <span className="fw-bold fs-5">SAVE</span>
              </button>
            </div>
            {isViewVideo && (
              <div className="v-suggest-new-program__view-video">
                <div className="v-suggest-new-program__youtube-box">
                  {isYoutubeError ? (
                    <div className="v-suggest-new-program__error">
                      <IconYouTubeError />
                      <span className="fw-bolder fs-5">Oops!No valid link</span>
                    </div>
                  ) : (
                    <ReactPlayer
                      url={formData.link}
                      controls
                      className="video"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SuggestNewProgramView;
