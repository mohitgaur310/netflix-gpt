import React from "react";
import { MOVIE_IMG } from "../utils/Constants";

const MovieCard = ({ poster, name }) => {
  if(!poster) return null
  return (
    <div className="w-36 md:w-48 pr-4 ">
      <img src={MOVIE_IMG + poster}  alt="img" />
    </div>
  );
};

export default MovieCard;
