// import React from 'react'
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { useContext } from "react";
import MedicineContext from "../context-api/MedicineContext";

const Modal = ({onSetTrue}) => {
  

const ctx=useContext(MedicineContext);
console.log(ctx.AllTotal)

  return ReactDOM.createPortal(
    <div className={styles.box}>
      <h1>modal</h1>

      <div onClick={()=>onSetTrue(false)} className={styles.outer}></div>

      <div className={styles.inner}>
        <h2>Cart Product</h2>
          <ul>
            {
              ctx.data.map((ele)=>{
                return <li key={ele._id}>{`${ele.name}-${ele.desc}-${ele.price}-qty${ele.qty}-Total:${ele.price*ele.qty}`}<button>-</button><button>+</button></li>
              })
            }
          </ul>
          {/* <h3>{`All Total Price:${ctx.AllTotal}`}</h3> */}
        <button onClick={()=>onSetTrue(false)}>cancel</button>
        <button onClick={()=>alert("order placed successfully!")}>Place order</button>
      </div>
    </div>,
    document.querySelector(".modalLocation")
  )
}

export default Modal
