
// import React from 'react'
import { Container, Nav, Navbar, Button,Badge,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './canvas/Canvas';
import { useContext } from 'react';
import AppContext from '../context-api/CartContext';

// import { useState } from 'react';


const NavBar = ({show,setShow}) => {
  
   const ctx=useContext(AppContext);
    
  return (
    
    <div style={{position:"sticky",top:"0",zIndex:"1"}}>
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Nav className="m-auto gap-5">
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="/" className='text-white font-monospace'>HOME</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="store" className='text-white font-monospace'>STORE</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="about" className='text-white font-monospace'>ABOUT</Nav.Link>
                </Nav>
                <Button onClick={()=>setShow(true)} className='btn btn-dark border pt-0 pb-1'>cart</Button>
                <Badge bg="dark" text='info' style={{fontSize:"1rem",marginBottom:"1rem"}}>{ctx.Quantity}</Badge>
            </Container>
        </Navbar>

        <Canvas show={show} setShow={setShow}/>

        
    </div>
      
  )
}

export default NavBar
