// import { Button } from 'bootstrap'
// import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../store/auth-context'
import {  useContext } from 'react';
import {useNavigate} from "react-router-dom";

const Navbar = () => {
  const ctx=useContext(AuthContext);
  const navigate=useNavigate()

  const handlelogout=()=>{
      ctx.LogOut()
    navigate("/")
  }

  return (
    <div style={{backgroundColor:"black",color:"white"}}>
      <ul style={{display:"flex",justifyContent:"space-between",margin:"0 2rem 0 2rem",padding:"2rem",textDecoration:"none"}}>
        <li><Link to="/login">home</Link></li>
        {/* <li><Link to="/welcome">home</Link></li> */}
        {
            ctx.isLoggedIn && <Link to="/profile"><li>profile</li></Link>
            
        }
        {
            !ctx.isLoggedIn&&<li><button onClick={()=>navigate("/")}>Login</button></li>
        }
        {
            ctx.isLoggedIn&&<li><button onClick={handlelogout}>Logout</button></li>
        }
        {/* <li><button>{ctx.isLoggedIn?"Logout":"Login"}</button></li> */}
      </ul>
    </div>
  )
}

export default Navbar
