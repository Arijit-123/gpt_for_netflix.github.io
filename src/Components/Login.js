import React, { useState } from 'react'
import Header from './Header'
function Login() {

  const [isisignin, setIssignin]=useState(true);
const togglesigninForm=()=>{
setIssignin(!isisignin);
}

  return (
    <div>
    <Header/>
   <div className='absolute'>
    <img  src='https://www.pcworld.com/wp-content/uploads/2024/03/Netflix-Hintergrund.jpg?quality=50&strip=all' alt='logo'></img>
   </div>

   <form className='absolute w-3/12 p-12  bg-black mx-auto my-36 right-0 left-0 text text-white bg-opacity-80'>
   <h1>{isisignin?"Sign in":"Sign up"}</h1>
    <input className='p-4 my-4 w-full rounded-lg bg-gray-700' placeholder='email@gmail.com'></input>
    <input className='p-4 my-4 w-full rounded-lg bg-gray-700' placeholder='password'></input>
    <button className='text my-4 text-white bg-red-700 w-full p-2 rounded-lg'>Submit</button>

    <p className='text text-white' onClick={togglesigninForm}>{isisignin?"Already registered! sign in now":"New to Netflix sign up now"}</p>
   </form>
   
    </div>
  )
}

export default Login
