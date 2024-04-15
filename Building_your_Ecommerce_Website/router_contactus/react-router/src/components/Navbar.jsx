// import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <div className='bg-dark'>
        <ul className='d-flex p-3 gap-4 justify-content-center'>
            <li><Link to="/welcome">welcome</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/product">product</Link></li>
        </ul>
    </div>
  )
}

export default Navbar
