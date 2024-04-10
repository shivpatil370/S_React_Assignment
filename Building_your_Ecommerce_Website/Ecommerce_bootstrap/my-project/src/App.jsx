import { useState } from 'react'
import CartContextProvider from './context-api/CartContextProvider';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Outlet} from "react-router-dom";
// import AppContext from './context-api/CartContext';


function App() {
  // const [isTrue, setIsTrue] = useState(false);
  // const ctx=useContext(AppContext);
  const [show, setShow] = useState(false);

  
  return (
    
    <CartContextProvider>
   <NavBar show={show} setShow={setShow}/>
      {/* <Body setShow={setShow}/> */}
      <Outlet/>
   <Footer/>
    </CartContextProvider>
   
  )
}

export default App
