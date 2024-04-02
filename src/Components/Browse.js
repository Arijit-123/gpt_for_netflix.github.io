import React, { useEffect } from 'react'
import useNowplayingMovies from '../Customhooks/useNowplayingmovies'
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';




function Browse() {
useNowplayingMovies();
  return (
    <div className=' flex'>


    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
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
