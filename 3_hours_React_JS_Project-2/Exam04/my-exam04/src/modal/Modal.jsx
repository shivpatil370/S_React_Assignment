// import React from 'react'
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useContext, useEffect, useState } from "react";
import MedicineContext from "../context-api/MedicineContext";

const Modal = ({onSetTrue}) => {
  const [modalData,setModalData]=useState([]);
  const [check,setCheck]=useState([]);
  const [total,setTotal]=useState(0);

const ctx=useContext(MedicineContext);
// console.log(ctx.AllTotal)



  const handleIncrement=(ele,id)=>{
     ctx.IncrementBtn(ele,id);
     setCheck(ele)
  }


   const handleDecrement=(ele,id)=>{
       ctx.DecrementBtn(ele,id)
       setCheck(ele)
   };


   useEffect(() => {
     setModalData(ctx.data)
   }, [ctx.data, check,ctx.render])

    useEffect(() => {
      setTotal(ctx.AllTotal)
    }, [ctx.AllTotal,ctx.render])

  return ReactDOM.createPortal(
    <div className={styles.box}>
      <h1>modal</h1>

      <div onClick={()=>onSetTrue(false)} className={styles.outer}></div>

      <div className={styles.inner}>
        <h2>{ctx.data.length==0?"cart Empty!":"Cart Product"}</h2>
          <ul>
            {
                modalData.map((ele)=>{
                return <li key={ele.id}>{`${ele.name}-${ele.desc}-${ele.price}-qty:${ele.qty}-Total:${ele.price*ele.qty}`}<button onClick={()=>{
                  return handleDecrement(ele,ele.id)
                }}>-</button><button onClick={()=>{
                  return handleIncrement(ele,ele.id)
                }}>+</button></li>
              })
            }
          </ul>
          <h3>{`All Total Price:${total}`}</h3>
        <button onClick={()=>onSetTrue(false)}>cancel</button>
        <button className={styles.btn} onClick={()=>{
          return alert("order placed successfully!"), onSetTrue(false)
        }}>Place order</button>
      </div>
    </div>,
    document.querySelector(".modalLocation")
  )
}

export default Modal
