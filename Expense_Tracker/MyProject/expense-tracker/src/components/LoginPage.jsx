// import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./LoginPage.module.css"
import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context-api/contextApi';

const LoginPage = () => {
   const [isLogged,setIsLogged]=useState(false);
   const [isForgot,setIsForgot]=useState(false);

   const emailRef=useRef();
   const passwordRef=useRef();
   const conformPasswordRef=useRef();

       const navigate=useNavigate();

       const ctx=useContext(AppContext);

   const handleSubmit=(e)=>{
     e.preventDefault();

       let obj;
     if(isLogged){
         obj={
            email:emailRef.current.value,
            password:passwordRef.current.value,
          };
      }
     else{

          obj={
           email:emailRef.current.value,
           password:passwordRef.current.value,
           conformPassword:conformPasswordRef.current.value
         };
     }
    //   console.log(obj)
    
    if(!isLogged){
        if(obj.password!=obj.conformPassword){
            alert("password and Conformed-Password doesn't match!")
            throw new Error("password and Conformed-Password doesn't match!")
        }
    }

        if(isLogged){
            //LOG IN
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
                method:"POST",
                body:JSON.stringify({
                    email:obj.email,
                    password:obj.password,
                    returnSecureToken:true
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>{
                    if(res.ok){
                        return res.json().then((data)=>{
                            // console.log(data.idToken);
                            ctx.AddLogin(data.idToken);
                            alert("Log-In successfully!");
                            navigate("/profile")
                        })
                        
                    }
                    else{
                        return res.json().then((err)=>{
                            // console.log(err.error.message)
                              if(err&&err.error&&err.error.message){
                                 alert(err.error.message)
                              }
                              else{

                                  alert("Authentication failed!")
                              }
                         })
                    }
            })
            
        }
        else{
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
                method:"POST",
                body:JSON.stringify({
                    email:obj.email,
                    password:obj.password,
                    returnSecureToken:true
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then((res)=>{
                // console.log(res)
                     if(res.ok){
                        return res.json().then((data)=>{
                            console.log(data);
                            alert("Sign-Up successfully!")
                            setIsLogged(true)
                        })
                     }
                     else{
                         return res.json().then((err)=>{
                            // console.log(err.error.message)
                              if(err&&err.error&&err.error.message){
                                 alert(err.error.message)
                              }
                              else{

                                  alert("Authentication failed!")
                              }
                         })
                     }
            })
        }

        //   emailRef.current.value="";
        //   passwordRef.current.value="";
        //   conformPasswordRef.current.value="";
   };


   const handleLog=()=>{
    setIsLogged(!isLogged);
    setIsForgot(false)
   }

  return (
    <div>
    <div className={styles.box}>
        {!isForgot&&<h1 className='text-center'>{isLogged?"LogIn":"SignUP"}</h1>}
        {isForgot&&<h1 className='text-center'>{"ForgotPassword"}</h1>}
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={isLogged?"password":"text"} placeholder="Password" ref={passwordRef} required/>
      </Form.Group>

      {!isLogged&&<Form.Group className="mb-3" controlId="formBasicConformPassword">
        <Form.Label>Conform Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={conformPasswordRef} required/>
      </Form.Group>}
      
      {!isForgot&&<Button className='d-flex m-auto' variant="primary" type="submit">
      {isLogged?"Log In":"Sign UP"}
      </Button>}
      {isForgot&&<Button className='d-flex m-auto' variant="primary" type="submit">
      {"Forgot Password"}
      </Button>}
    </Form>

     {!isForgot&&isLogged&&<p onClick={()=>setIsForgot(true)} className='text-center mt-2 text-decoration-underline text-primary'>Forgot Password</p>}
    </div>
      <p style={isLogged?{color:"red"}:{color:"orange"}} onClick={handleLog} className='w-25 m-auto text-center border mt-2 user-select-none bg-info-subtle'>{isLogged?"Don't have an account? Signup":"Have an account? Login"}</p>
    </div>
  )
}

export default LoginPage
