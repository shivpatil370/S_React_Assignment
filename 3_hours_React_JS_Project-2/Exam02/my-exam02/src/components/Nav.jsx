// import React from 'react'

import FormProduct from "./FormProduct"
import styles from "./Nav.module.css";

const Nav = ({setIsModal}) => {
  return (
    <div className={styles.box}>
      <FormProduct/>
      <div className={styles.cart}>
      <button onClick={()=>setIsModal(true)}>cart</button>
      <span>{`${0}`}</span>
      </div>
    </div>
  )
}

export default Nav
