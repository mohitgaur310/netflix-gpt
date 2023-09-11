import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(id)=>{
    const dispatch =useDispatch();

    const getTrailerMovie = async () => {
    
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const videoList = json.results;
    const trailerLink = videoList.filter((video) => {
      return video.key === "Trailer" ? video : null;
    });
    const trailer= trailerLink.length ? trailerLink[0] : json.results[0]; 
    dispatch(addTrailerMovie(trailer.key))
  };


  useEffect(() => {
    getTrailerMovie();
  }, []);

}

export default useMovieTrailer;