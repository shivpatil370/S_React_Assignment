import React from 'react'
// import ComposeMail from "../sidebar/ComposeMail";
import { Outlet } from 'react-router-dom';

const MainBody = () => {
  return (
    <div className='border' style={{width:"80%",height:"89vh"}}>
        <Outlet/>
    </div>
  )
}

export default MainBody