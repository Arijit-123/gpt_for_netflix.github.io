
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useState,useEffect } from "react";
const useMovievideos= (movieid) =>{
    const dispatch=useDispatch();
    
      const [data,setData]=useState();
    const [trailernew,setTrailernew]=useState();
       
    async function fetchfunction(){
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",API_OPTIONS);
    const json=await data.json();
    setData(json);
    
    const filterdata=json.results.filter(video => video.type=="Trailer");
    const trailer=filterdata.length? filterdata[0]: json.results[0];
    console.log("trailer", trailer);
    // setTrailernew(trailer);
    dispatch(addTrailerVideo(trailer));
    }
    
    useEffect(()=>{
    
      fetchfunction();
    },[]);
    
}
export default useMovievideos;