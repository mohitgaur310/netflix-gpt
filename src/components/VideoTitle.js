import React from 'react'

const VideoTitle = ({title,overview}) => {
    
    return (
    <div className='pt-24 pl-8 '>
        <h1 className='text-4xl font-bold p-2'>{title} </h1>
        <p className='py-6 text-m w-1/4' >{overview}</p>
        <div  >
            <button className='py-2 rounded-lg px-6 w-32 bg-slate-400 mx-3'>   Play</button>
            <button className=' py-2 rounded-lg px-4 bg-gray-400' > More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle