// import React from 'react'
import { useContext } from 'react';
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
                        // console.log(data);
                        ctx.Login(data.idToken)
                        navigate("/store");
                        emailRef.current.value="";
                        passwordRef.current.value="";
                    })
                  }
                  else{
                     return res.json((err)=>{
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


  return (
    
    <div className='w-25 p-4 m-auto bg-light position-fixed top-50 start-50 translate-middle'>
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
      <p style={isLogin?{color:"red"}:{color:"blue"}} className=' text-center mt-4' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"Dont have account?SignUp now!":"already have account? Login now!"}</p>
    </div>
    
  )
}

export default LoginPage
