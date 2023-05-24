import React from "react";

import equinox from "../../assert/logo/equinox.png";
import harbourLogoBlack from "../../assert/logo/harbour-logo-black.png";

import MainLayout from "../../components/MainLayout";

import "./HomeView.scss";

const HomeView = () => {
  return (
    <MainLayout>
      <div className="v-home">
        <div className="container">
          <div className="v-home__caption align-items-center d-flex flex-column mb-5 pt-5">
            <h2 className="fw-bold text-primary">
              Welcome to out web app fro physical training!
            </h2>
            <button type="button" className="btn btn-outline-info btn-lg">
              Donate
            </button>
          </div>
          <div className="v-home__about-project ">
            <div className="row mb-5 ">
              <div className="v-home__description col">
                <h3 className="v-home__description-title fw-bolder text-info">
                  HOW IT WORK
                </h3>
                <div className="v-home__description-body text-white fs-5 bg-dark p-4 rounded">
                  Our platform is designed to provide you with effective and
                  personalized training programs to help you achieve your
                  fitness goals. Our app is built on the belief that fitness
                  should be accessible to everyone, which is why we have created
                  a platform that allows users to add their own programs to
                  share with others.
                </div>
              </div>
              <div className="v-home__advantages col">
                <h3 className="v-home__advantages-title text-info">
                  OUR PARTNERS
                </h3>
                <div className="row">
                  <div className="bg-white col d-flex justify-content-center">
                    <img
                      style={{ width: "auto", height: 90 }}
                      src={equinox}
                      alt=""
                    />
                  </div>
                  <div className="bg-white col d-flex justify-content-center">
                    <img
                      style={{ width: "auto", height: 90 }}
                      src={harbourLogoBlack}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="v-home__advantages">
              <h3 className="v-home__advantages-title fw-bolder text-info">
                WHY ARE WE?
              </h3>
              <div
                className="v-home__advantages-blocks justify-content-between mb-3"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(200px, 200px))",
                  gap: 10,
                }}
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Program Variety</h5>
                    <p className="card-text">
                      Our platform offers a wide range of workout programs to
                      choose from, including programs designed for different
                      fitness levels, goals, and preferences.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      Personalized Training Programs
                    </h5>
                    <p className="card-text">
                      Our platform offers personalized training programs that
                      are tailored to your fitness level, goals, and
                      preferences.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Accessible from Anywhere</h5>
                    <p className="card-text">
                      Our app is easy to use and accessible from anywhere.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Motivational Features</h5>
                    <p className="card-text">
                      Our platform also offers a variety of features to help you
                      stay motivated and track your progress.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Community</h5>
                    <p className="card-text">
                      Our platform is also a community of fitness enthusiasts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeView;
