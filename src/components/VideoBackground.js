import React from "react";
import {  useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
    const movieKey= useSelector((store)=>store.movies?.trailerMovie)
    useMovieTrailer(id);
    return (
    <div className="">
      <iframe className=" w-full h-auto -z-10"

        src={"https://www.youtube.com/embed/dG91B3hHyY4?si="+movieKey}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
