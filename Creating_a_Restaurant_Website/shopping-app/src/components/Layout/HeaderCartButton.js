import React from 'react'
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon"
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
   const cartCtx=useContext(CartContext);

   const numberOfCartItems=cartCtx.items.reduce((acc,items)=>{
    return acc+items.amount;
   },0);

   const btnClasses=`${styles.button} ${styles.bump}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
       <span className={styles.icon}>
        <CartIcon/>
       </span>
       <span>Your Cart</span>
       <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
