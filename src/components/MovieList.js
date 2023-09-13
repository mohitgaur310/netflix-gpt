import React from 'react'

import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    
    return (
    <div className=' p-6  w-screen' >
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
    <div className=' flex  overflow-x-scroll'>
        <div className='flex '>
        {movies?.map((movie)=> <MovieCard name='browse' key={movie?.id} poster={movie?.poster_path} />)}
        </div>  
    </div>
 
    </div>
  )
}

export default MovieList