// import React from 'react'
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import AppContext from '../context-api/CartContext';


const LoginPage = () => {
    const [isLogin,setIsLogin]=useState(false);
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate();

    const ctx=useContext(AppContext);

     
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

          if(isLogin){
            // LOG IN
             fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password,
                    returnSecureToken:true
                }),
                headers:{
                    "Content-Type":"application/json"
                }
             })
             .then((res)=>{
                  if(res.ok){
                    // 
                    return res.json().then((data)=>{
                        // console.log(data.email);
                        ctx.Login(data.idToken,data.email)
                        navigate("/store");
                        emailRef.current.value="";
                        passwordRef.current.value="";
                    })
                  }
                  else{
                     return res.json((err)=>{
                      console.log(err)
                        throw new Error("Authentication failed!")
                     })
                  }
             })
             .catch((err)=>{
                alert(err.message);
             })
             
          }
          else{
            // SIGN UP 
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
            method:"POST",
            body:JSON.stringify({
            email:email,
            password:password,
            returnSecureToken:true
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then((res)=>{
              if(res.ok){
                return res.json().then((data)=>{
                    console.log(data)
                    setIsLogin(true);
                    emailRef.current.value="";
                    passwordRef.current.value="";
                })}
                else{
                    return res.json().then((err)=>{
                        // console.log(err)
                        if(err&&err.message){
                            alert(err.message)
                        }
                   throw new Error("Authentication failed!")
                    })
                }
              }
        )
        .catch((err)=>{
            console.log(err.message)
            alert(err.message)
        })
            
          }

    }

    useEffect(()=>{
      document.body.style.backgroundColor="lightgray"

      return ()=>{
        document.body.style.backgroundColor=""
      }
    },[])


  return (
    
    <div style={{margin:"5rem auto 5rem auto",backgroundColor:" #300C94"}} className='w-25 p-4 text-white'>
        <h1 className="text-center text-info">{isLogin?"Login Page":"Sign Up"}</h1>
        
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
      </Form.Group>
      
      <Button className='d-flex m-auto' variant="primary" type="submit">
        {isLogin?"LogIn":"SugnUp"}
      </Button>
    </Form>
      <p style={isLogin?{color:"red"}:{color:"orange"}} className=' text-center mt-4' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Dont have account?SignUp now!":"already have account? Login now!"}</p>
    </div>
    
  )
}

export default LoginPage
