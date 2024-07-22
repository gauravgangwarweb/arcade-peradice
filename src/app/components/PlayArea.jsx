"use client";

import { useState } from "react";

const PlayArea = () => {
  const [isHoveredRoll, setIsHoveredRoll] = useState(false);
  const [isActiveRoll, setIsActiveRoll] = useState(false);

  const [isHoveredConfirm, setIsHoveredConfirm] = useState(false);
  const [isActiveConfirm, setIsActiveConfirm] = useState(false);

  const defaultRoll = "static-roll-btn.png";
  const hoverRoll = "hover-roll-btn.png";
  const activeRoll = "active-roll-btn.png";

  const defaultConfirm = "static-confirm-btn.png";
  const hoverConfirm = "hover-confirm-btn.png";
  const activeConfirm = "active-confirm-btn.png";

  const rollImageSource = () => {
    if (isActiveRoll) {
      return activeRoll;
    } else if (isHoveredRoll) {
      return hoverRoll;
    } else {
      return defaultRoll;
    }
  };

  const confirmImageSource = () => {
    if (isActiveConfirm) {
      return activeConfirm;
    } else if (isHoveredConfirm) {
      return hoverConfirm;
    } else {
      return defaultConfirm;
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img
        className="w-full"
        loading="lazy"
        src="middle-image.png"
        alt="middle-image"
      />
      <div className="mt-6 ">
        <div className="flex flex-col md:flex-row gap-10">
          <button
            onMouseEnter={() => setIsHoveredRoll(true)}
            onMouseLeave={() => setIsHoveredRoll(false)}
            onMouseDown={() => setIsActiveRoll(true)}
            onMouseUp={() => setIsActiveRoll(false)}
          >
            <img src={rollImageSource()} alt="button icon" />
          </button>
          <button
            onMouseEnter={() => setIsHoveredConfirm(true)}
            onMouseLeave={() => setIsHoveredConfirm(false)}
            onMouseDown={() => setIsActiveConfirm(true)}
            onMouseUp={() => setIsActiveConfirm(false)}
          >
            <img src={confirmImageSource()} alt="button icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
