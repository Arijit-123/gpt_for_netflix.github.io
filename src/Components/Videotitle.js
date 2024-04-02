import React from 'react'

function Videotitle({title, overview}) {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text text-6xl'>{title}</h1>
      <p className='pt-4'>{overview}</p>
      <div className='mt-6'>
        <button className='px-12 py-2 bg-gray-500 mx-4 rounded-lg bg-opacity-50'>▶ Play</button>
        <button className='px-12 py-2 bg-gray-500 mx-4 rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle
