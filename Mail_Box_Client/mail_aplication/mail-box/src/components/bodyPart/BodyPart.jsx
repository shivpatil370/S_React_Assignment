import React from 'react'
import SideBar from './SideBar'
import MainBody from './MainBody'

const BodyPart = () => {
  return (
    <div className='d-flex'>
        <SideBar/>
        <MainBody/>
    </div>
  )
}

export default BodyPart