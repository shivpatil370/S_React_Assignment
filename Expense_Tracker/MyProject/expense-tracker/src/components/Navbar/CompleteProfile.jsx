// import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppContext from "../../context-api/contextApi";

const CompleteProfile = () => {
  const verifiedm=localStorage.getItem("mailverify");
  const [verifyMail,setVerifyMail]=useState(verifiedm);
  const [ismail,setIsmail]=useState(false);
const ctx=useContext(AppContext);
const navigate=useNavigate()

  const handleverify=()=>{
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
        method:"POST",
        body:JSON.stringify({
          requestType:"VERIFY_EMAIL",
          idToken:ctx.token
        })
      })
      .then((res)=>{
          if(res.ok){
            return res.json().then((data)=>{
              // console.log(data);
              setVerifyMail(data.email);
              localStorage.setItem("mailverify",JSON.stringify(data.email));
              setIsmail(false);
            })
          }
          else{
            return res.json().then((err)=>{
              console.log(err.error.message);
            })
          }
      })
  };


  const handleLogOut=()=>{
    ctx.AddLogout();
    navigate("/")
  }

  // console.log(ctx.userProfile);

  return (
    <div className="border p-2" style={{ height: 'fit-content' }}>
      <ul className="d-flex justify-content-between ms-4 me-4 list-unstyled">
        <li>Welcome to Expense Tracker!!!</li>
        {ctx.userProfile.displayName&&<img style={{margin:"0 0 0 auto",borderRadius:"50%"}} width="5%" src={ctx.userProfile.photoUrl} alt="img"/>}
        <div className="d-flex gap-3 align-items-center">
        {ctx.userProfile.displayName?<p className="ms-1">{ctx.userProfile.displayName.split(" ")[0]}</p>:<li className="d-flex gap-2">Your profile is Incomplete <Link to="/updateprofile">Complete now</Link></li>}
        <div className="">
           {verifyMail?<p className="text-success">{"mail verified"}</p>:<button onClick={()=>setIsmail(true)} className="border bg-danger text-white">verify-email</button>}
      </div>
<div>
       <Button onClick={handleLogOut} className="" variant="primary">
        {ctx.token?"Logout":"login"}
      </Button>
</div>
        </div>
      </ul>
      
         {ismail&&<div className="w-25 p-4 bg-light m-auto mt-5">
         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Button onClick={handleverify} variant="primary" type="submit">
        verify email
      </Button>
         </div>}


    </div>
  )
}

export default CompleteProfile
