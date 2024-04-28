import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
   const cartItems=useSelector(store=>store.cart.data)
  //  console.log(cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        
          <CartItem cartItems={cartItems}/>
         
      </ul>
    </Card>
  );
};

export default Cart;
