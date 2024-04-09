import { useState } from 'react'
// import { Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/Body';
import NavBar from './components/NavBar';

function App() {
  // const [isTrue, setIsTrue] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
   <NavBar show={show} setShow={setShow}/>
   <Body setShow={setShow}/>
    </>
  )
}

export default App
