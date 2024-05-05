// import React from 'react'
import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from "./LoginPage.module.css"

const LoginPage = () => {
    const emailRef=useRef();
    const passRef=useRef();
    const conformpassRef=useRef();

    useEffect(()=>{
        document.body.style.backgroundColor="whitesmoke";

        return ()=>{
            document.body.style.backgroundColor="";
        }
    });


    const handleSubmit=(e)=>{
        e.preventDefault();
        
        let obj={
            email:emailRef.current.value,
            password:passRef.current.value,
            conformpass:conformpassRef.current.value
        };

        console.log(obj);
        if(obj.password===obj.conformpass){
              fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7K1snfsZcqfce3uNQVIOrjQjmUM1zm8k",{
                method:"POST",
                body:JSON.stringify({
                    email:obj.email,
                    password:obj.password,
                    returnSecureToken:true,
                }),
                headers:{
                    "Content-Type":"application/json",
                }
              })
              .then((res)=>{
                   if(res.ok){
                      return res.json().then((data)=>{
                        console.log(data);
                        alert("SignUp successfully!");
                      })
                   }
                   else{
                    return res.json().then((err)=>{
                        console.log(err)
                      })
                   }
              })
        }
        else{
            //    console.log("password not match");
                        // setError("password not match");
                        alert("password and conform-password not match!")
        }

    }


  return (
    <>
    <div className='text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
        </div>
    <div className={styles.bgc} style={{width:"fit-content"}}>

        <h2 className='text-center fluid' style={{color:"darkgray"}}>SignUp</h2>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Conform Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={conformpassRef} required/>
      </Form.Group>
      
      <Button className='d-flex m-auto rounded-start-5 rounded-end-5 ps-5 pe-5' variant="primary" type="submit">
        Sign up
      </Button>
    </Form>
    </div>

      <p className='border p-2 pe-5 ps-5 m-auto mt-2 bg-light' style={{width:"fit-content"}}>have an account? Login!</p>
    </>
  )
}

export default LoginPage
