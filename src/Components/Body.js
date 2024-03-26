
import { createBrowserRouter } from 'react-router-dom';

import Login from './Login';

import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';

function Body() {

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
    <div className="text text-red-800 font-bold">
    <RouterProvider router={approuter}/>
    </div>
  );
}

export default Body;
