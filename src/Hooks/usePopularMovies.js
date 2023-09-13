import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{
    const isPopularMovie=useSelector((store=> store.movies.popularMovies))
    const dispatch=useDispatch()
    const fetchingPopularMovies= async()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json=await data.json()
 
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
       !isPopularMovie && fetchingPopularMovies();
    },[]);
}

export default usePopularMovies;