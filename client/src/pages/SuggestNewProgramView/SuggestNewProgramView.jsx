import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import MainLayout from "../../components/MainLayout";
import InputProgramControl from "../../components/InputProgramControl";

import "./SuggestNewProgramView.css";
import { IconYouTubeError } from "../../components/Icons";

const SuggestNewProgramView = () => {
  const defaultFormData = {
    name: "",
    groups: "",
    duration: "",
    link: "",
    description: "",
  };

  const youtubeRegex =
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
     
    if (!youtubeRegex.test(formData.link) && eventTarget.name === 'link') {
      setIsYouTubeError(true);
    } else {
      setIsYouTubeError(false);
    }
  };

  const handleCheckVideo = (e) => {
    e.preventDefault();
    setIsViewVideo(true);
  };

  useEffect(() => {
    console.log(formData); 
  })

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
                label="Muscle Groups"
                name="groups"
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
