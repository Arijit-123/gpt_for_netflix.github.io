import React, { useEffect, useState } from 'react'
import { API_OPTIONS, OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import useMovievideos from '../Customhooks/useMovievideos';

function Videobackground({movieid}) {
  useMovievideos(movieid);
  const trailervideo=useSelector(store=>store?.movies?.newtrailervideo);


  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + trailervideo?.key } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default Videobackground
