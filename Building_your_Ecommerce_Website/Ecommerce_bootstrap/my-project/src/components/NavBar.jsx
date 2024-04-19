
// import React from 'react'
import { Container, Nav, Navbar, Button,Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './canvas/Canvas';
import { useContext } from 'react';
import AppContext from '../context-api/CartContext';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const NavBar = ({show,setShow}) => {
  const params=useParams();
  const id=params;
  // console.log(id.store)
  const navigate=useNavigate();
  
   const ctx=useContext(AppContext);
    
  return (
    
    <div>
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Nav className="m-auto gap-5">
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="/home" className='text-white font-monospace'>HOME</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="/store" className='text-white font-monospace'>STORE</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="/about" className='text-white font-monospace'>ABOUT</Nav.Link>
                </Nav>

                {id.store&&<div>
                <Button onClick={()=>setShow(true)} className='btn btn-dark border pt-0 pb-1'>cart</Button>
                <Badge bg="dark" text='info' style={{fontSize:"1rem",marginBottom:"1rem"}}>{ctx.Quantity}</Badge>
                </div>}
                {ctx.isLogin&&<button className='bg-danger ps-1 pe-1 text-white border' onClick={()=>ctx.LogOut()}>Logout</button>}
                {!ctx.isLogin&&<button className='bg-success ps-1 pe-1 text-white border' onClick={()=>navigate("/")}>LogIn</button>}
            </Container>
        </Navbar>
        
        <Canvas show={show} setShow={setShow}/>

        
    </div>
      
  )
}

export default NavBar
