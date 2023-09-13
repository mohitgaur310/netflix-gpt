import { FaPlay, FaInfoCircle } from "react-icons/fa";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-24  absolute text-white">
      <h1 className="text-2xl md:text-5xl font-bold p-2 md:ml-0 -ml-16 md:mt-0 mt-40">
        {title}
      </h1>
      <p className="py-6 text-m w-1/4 invisible  md:visible">{overview}</p>
      <div className=" md:-mt-0 -mt-[380%] md:-ml-0 -ml-16 ">
        <button className="md:pt-0 pb-3  md:pb-4  rounded-lg md:px-12 px-6 bg-white font-bold text-sm md:text-lg mx-3 text-black hover:bg-opacity-80">
          <FaPlay className="relative md:-left-6 md:top-6 -left-5 top-[18px]" />
          Play
        </button>
        <button className="  pt-0   pb-3 rounded-lg px-6 md:px-10 bg-gray-600 font-bold text-sm md:text-lg">
          <FaInfoCircle className="relative md:-left-6 md:top-6 -left-4 top-[18px]  " />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
