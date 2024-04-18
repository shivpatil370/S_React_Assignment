// import { Button } from 'bootstrap'
// import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context'
import { useContext } from 'react';

const Navbar = () => {
  const ctx=useContext(AuthContext);


  return (
    <div style={{backgroundColor:"black",color:"white"}}>
      <ul style={{display:"flex",justifyContent:"space-between",margin:"0 2rem 0 2rem",padding:"2rem",textDecoration:"none"}}>
        <li><Link to="/">home</Link></li>
        {
            ctx.isLoggedIn && <Link to="/profile"><li>profile</li></Link>
        }
        <li><button>{ctx.isLoggedIn?"Logout":"Login"}</button></li>
      </ul>
    </div>
  )
}

export default Navbar
