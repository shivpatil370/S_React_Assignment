// import React from 'react'

import FormContext from "../store/form-context";
import FormProduct from "./FormProduct"
import styles from "./Nav.module.css";
import { useContext } from "react";


const Nav = ({setIsModal}) => {
  // const [total,setTotal]=useState(0);
  const ctx=useContext(FormContext);
 
   
 

  return (
    <div className={styles.box}>
      <FormProduct/>
      <div className={styles.cart}>
      <button onClick={()=>setIsModal(true)}>cart</button>
      <span>{`${ctx.CartTotal}`}</span>
      </div>
    </div>
  )
}

export default Nav
