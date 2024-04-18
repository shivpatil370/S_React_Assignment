// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useRef, useState } from 'react';
import AuthContext from '../store/auth-context';
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [isLogin,setIsLogin]=useState(false);
    const [err,setErr]=useState("");
    const [loading,setLoading]=useState(false);
  const emailRef=useRef();
  const passwordRef=useRef();

  const ctx=useContext(AuthContext);
  // console.log("user logged:-",ctx.isLoggedIn)
  const navigate =useNavigate()

const handleSubmit=(e)=>{
    e.preventDefault();

    if(isLogin){
      setLoading(true);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
            method:"POST",
            body:JSON.stringify({
                email:emailRef.current.value,
                password:passwordRef.current.value,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
              if(!res.ok){
                //
                return res.json().then((err)=>{
                    // console.log("Error is:-",err.error.message)
                      // if(err&&err.error&&err.error.message){

                      //     setErr(err.error.message)
                      // }
                      // else{
                      //    setErr("Authentication failed!")
                      // }
                      // setErr(false)
                    throw new Error("Authentication failed!")
                })
              }
              else{
                return res.json().then((data)=>{
                    // console.log(data.idToken)
                    // setIsLogin(true);
                    ctx.Login(data.idToken);
                    navigate("/login");
                    setLoading(false);
                    emailRef.current.value="";
                    passwordRef.current.value="";
                    setErr("");
                })
              }
        })
       
        .catch((err)=>{
          setErr(false)
          setLoading(false)
          alert(err.message)
        })
    }
    else{
      setLoading(true);
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
            method:"POST",
            body:JSON.stringify({
                email:emailRef.current.value,
                password:passwordRef.current.value,
                returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>{
              if(!res.ok){
                //
                return res.json().then((err)=>{
                    // console.log("Error is:-",err.error.message)
                      if(err&&err.error&&err.error.message){

                          setErr(err.error.message)
                      }
                      else{
                         setErr("Authentication failed!")
                      }
                      setLoading(false);
                    alert("Login with existing account")
                })
              }
              else{
                return res.json().then((data)=>{
                    console.log(data)
                    setIsLogin(true);
                    setLoading(false);
                    emailRef.current.value="";
                    passwordRef.current.value="";
                    setErr("");
                })
              }
        })
    }


}
    

  return (
    <div className='w-25 p-3 bg-light m-auto mt-5'>
       {isLogin?<h1 style={{textAlign:"center"}}>Log In</h1>:<h1 style={{textAlign:"center"}}>Sign Up</h1>}
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>

      {err&&<h6 style={{color:"red"}}>{err}</h6>}
      
      {loading?<p style={{textAlign:"center",color:"orange"}}>Sending Request...</p>:<Button style={{display:"flex",margin:"auto",marginBottom:"1rem"}} variant="primary" type="submit">
        {isLogin?"Login":"Create Account"}
      </Button>}

      
    </Form>
    {<p onClick={()=>setIsLogin(!isLogin)} style={isLogin?{color:"red",textAlign:"center"}:{color:"blue",textAlign:"center"}}>{isLogin?"Create New Account":"Login with existing account"}</p>}
    </div>
  )
}

export default LoginPage
