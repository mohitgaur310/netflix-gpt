import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { LOGIN_IMG } from "../utils/Constants";

const GptSearch = () => {
 return (  <>
 <div className="fixed  -z-10">
        <img src={LOGIN_IMG} className="h-screen md:w-screen object-cover " alt="login-img" />
      </div>
 <div className="  md:p-0 ">
 
    <GptSearchBar />
    <GptMovieSuggestion />
  </div>
  </>);
};

export default GptSearch;
