// import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/Nav.css"

const Navbar = () => {
  return (
    <div className='bg-dark'>
        <ul className='d-flex p-3 gap-4 justify-content-center'>
            <li><NavLink style={{textDecoration:"none"}} to="/welcome">welcome</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to="/about">about</NavLink></li>
            <li><NavLink style={{textDecoration:"none"}} to="/product">product</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
