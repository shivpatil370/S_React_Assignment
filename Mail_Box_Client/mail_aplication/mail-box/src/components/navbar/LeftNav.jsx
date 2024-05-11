import React from 'react'
import imgs from "./images/Gmail_Logo_16px.png"

const LeftNav = () => {
  return (
    <div className='d-flex align-items-center'>
        
        <div className='pe-2'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        </div>



    <div className='d-flex align-items-center'>
    <img height={"22x"} width={"22px"} src={imgs} alt='img'/>
    <p className='m-auto'>Gmail</p>
    </div>
    </div>
  )
}

export default LeftNav