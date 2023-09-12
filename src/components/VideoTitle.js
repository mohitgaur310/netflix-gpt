import { FaPlay, FaInfoCircle } from "react-icons/fa";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-24  absolute text-white">
      <h1 className="text-5xl font-bold p-2">{title} </h1>
      <p className="py-6 text-m w-1/4">{overview}</p>
      <div>
        <button className="pt-0  pb-3  rounded-lg px-12  bg-white font-bold text-lg mx-3 text-black hover:bg-opacity-80">
          <FaPlay className="relative -left-6 top-6" /> Play
        </button>
        <button className="  pt-0  pb-3 rounded-lg px-10 bg-gray-600 font-bold text-lg">
          <FaInfoCircle className="relative -left-6 top-6  " /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
