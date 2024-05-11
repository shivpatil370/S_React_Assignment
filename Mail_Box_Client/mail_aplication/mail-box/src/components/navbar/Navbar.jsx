// import React from 'react'

import LeftNav from "./LeftNav"
import MiddleNav from "./MiddleNav"
import RightNav from "./RightNav"

const Navbar = () => {
  return (
    // style={{position:"sticky",zIndex:1,top:0,overflow:"none"}}
    <div className="d-flex p-2 justify-content-between border align-items-center bg-light">
        <LeftNav/>
        <MiddleNav/>
        <RightNav/>
    </div>
  )
}

export default Navbar