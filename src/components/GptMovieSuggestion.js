import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const moviesList = useSelector((store) => store?.GPT?.gptMovies);
  const moviesName = useSelector((store) => store?.GPT?.gptMovieNames);
  
  return (
    <div className="bg-black bg-opacity-80">
      {moviesList?.map((movie, index) => (
        <MovieList key={index} movies={movie} title={moviesName[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
