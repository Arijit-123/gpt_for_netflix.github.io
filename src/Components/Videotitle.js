import React from 'react'

function Videotitle({title, overview}) {
  return (
    <div className='pt-36 px-12 absolute '>
      <h1 className='text text-6xl text-white w-2/4'>{title}</h1>
      <p className='pt-4 text text-white w-1/4'>{overview}</p>
      <div className='mt-6'>
        <button className='px-12 py-2 bg-white mx-4 rounded-lg bg-opacity-50 hover:bg-opacity-80'>▶ Play</button>
        <button className='px-12 py-2 bg-gray-500 mx-4 rounded-lg bg-opacity-50'>ℹ More Info</button>
      </div>
    </div>
  )
}

export default Videotitle
