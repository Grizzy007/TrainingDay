import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import MainLayout from "../../components/MainLayout";
import InputProgramControl from "../../components/InputProgramControl";

import "./SuggestNewProgramView.css";
import { IconYouTubeError } from "../../components/Icons";
import TextAreaProgramControl from "../../components/TextAreaProgramControl/TextAreaProgramControl";
import { newProgram } from "../../hooks/programApi";
import { Toaster, toast } from "react-hot-toast";

const SuggestNewProgramView = () => {
  const defaultFormData = {
    name: "",
    muscleGroup: "",
    duration: "",
    link: "",
    definition: "",
    description: "",
  };

  const youtubeRegex =
    // eslint-disable-next-line no-useless-escape
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/;

  const [formData, setFormData] = useState(defaultFormData);
  const [isViewVideo, setIsViewVideo] = useState(false);
  const [isYoutubeError, setIsYouTubeError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

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

  const handleSubmit = async () => {
    try {
      await newProgram(formData);
      toast.success("Successfully send!");
    } catch (error) {
      toast.error("Oops! Something went wrong...");
    }
  };

  useEffect(() => {
    Object.values(formData).forEach((item) => {
      if (!item) {
        console.log("yes", item);
      }
    });
    const isEmptyField =
      Object.entries(formData).find((item) => !item[1]) === undefined
        ? false
        : true;
    setIsDisabled(isEmptyField);
  }, [formData]);

  return (
    <MainLayout>
      <Toaster />
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
                name="muscleGroup"
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
                label="Description"
                name="description"
                value={formData.description}
                placeholder="Enter youtube description"
                onChange={handleChange}
              />
              <button
                disabled={isDisabled}
                className="btn btn-outline-warning btn-lg ms-2"
                type="button"
                onClick={handleSubmit}
                style={{
                  minWidth: 220,
                  borderWidth: 4,
                  borderColor: isDisabled ? "#959595" : "",
                  color: isDisabled ? "#959595" : "",
                }}
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
