// import React from 'react'
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Products = () => {
  const nameRef=useRef();
  const emailRef=useRef();
  const phoneRef=useRef();

  const addUser=async (newUser)=>{
      // console.log(newUser)
        const res=await fetch("https://userdata-499d4-default-rtdb.firebaseio.com/user.json",{
          method:"POST",
          body:JSON.stringify(newUser),
          headers:{
            "Content-Type":"application/json"
          }
        })

            if(!res.ok){
              alert("something went wrong! in user post request!");
              throw new Error("something went wrong!");
            }
        const data=await res.json();
              console.log(data);

              nameRef.current.value="",
              emailRef.current.value="",
              phoneRef.current.value=""
  }

   const handleSubmit=(e)=>{
      e.preventDefault();
      const name=nameRef.current.value;
      const email=emailRef.current.value;
      const phone=phoneRef.current.value;

      const newUser={name,email,phone}
      // console.log(newUser);

      addUser(newUser)
      
   }
   

  return (
    <div className='w-25 border p-3 m-auto mt-4 bg-light'>
         <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" ref={nameRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email id</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone" ref={phoneRef} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Products
