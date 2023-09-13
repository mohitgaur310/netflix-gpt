import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const moviesList=useSelector((store)=>store?.GPT?.gptMovies)
  console.log(moviesList);
  return (
    <div>
{moviesList?.map((movie,index)=> <MovieList  key={index} movies={movie} title=''  /> )}
      
    </div>
  );
};

export default GptMovieSuggestion;