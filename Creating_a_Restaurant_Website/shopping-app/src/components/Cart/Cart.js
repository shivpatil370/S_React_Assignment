import React from 'react'
import styles from "./Cart.module.css";
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartCtx=useContext(CartContext);

  const totalAmount=`${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems=cartCtx.items.length>0;

  const cartItemRemoveHandler=(id)=>{
     cartCtx.removeItem(id);
  };

  const cartItemAddHandler=(item)=>{
     cartCtx.addItem(item);
  };

  const cartitems=<ul className={styles['cart-items']}>{cartCtx.items.map((ele)=>{
    return <CartItem key={ele.id} name={ele.name} amount={ele.amount} price={ele.price} onRemove={cartItemRemoveHandler.bind(null,ele.id)} onAdd={cartItemAddHandler.bind(null,ele)}/>
  })}</ul>;

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={styles.total}>
      <span>Total Amount</span>
      <span>{totalAmount>0?`$${totalAmount}`:`${totalAmount}`}</span>
      </div>
      <div className={styles.actions}>
         <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
         {hasItems&&<button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
