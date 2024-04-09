
// import React from 'react'
import { Container, Nav, Navbar, Button,Badge,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { useState } from 'react';


const NavBar = ({show,setShow}) => {
  

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    
  return (
    <div>
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Nav className="m-auto gap-5">
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="#home" className='text-white font-monospace'>HOME</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="#store" className='text-white font-monospace'>STORE</Nav.Link>
                  <Nav.Link style={{fontFamily:"-moz-initial"}} href="#about" className='text-white font-monospace'>ABOUT</Nav.Link>
                </Nav>
                <Button onClick={()=>setShow(true)} className='btn btn-dark border pt-0 pb-1'>cart</Button>
                <Badge bg="dark" text='info' style={{fontSize:"1rem",marginBottom:"1rem"}}>{0}</Badge>
            </Container>
        </Navbar>

        <Offcanvas show={show} onHide={handleClose}  placement="end" className="mt-5" scroll>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='canva position-relative ms-auto' style={{color:"gray",fontFamily:"-moz-initial",fontWeight:"bolder"}}>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
             <Card style={{border:"none"}}>
              <div className="d-flex justify-content-between ps-3 pe-3">
                  <Card.Title style={{color:"gray",fontFamily:"-moz-initial",textDecoration:"underline"}}>ITEM</Card.Title>
                  <Card.Title style={{color:"gray",fontFamily:"-moz-initial",textDecoration:"underline"}}>PRICE</Card.Title>
                  <Card.Title style={{color:"gray",fontFamily:"-moz-initial",textDecoration:"underline"}}>QUANTITY</Card.Title>
              </div>
              <div className='d-flex justify-content-end me-3'>
                <Card.Title style={{color:"gray",fontFamily:"-moz-initial"}}>Total:</Card.Title> <Card.Title style={{color:"gray",fontFamily:"-moz-initial"}}>${0}</Card.Title>
              </div>
             </Card>
        <Button className='d-flex m-auto'>PURCHASE</Button>
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default NavBar
