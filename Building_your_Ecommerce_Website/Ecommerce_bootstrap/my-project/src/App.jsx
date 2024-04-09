import { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './context-api/CartContextProvider';
import Body from './components/Body';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  // const [isTrue, setIsTrue] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <CartContextProvider>
   <NavBar show={show} setShow={setShow}/>
   <Body setShow={setShow}/>
   <Footer/>
    </CartContextProvider>
  )
}

export default App
