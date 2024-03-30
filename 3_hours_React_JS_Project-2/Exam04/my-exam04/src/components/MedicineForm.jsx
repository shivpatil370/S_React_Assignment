// import React from 'react'
import { useContext, useRef } from "react";
import axios from "axios"
import styles from "./MedicineForm.module.css";
import MedicineContext from "../context-api/MedicineContext";

const MedicineForm = ({onSetTrue}) => {
  const nameRef=useRef();
  const descRef=useRef();
  const priceRef=useRef();
  const qtyRef=useRef();

  const ctx=useContext(MedicineContext);
  // console.log(ctx)


   const handleSubmit=(e)=>{
      e.preventDefault();

      let obj={
        name:nameRef.current.value,
        desc:descRef.current.value,
        price:priceRef.current.value,
        qty:qtyRef.current.value
      };

      // console.log(obj);
      PostData(obj)

   };

   const PostData=async (obj)=>{
      try {
          await axios.post("http://localhost:3000/data",obj)
          .then((res)=>{
            //  console.log(res.data)
            ctx.Addrender(res.data);

    nameRef.current.value= "";
    descRef.current.value="";
    priceRef.current.value="";
    qtyRef.current.value="";
          })
      } catch (error) {
        console.log(error)
      }
   };

 

  return (
    <div className={styles.box}>
      {/* <h1>Medicine form</h1> */}
      <div className={styles.form}>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Medicine Name:</label>
            <input id="name" type="text" ref={nameRef} required/>

            <label htmlFor="desc">description:</label>
            <input id="desc" type="text" ref={descRef} required/>

            <label htmlFor="price">price:</label>
            <input id="price" type="number" ref={priceRef} required/>

            <label htmlFor="qty">Quantity Available:</label>
            <input id="qty" type="number" ref={qtyRef} required/>

            <button type="submit">Add Product</button>
         </form>
      </div>
      <div onClick={()=>onSetTrue(true)} className={styles.btn}>&#128722;{ctx.Total}</div>
    </div>
  )
}

export default MedicineForm
