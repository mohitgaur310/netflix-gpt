import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null) return;
    console.log('Length of the array',movies.length);
    const indexMovie=Math.floor(Math.random() * (6 - 1) + 1);
    console.log(indexMovie);
    const mainMovie=movies[indexMovie];
    console.log(mainMovie);
    const { original_title, overview, id }=mainMovie

  return (
    <div className=''>
    <VideoTitle  title={original_title} overview={overview} />
    <VideoBackground id={id} />
    
    </div>
  )
}

export default MainContainer