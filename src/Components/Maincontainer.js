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
    <div>
      this is maincontainer
      <Videobackground  movieid={id}/>
      <Videotitle  title={original_title} overview={overview} id={id}/>
    </div>
  )
}

export default Maincontainer
