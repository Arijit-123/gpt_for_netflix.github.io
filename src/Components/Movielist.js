import React from 'react'
import Moviecards from './Moviecards'

function Movielist({title, movies}) {

  console.log('title new',title);
  console.log("new movies",movies);
  // console.log("movie one", typeof)
  return (
    <>
    <div className=''>
   <div className='text text-3xl text-white pt-6 '> {title}</div>
    <div className='flex overflow-x-scroll p-6 no-scrollbar'>
<div className='flex ml-2'>
    {
movies?.map((movie)=>

<Moviecards   key={movie.id} posterpath={movie.poster_path}/>)


    }
    </div>
      
    </div>
    </div>
    </>
  )
}

export default Movielist
