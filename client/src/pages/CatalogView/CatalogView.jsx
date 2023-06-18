import React from "react";

import baki from "../../assert/photo/catalog/baki.jpg";

import MainLayout from "../../components/MainLayout";

import "./CatalogView.css";

const CatalogView = () => {
  return (
    <MainLayout>
      <div className="v-catalog">
        <div className="v-catalog__caption">
          <span className="v-catalog__caption-text fs-1 fw-bold text-white">
            CATALOG
          </span>
        </div>
        <div className="container">
          <div className="v-catalog__description">
            <img src={baki} alt="Baki" />
            <div className="v-catalog__familiarization">
              <div className="v-catalog__quote">
                <p className="v-catalog__quote-text fw-bold fs-2">
                  "There is no limit to what you can achieve if you are not
                  afraid to train every muscle group."
                </p>
                <p className="v-catalog__quote-author text-end">
                  Arnold Schwarzenegger
                </p>
              </div>
              <p className="v-catalog__familiarization-text">
                Great results require total dedication and effort. Our body is
                an amazing machine that can overcome any obstacles. Don't limit
                yourself to one type of workout. Unleash the potential of every
                muscle group and transform your body into perfection. Work on it
                entirely, and you will understand that the possibilities of your
                body are endless. Together with us you will achieve incredible
                results by training each muscle group - because they deserve to
                be strong, fit and ready for the challenges of life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CatalogView;
