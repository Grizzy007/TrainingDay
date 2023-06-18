import React from "react";

import "./Card.css";
import MuscleAvatar from "../MuscleAvatar/MuscleAvatar";

const Card = (props) => {
  const { nameCard, definitionCard, timeCard, groupCard, handleClick } = props;
  return (
    <div className="card bg-dark text-white" onClick={handleClick}>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{nameCard}</h5>
        <p className="card-text">{definitionCard}</p>
        <div className="card-bottom d-flex justify-content-between">
          <span href="#" className="btn" style={{ backgroundColor: "#B15603" }}>
            {timeCard + "h"}
          </span>
          <MuscleAvatar muscleGroup={groupCard} />
        </div>
      </div>
    </div>
  );
};

export default Card;
