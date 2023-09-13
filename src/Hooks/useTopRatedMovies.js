import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/Constants"
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies=()=>{
    const dispatch = useDispatch();
    const isTopMovies =useSelector((store)=> store?.movies.topRatedMovies)
    const topRatedMovies=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS)
        const json= await data.json();
         dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
      !isTopMovies &&  topRatedMovies();
    },[])
}

export default useTopRatedMovies