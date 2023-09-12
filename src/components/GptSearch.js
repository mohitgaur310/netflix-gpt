import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_IMG } from "../utils/Constants";

const GptSearch = () => {
 return ( <div className=" ">
 <div className="absolute -z-10">
        <img src={LOGIN_IMG} className="" alt="login-img" />
      </div>
    <GptSearchBar />
    <GptMovieSuggestion />
  </div>);
};

export default GptSearch;
