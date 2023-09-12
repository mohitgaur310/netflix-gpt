import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer=(id)=>{
    const dispatch =useDispatch();

    const getTrailerMovie = async () => {
    console.log(id);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
   
    const videoList = json.results;
    console.log(videoList);
    const trailerLink = videoList.filter((video) => {
      return video.key === "Trailer" ? video : null;
    });
    console.log(trailerLink);
    const trailer= trailerLink.length ? trailerLink[0] : json.results[3];
    console.log(trailer.key); 
    dispatch(addTrailerMovie(trailer.key))
  };


  useEffect(() => {
    getTrailerMovie();
  }, []);

}

export default useMovieTrailer;