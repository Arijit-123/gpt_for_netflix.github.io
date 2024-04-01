import logo from './logo.svg';
import { createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Body from './Components/Body';
import { RouterProvider } from 'react-router-dom';
import Header from './Components/Header';
import {Provider} from 'react-redux'
import appstore from './utils/Appstore';
function App() {

  
  return (
   
    <Provider store={appstore}>
   <Body/>
   </Provider>
    
  );
}

export default App;
