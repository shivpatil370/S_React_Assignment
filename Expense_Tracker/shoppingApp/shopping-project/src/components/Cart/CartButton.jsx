import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../redux-store/CartReducer';
import { useEffect, useState } from 'react';

const CartButton = (props) => {
  const [total,setTotal]=useState(0);
const dispatch=useDispatch();
const cart=useSelector(state=>state.cart.data);
// console.log(cart)

useEffect(()=>{
    const totals=cart.reduce((acc,ele)=>{
       return acc+ele.quantity;
    },0);
    // console.log(totals);
    setTotal(totals);
})

const handlecart=()=>{
    dispatch(cartActions.AddToggle())
}

  return (
    <button onClick={handlecart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
