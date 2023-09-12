import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies=()=>{

    const dispatch=useDispatch()
    const fetchingPopularMovies= async()=>{
        const data =  await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
        const json=await data.json()
 
        dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
        fetchingPopularMovies();
    },[]);
}

export default usePopularMovies;