import React, { useEffect } from 'react'
import useNowplayingMovies from '../Customhooks/useNowplayingmovies'
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import Gptsearch from './Gptsearch';
import { useSelector } from 'react-redux';




function Browse() {

  const showgpt=useSelector(store=>store.gpt.showgptsearch);
useNowplayingMovies();
  return (
    <div className=' flex flex-col'>


    <Header/>
    { showgpt?(
    <Gptsearch/>):<>
    <Maincontainer/>
    <Secondarycontainer/>
    </>
    }
    
{/* mincontainer
    Videobackground
    videotitle
    seconddary title
    playlist
    cards
 */}
    <div>

    </div>
          </div>
  )
}

export default Browse
