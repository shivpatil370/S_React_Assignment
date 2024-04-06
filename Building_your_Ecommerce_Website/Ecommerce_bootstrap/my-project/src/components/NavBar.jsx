
// import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className='navbar'>
            <Container>
                <Nav className="m-auto gap-5">
                  <Nav.Link href="#home" className='text-white font-monospace'>HOME</Nav.Link>
                  <Nav.Link href="#store" className='text-white font-monospace'>STORE</Nav.Link>
                  <Nav.Link href="#about" className='text-white font-monospace'>ABOUT</Nav.Link>
                </Nav>
                <button className='btn btn-dark border'>cart</button> <span style={{color:"blue",marginBottom:"3rem"}}>0</span>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavBar
