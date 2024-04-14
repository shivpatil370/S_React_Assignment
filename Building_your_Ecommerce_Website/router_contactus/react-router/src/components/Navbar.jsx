import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className='d-flex bg-dark'>
        <ul>
            <li><Link to="/welcome">welcome</Link></li>
        </ul>
        <ul>
            <li><Link to="/about">about</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
