import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const translate = useSelector((store) => store.GPT.languageGpt);
  const textSearch = useRef("");
  const dispatch=useDispatch()
  const searchQuery =
    "Act as a movie Recommendation system and suggest some movies for the query :" +
    textSearch.current.value +
    ". Only give me 5 movies, comma seperated like the exaple result given head. Example  Result: Gadar, Avanger:Civil War, Koi mil Gaya, Don";
  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptText = async () => {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieResult = completion?.choices[0]?.message?.content.split(", ");
    const promisedData = movieResult.map((movie) => searchMovies(movie));
    const tmdbData= await Promise.all(promisedData)
    dispatch(addGptMovies({moviesNames:movieResult,movieResultsTMDB:tmdbData}))
    console.log(movieResult);
  };
  return (
    <div className="py-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={textSearch}
          type="text"
          className="col-span-9  border rounded-lg m-4 p-4 px-4"
          placeholder={lang[translate].gptSearchPlaceholder}
        />
        <button
          className=" bg-red-700 text-white py-2 px-4 m-4 rounded-lg col-span-3 hover:bg-red-800"
          onClick={handleGptText}
        >
          {lang[translate].Search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
