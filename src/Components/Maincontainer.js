import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import Videotitle from './Videotitle'
function Maincontainer() {

    const movies=useSelector((store)=>store?.movies?.nowplayingmovies)


    console.log("movues from videobackground", movies)
    if(movies==null){
        return;
    }

    const mainmovie=movies[0];
    const {original_title, overview,id}=mainmovie;
  return (
    <div className='bg-gradient-to-r from-black'>
  
      <Videotitle  title={original_title} overview={overview} id={id}/>
      <Videobackground  movieid={id}/>
     
    </div>
  )
}

export default Maincontainer
