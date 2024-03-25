// import React from 'react'
import { useContext } from "react"
import styles from "./Modal.module.css"
import FormContext from "../store/form-context"

const Modal = ({onSetIsModal}) => {

const ctx=useContext(FormContext);
console.log(ctx.data)

  return (
    <>
      <div onClick={()=>onSetIsModal(false)} className={styles.inner}></div>

       <div className={styles.outer}>
        <h1>cart Products</h1>
        <ul>
          <li>{`${ctx.data.name}-${ctx.data.price}`}</li>
        </ul>

        <button onClick={()=>onSetIsModal(false)}>cancel</button>
      </div>

    </>
  )
}

export default Modal
