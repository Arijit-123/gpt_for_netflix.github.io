import React,{useEffect} from 'react'
import { addUsers } from '../utils/userslice';
import { auth } from '../utils/firebase'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { removeuser } from '../utils/userslice';
import { LOGO, USER } from '../utils/constants';

function Header() {
const dispatch=useDispatch();
  const navigate=useNavigate();
const user=useSelector((store)=>store.user);

console.log("users from header", user);
  function handlesignout(){

    
    signOut(auth).then(() => {
      // Sign-out successful.

      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
    
  }


  useEffect(() => {
 const unsubscribe=   onAuthStateChanged(auth,(user)=>{
      console.log("show user", user);
      if(user){
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUsers({uid:uid,email:email,displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
      }
      else{
  dispatch(removeuser());
  navigate("/");
      }
    })

    return()=>unsubscribe();
    }, [])

  return (
    <div className='absolute w-screen bg-gradient-to-b from-black  z-30 flex justify-between'>
      <img className='w-44' src={LOGO}></img>


      {user?
<div className='flex'>
      <img className='w-12 mt-4  h-12' src={USER}></img>
      <button className='ml-4 mr-2 font font-bold'  onClick={handlesignout}>Sign out</button>
      </div>:""
      }
    </div>
  )
}

export default Header
