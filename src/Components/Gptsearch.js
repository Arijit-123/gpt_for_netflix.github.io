import React from 'react'

function Gptsearch() {
  return (
    <div className='pt-[20%] flex'>
     {/* Gpt search bar 
     Gpt movie suggestions */}
     <form className=' bg-black grid grid-cols-12 w-1/2 '>
      <input type='text' className='p-4 m-4 col-span-9' placeholder='What would you like to see?'/> 
      <button className='py-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>Search</button>
     </form>
    </div>
  )
}

export default Gptsearch
