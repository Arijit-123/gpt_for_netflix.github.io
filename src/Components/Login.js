import React, { useRef, useState } from 'react'
import Header from './Header'

import { validation } from '../utils/Validation';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
function Login() {

  const [isisignin, setIssignin]=useState(true);
const [errormessage,setErrormessage]=useState();


const togglesigninForm=()=>{
setIssignin(!isisignin);
}

const email=useRef(null);
const password=useRef(null);

function handleclickbutton(){
  
const message=validation(email.current.value,password.current.value);

  console.log("message",message);
  setErrormessage(message);

  if(message) return;

  if(!isisignin){
// sign up logic

createUserWithEmailAndPassword(auth, email, password)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage);
    // ..
  });
  }
  else{
// sign in logic

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage);
  });

  }
}



console.log("useref",email);


  return (
    <div>
    <Header/>
   <div className='absolute w-full h-full'>
    <img  src='https://www.pcworld.com/wp-content/uploads/2024/03/Netflix-Hintergrund.jpg?quality=50&strip=all' alt='logo'></img>
   </div>

   <form onSubmit={(e)=>e.preventDefault()} className='absolute w-4/12 p-12  bg-black mx-auto my-36 right-0 left-0 text text-white bg-opacity-80'>
   <h1 className='text text-xl font font-bold'>{isisignin?"Sign In":"Sign Up"}</h1>
   {!isisignin? <input className='p-4 my-4 w-full rounded-lg bg-gray-700' placeholder='Full Name'></input>:""}
  
  
    <input className='p-4 my-4 w-full rounded-lg bg-gray-700'  ref={email} placeholder='email@gmail.com'></input>
    <input className='p-4 my-4 w-full rounded-lg bg-gray-700' ref={password} placeholder='password'></input>
    <p className='text-red-500 text-lg py-2'>{errormessage}</p>
    <button className='text my-4 text-white bg-red-700 w-full p-2 rounded-lg' onClick={handleclickbutton}>{isisignin?"Sign in": "Sign up"}</button>

    <p className='text text-white' onClick={togglesigninForm}>{isisignin?"New to Netflix sign up now":"Already registered! sign in now"}</p>
   </form>
   
    </div>
  )
}

export default Login
