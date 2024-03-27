// import React from 'react'
import { useContext, useEffect, useState } from "react"
import styles from "./Modal.module.css"
import FormContext from "../store/form-context"
import ReactDom from "react-dom";

const Modal = ({onSetIsModal}) => {
  const [objid,setObjid]=useState([]);

const ctx=useContext(FormContext);
// console.log(ctx.data)


  return ReactDom.createPortal(
    <>
      <div onClick={()=>onSetIsModal(false)} className={styles.inner}></div>

       <div className={styles.outer}>
        <h1>cart Products</h1>
        <ul id="ul">
            {
             
          
              ctx.data.map((ele)=>{
                return <li key={ele.id}>{`${ele.name}-L:${ele.lar}-M:${ele.medium}-S:${ele.small}-Rs:${ele.price}-Qty:${ele.qty}-Total:-${ele.price*ele.qty}`}</li>
                
              })
            }
            <h2>{`Total All Price:${ctx.TotalPrice}`}</h2>
        </ul>

        <button onClick={()=>onSetIsModal(false)}>cancel</button>
        <button onClick={()=>{
          alert("order Placed!");
          onSetIsModal(false);
        }}>Place order</button>
      </div>

    </>,
    document.querySelector(".modalLocation")
  )
}

export default Modal
