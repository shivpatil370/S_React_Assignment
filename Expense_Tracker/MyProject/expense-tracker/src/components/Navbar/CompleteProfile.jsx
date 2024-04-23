// import React from 'react'
import { Link } from "react-router-dom";

const CompleteProfile = () => {
  return (
    <div className="border d-grid align-items-center" style={{ height: '4rem' }}>
      <ul className="d-flex justify-content-between ms-4 me-4 list-unstyled">
        <li>Welcome to Expense Tracker!!!</li>
        <li>Your profile is Incomplete <Link to="/updateprofile">Complete now</Link></li>
      </ul>
    </div>
  )
}

export default CompleteProfile
