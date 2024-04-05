import React from 'react'
import Movielist from './Movielist'
import {useSelector} from 'react-redux';


function Secondarycontainer() {
const movies=useSelector(store=>store.movies);
console.log("movies now",movies);

  return (
   
    movies.nowplayingmovies &&(
      <>
      <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20'>
<Movielist title={"Now Playing"} movies={movies.nowplayingmovies}/>
<Movielist title={"Trending"} movies={movies.nowplayingmovies}/>
<Movielist title={"Popular"} movies={movies.nowplayingmovies}/>
<Movielist title={"Upcoming Movies"} movies={movies.nowplayingmovies}/>
</div>
</div>
</>
    )

    
     


    
  )
}

export default Secondarycontainer
