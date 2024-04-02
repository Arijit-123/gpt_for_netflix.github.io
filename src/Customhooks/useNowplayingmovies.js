import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'
import { addNowplayingmovies } from '../utils/movieSlice';
const useNowplayingMovies=()=>{
    const dispatch=useDispatch();

    async function Nowplayingmovies(){
     const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS);
     const json=await data.json();
   
     console.log("new json",json);
     dispatch(addNowplayingmovies(json.results));
    }
   
    useEffect(() => {
    Nowplayingmovies();
    }, [])
}
export default useNowplayingMovies;