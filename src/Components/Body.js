
import { createBrowserRouter } from 'react-router-dom';
import { addUsers } from '../utils/userslice';
import { removeuser } from '../utils/userslice';
import { useEffect } from 'react';
import Login from './Login';
import { auth } from '../utils/firebase';
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { onAuthStateChanged } from 'firebase/auth';
import {useDispatch} from 'react-redux'
function Body() {

const dispatch= useDispatch();



  const approuter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    }

  ]);

  return (
    <div className=" font-bold">
    <RouterProvider router={approuter}/>
    </div>
  );
}

export default Body;
