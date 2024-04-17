// import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

const LoginPage = () => {
    const [isLogin,setIsLogin]=useState(false);
    const [err,setErr]=useState("");
  const emailRef=useRef();
  const passwordRef=useRef();

const handleSubmit=(e)=>{
    e.preventDefault();

    if(isLogin){
        //
    }
    else{
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
                    alert("Login with existing account")
                })
              }
              else{
                return res.json().then((data)=>{
                    console.log(data)
                    setIsLogin(true);
                })
              }
        })
    }


}
    

  return (
    <div className='w-25 p-3 bg-light m-auto mt-5'>
       {isLogin?<h1>Log In</h1>:<h1>Sign Up</h1>}
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
      
      <Button variant="primary" type="submit">
        {isLogin?"Login":"Create Account"}
      </Button>

      
    </Form>
    {<p onClick={()=>setIsLogin(!isLogin)} style={isLogin?{color:"red"}:{color:"blue"}}>{isLogin?"Create New Account":"Login with existing account"}</p>}
    </div>
  )
}

export default LoginPage
