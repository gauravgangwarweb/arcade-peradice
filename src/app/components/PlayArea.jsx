"use client";

import { useState } from "react";

const PlayArea = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {play ? (
        <img
          className="w-full"
          loading="lazy"
          src="middle-image2.png"
          alt="middle-image"
        />
      ) : (
        <img
          className="w-full"
          loading="lazy"
          src="middle-image.png"
          alt="middle-image"
        />
      )}
      <div className="mt-6 md:mt-0">
        {play ? (
          <div className="flex flex-col md:flex-row gap-10">
            <button className="roll-button px-[60px] md:px-[70px] py-[15px] md:py-[10px]">ROLL (1/10)</button>
            <button className="confirm-button flex justify-center items-center"><span>CONFIRM ROLL</span></button>
          </div>
        ) : (
          <button
            onClick={() => setPlay(true)}
            className="text-[#A6FFEE] text-lg font-semibold button flex justify-center items-center"
          >
            <span>MINT TO PLAY</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayArea;
