// import React from 'react'
import { useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AuthContext from '../store/auth-context';

const Profile = () => {
    const passRef=useRef();

    const ctx=useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredPass=passRef.current.value;

        //validation

        //send data to API

          fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCzVFWq-_u_t4fNs0LS1Gu3BBUImY0bV98",{
            method:"POST",
            body:JSON.stringify({
                idToken:ctx.token,
                password:enteredPass,
                returnSecureToken:false
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res)=>{
             if(!res.ok){
                //  console.log("error:")
                alert("try another pass!")
             }
             else{
                passRef.current.value="";
                alert("done!")
             }
        })
    }

  return (
    <div className='w-25 p-3 bg-light m-auto mt-5'>
       <Form onSubmit={submitHandler} className='text-center'>

        <h1 className='text-center'>User Profile</h1>

       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" minLength="4" ref={passRef} required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

       </Form>
    </div>
  )
}

export default Profile
