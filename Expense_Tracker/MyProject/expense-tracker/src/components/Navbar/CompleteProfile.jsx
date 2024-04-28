// import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import AppContext from "../../context-api/contextApi";
import { useDispatch, useSelector } from "react-redux";
// import { useDispatch, useSelector } from "react-redux";
// import { expensesActions } from "../../redux-store/ExpensesReducers";
import { themeActions } from "../../redux-store/ThemeReducer";

const CompleteProfile = () => {
  const verifiedm=JSON.parse(localStorage.getItem("mailverify"));
  const [verifyMail,setVerifyMail]=useState(verifiedm);
  const [premium,setPremium]=useState(false);
  // const [ismail,setIsmail]=useState(false);
const ctx=useContext(AppContext);
const navigate=useNavigate()

const totalexpenses=useSelector(store=>store.expenses.totalExpense);
const dispatch=useDispatch()
const isthems=useSelector(store=>store.theme.isDark);
// console.log(isthems)

   if(isthems){
     document.body.style.backgroundColor="black";
     document.body.style.color="white";
   }
   else{
    document.body.style.backgroundColor="rgb(90,90,90,0.1)";
     document.body.style.color="";
   }


  const handleLogOut=()=>{
    ctx.AddLogout();
    navigate("/login")
  };


  useEffect(()=>{
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
       method:"POST",
       body:JSON.stringify({idToken:ctx.token}),
       headers: {
           'Content-Type': 'application/json'
       }
    })
    .then((res)=>{
         if(res.ok){
           return res.json().then((data)=>{
               // console.log(data.users[0].displayName);
               ctx.AdduserProfile(data.users[0]);
           })
         }
         else{
           return res.json().then((err)=>{
               console.log(err.error.message)
           })
         }
    })

    setVerifyMail(verifiedm)
   },[]);


   const handlePremium=()=>{
     dispatch(themeActions.AddTheme())
    setPremium(true);
   }
  

  // console.log(ctx.userProfile);

  return (
    <div className="border p-2" style={{ height: 'fit-content' }}>
      <ul className="d-flex justify-content-between ms-4 me-4 list-unstyled">
        <li>Welcome to Expense Tracker!!!</li>
        {ctx.userProfile.displayName&&<img style={{margin:"auto 0 0 auto",borderRadius:"50%"}} width="5%" height="5%" src={ctx.userProfile.photoUrl} alt="img"/>}
        <div className="d-flex gap-3 align-items-center">
        {ctx.userProfile.displayName?<p className="ms-1 m-auto">{ctx.userProfile.displayName.split(" ")[0]}</p>:<li className="d-flex gap-2">Your profile is Incomplete <Link to="/updateprofile">Complete now</Link></li>}
        <div className="">
           {verifyMail?<p className="text-success m-auto">{"mail verified"}</p>:<button onClick={()=>navigate("/verifymail")} className="border bg-danger text-white">verify-email</button>}
      </div>

      {totalexpenses>=10000&&<div>
        <Button size="sm" disabled={isthems==true} style={premium?{backgroundColor:"lightgreen",color:"green",border:"none"}:{backgroundColor:"red",color:"white",border:"none"}} onClick={handlePremium}>{premium?"Premium-Activated":"active Premium"}</Button>
      </div>}

      {totalexpenses>=10000&&<div>
        <Button onClick={handlePremium} size="sm" className="bg-success rounded">{isthems?"light":"dark"}</Button>
      </div>}

<div>
       <Button onClick={handleLogOut} size="sm" className="" variant="primary">
        {ctx.token?"Logout":"login"}
      </Button>
</div>
        </div>
      </ul>
      

    </div>
  )
}

export default CompleteProfile
