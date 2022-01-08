import React from "react";
import ReactPlayer from "react-player/youtube";
import "./WhyENVER.css";

function WHYEnver() {
  return (
    <div className="pt-24 layout">
      <div className="flex flex-col justify-between mb-[3.125rem] md:items-center md:flex-row ">
        <h1 className="flex-1 md:text-6xl text-4xl sm:leading-[4.375rem] leading-[3.375rem] font-bold">
          Why Enver Is The Best Choice
        </h1>
        <p className="flex-1 text-base leading-8 md:leading-10 sm:text-lg opacity-70 md:mt-0 mt-7">
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className="react-player__wrapper">
        <ReactPlayer
          className="react-player__wrapper-video"
          width={"100%"}
          url=" https://www.youtube.com/watch?v=HbBMp6yUXO0"
          height={"100%"}
          controls={false}
          playing
        />
      </div>
    </div>
  );
}

export default WHYEnver;
