import React from "react";

import "./MuscleAvatar.css";
import { IconBack, IconChest, IconHands, IconLegs } from "../Icons";

const MuscleAvatar = (props) => {
  const { muscleGroup } = props;

  const handleSelectMuscle = () => {
    switch (muscleGroup) {
      case "Hands":
        return <IconHands />;
      case "Back":
        return <IconBack />;
      case "Chest":
        return <IconChest />;
      case "Legs":
        return <IconLegs />;
      default:
        break;
    }
  };

  return <div className="c-muscle-avatar">{handleSelectMuscle()}</div>;
};

export default MuscleAvatar;
