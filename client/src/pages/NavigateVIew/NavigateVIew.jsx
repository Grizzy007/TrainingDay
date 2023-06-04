import React from "react";
import { useNavigate } from "react-router-dom";

// Component
import { IconEntry } from "../../components/Icons";

// Constant
import { PAGE } from "../../config/config";

// Styles
import "./NavigateVIew.css";

const NavigateVIew = () => {
  const navigate = useNavigate();

  return (
    <div className="v-navigate">
      <div className="v-navigate__block v-navigate__block_team">
        <div className="v-navigate__block-wrapper">
          <div className="v-navigate__block-caption">
            <h2
              className="v-navigate__caption"
              onClick={() => navigate(PAGE.HOME.PATH)}
            >
              HOME
            </h2>
          </div>
          <div className="v-navigate__description">
            <div className="v-navigate__stick" />
            <div className="v-navigate__text">
              Information about our sports app, team and its benefits to help
              you reach your fitness goals.
            </div>
          </div>
        </div>
      </div>
      <div className="v-navigate__block v-navigate__block_catalog">
        <div className="v-navigate__block-wrapper">
          <div className="v-navigate__block-caption">
            <h2 className="v-navigate__caption">CATALOG</h2>
          </div>
          <div className="v-navigate__description">
            <div className="v-navigate__stick" />
            <div className="v-navigate__text">
              Views of training programs for different muscle categories, with
              descriptions and options.
            </div>
          </div>
        </div>
      </div>
      <div className="v-navigate__block v-navigate__block_suggest-new-program">
        <div className="v-navigate__block-wrapper">
          <div className="v-navigate__block-caption">
            <h2 onClick={() => navigate(PAGE.SUGGEST_NEW_PROGRAM.PATH)} className="v-navigate__caption">SUGGEST NEW PROGRAM</h2>
          </div>
          <div className="v-navigate__description">
            <div className="v-navigate__stick" />
            <div className="v-navigate__text">
              Here you can suggest a new training program for the development of
              our application.
            </div>
          </div>
        </div>
      </div>
      <div className="v-navigate__block v-navigate__block_user-profile">
        <div className="v-navigate__block-wrapper">
          <div className="v-navigate__block-caption">
            <h2 className="v-navigate__caption">
              <IconEntry onClick={() => navigate(PAGE.USERPROFILE.PATH)}/>
            </h2>
          </div>
          <div className="v-navigate__description">
            <div className="v-navigate__stick" />
            <div className="v-navigate__text">
              Access to your account and personalized application settings.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigateVIew;
