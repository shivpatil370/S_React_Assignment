import { useState } from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Outlet} from "react-router-dom";
import { useContext } from 'react';
import AppContext from './context-api/CartContext';


function App() {
  const [show, setShow] = useState(false);
const ctx=useContext(AppContext);

  
  
  
  return (
    
    <>
   <NavBar show={show} setShow={setShow}/>
      <Outlet/>
   {ctx.isLogin&&<Footer/>}
    </>
   
  )
}

export default App
