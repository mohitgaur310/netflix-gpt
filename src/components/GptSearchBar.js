import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const translate=useSelector((store)=> store.GPT.languageGpt)
  return (
    <div className='py-[8%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type='text' className='col-span-9  border rounded-lg m-4 p-4 px-4' placeholder={lang?.[translate].gptSearchPlaceholder} />
            <button className=' bg-red-700 text-white py-2 px-4 m-4 rounded-lg col-span-3 hover:bg-red-800'>{lang?.[translate].Search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar