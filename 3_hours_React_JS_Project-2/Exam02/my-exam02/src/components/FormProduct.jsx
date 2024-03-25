// import React from 'react'

import { useContext, useRef } from "react";
import axios from "axios";
import FormContext from "../store/form-context";

const FormProduct = () => {
  const nameRef=useRef();
  const descRef=useRef();
  const priceRef=useRef();
  const lRef=useRef();
  const mRef=useRef();
  const sRef=useRef();

  const ctx=useContext(FormContext);
  // console.log(ctx)

const handleSubmit=(e)=>{
  e.preventDefault();

  let obj={
    name:nameRef.current.value,
    desc:descRef.current.value,
    price:priceRef.current.value,
    lar:lRef.current.value,
    medium:mRef.current.value,
    small:sRef.current.value,
  };

  // console.log(obj);
  axios.post("http://localhost:3000/data",obj)
  .then((res)=>{
    // console.log(res.data);
    ctx.data=res.data;
  })


}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label id='tshirt'>TshirtName:</label>
        <input type='text' ref={nameRef}/>

        <label id='desc'>Description:</label>
        <input type='desc' ref={descRef}/>

        <label id='price'>price:</label>
        <input id='price' type='number' ref={priceRef}/>

        <span>Quantuty available:</span>
        <label id='low'>L:</label>
        <input style={{width:"2rem"}} id='low' type='number' ref={lRef}/>
        <label id='med'>M:</label>
        <input style={{width:"2rem"}} id='med' type='number' ref={mRef}/>
        <label id='sm'>S:</label>
        <input style={{width:"2rem"}} id='sm' type='number' ref={sRef}/>

        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default FormProduct
