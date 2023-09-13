import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";

const useNowPlayingMovies=()=>{
    const dispatch =useDispatch();
    const isNowPlayingMovie = useSelector((store) => store?.movies.nowPlayingMovies);
  
    const getNowPlayingMovies = async() =>{
      const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const json = await data.json()
      
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      !isNowPlayingMovie && getNowPlayingMovies()
    },[])

}

export default useNowPlayingMovies;