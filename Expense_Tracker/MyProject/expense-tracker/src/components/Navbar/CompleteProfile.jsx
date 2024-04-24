// import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import AppContext from "../../context-api/contextApi";

const CompleteProfile = () => {
  const verifiedm=localStorage.getItem("mailverify");
  const [verifyMail,setVerifyMail]=useState(verifiedm);
  // const [ismail,setIsmail]=useState(false);
const ctx=useContext(AppContext);
const navigate=useNavigate()

  


  const handleLogOut=()=>{
    ctx.AddLogout();
    navigate("/")
  }

  // console.log(ctx.userProfile);

  return (
    <div className="border p-2" style={{ height: 'fit-content' }}>
      <ul className="d-flex justify-content-between ms-4 me-4 list-unstyled">
        <li>Welcome to Expense Tracker!!!</li>
        {ctx.userProfile.displayName&&<img style={{margin:"0 0 0 auto",borderRadius:"50%"}} width="5%" height="5%" src={ctx.userProfile.photoUrl} alt="img"/>}
        <div className="d-flex gap-3 align-items-center">
        {ctx.userProfile.displayName?<p className="ms-1">{ctx.userProfile.displayName.split(" ")[0]}</p>:<li className="d-flex gap-2">Your profile is Incomplete <Link to="/updateprofile">Complete now</Link></li>}
        <div className="">
           {verifyMail?<p className="text-success">{"mail verified"}</p>:<button onClick={()=>navigate("/verifymail")} className="border bg-danger text-white">verify-email</button>}
      </div>
<div>
       <Button onClick={handleLogOut} className="" variant="primary">
        {ctx.token?"Logout":"login"}
      </Button>
</div>
        </div>
      </ul>
      

    </div>
  )
}

export default CompleteProfile
