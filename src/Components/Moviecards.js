import React from 'react'
import { IMG_CDN } from '../utils/constants'

function Moviecards({key, posterpath}) {
  return (
    <div className='w-48 mt-4 pr-4'>
      <img src={IMG_CDN+posterpath} alt='Movie card'></img>
    </div>
  )
}

export default Moviecards
