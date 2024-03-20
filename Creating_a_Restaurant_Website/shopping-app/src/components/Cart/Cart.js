import React from 'react'
import styles from "./Cart.module.css";
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartitems=<ul className={styles['cart-items']}>{[{id:"c1",name:"sushi",amount:"2",price:12.99}].map((ele)=>{
    return <li>{ele.name}</li>
  })}</ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={styles.total}>
      <span>Total Amount</span>
      <span>35.62</span>
      </div>
      <div className={styles.actions}>
         <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
         <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
