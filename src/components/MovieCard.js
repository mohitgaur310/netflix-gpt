import React from 'react'
import { MOVIE_IMG } from '../utils/Constants'

const MovieCard = ({poster}) => {
  return (
    <div className='flex w-48 h-64 pr-4'>
        
        <img src={MOVIE_IMG+poster} alt='img' />
    </div>
  )
}

export default MovieCard