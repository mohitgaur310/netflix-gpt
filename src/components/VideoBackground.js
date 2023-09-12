import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
    const movieKey= useSelector((store)=>store.movies?.trailerMovie)

    useMovieTrailer(id);
    return (
    <div className="">
      <iframe className="w-screen aspect-video"
        
        src={"https://www.youtube.com/embed/"+movieKey+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
