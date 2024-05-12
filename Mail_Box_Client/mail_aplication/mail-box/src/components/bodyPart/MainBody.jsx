import React from 'react'
// import ComposeMail from "../sidebar/ComposeMail";
import { Outlet } from 'react-router-dom';
import "../sidebar/SidebarMenu.css"

const MainBody = () => {
  return (
    <div className='border w-100' style={{width:"80%",height:"89vh"}}>
        <Outlet/>
    </div>
  )
}

export default MainBody