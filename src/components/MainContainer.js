import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies= useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null) return;
    const indexMovie=Math.floor(Math.random() * (6 - 1) + 1);
    const mainMovie=movies[indexMovie];
    const { original_title, overview, id }=mainMovie

  return (
    <div className=''>
    <VideoTitle  title={original_title} overview={overview} />
    <VideoBackground id={id} />
    
    </div>
  )
}

export default MainContainer