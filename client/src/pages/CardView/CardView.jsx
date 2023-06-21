import React, { useContext, useEffect, useState } from "react";

import "./CardView.css";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import MainLayout from "../../components/MainLayout/MainLayout";
import ReactPlayer from "react-player";
import { cardById } from "../../hooks/programApi";
import { useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

const CardView = observer(() => {
  const { activeCard } = useContext(Context);

  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    cardById(params.catalogId)
      .then((response) => {
        if (response.data.id === null) {
          throw new Error();
        }
        activeCard.setActiveCarData(response.data);
      })
      .catch(() => {
        toast.error("Oops! Something went wrong...");
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <div
        className="v-card container"
        style={{
          width: loading ? 50 : "",
          height: loading ? 50 : "",
          justifyContent: loading ? "center" : "",
        }}
      >
        <Toaster />
        {loading && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {activeCard.getActiveCardData && (
          <>
            <p className="v-card__title text-center fs-1 fw-bold">
              {activeCard.getActiveCardData.name}
            </p>
            <div className="v-card__clarifications">
              <div className="v-card__time-group-wrapper fw-medium fs-4">
                <span className="v-card__time text-danger">
                  {activeCard.getActiveCardData.duration + "h"}
                </span>
                <span className="v-card__muscle-group text-white">
                  {activeCard.getActiveCardData.group}
                </span>
              </div>
              <span className="v-card__author fs-2 fst-italic">
                {activeCard.getActiveCardData?.trainer
                  ? `Created by ${activeCard.getActiveCardData.trainer}`
                  : "Secret author"}
              </span>
            </div>
            <ReactPlayer
              url={activeCard.getActiveCardData.link}
              controls
              className="video v-card__video"
            />
            <div className="v-card__description text-white">
              <p className="fw-medium fs-4">Description: </p>
              <p className="v-card__description-text">
                {activeCard.getActiveCardData.description}
              </p>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
});

export default CardView;
