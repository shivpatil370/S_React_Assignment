import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux-store/CartReducer';

const CartButton = (props) => {
const dispatch=useDispatch();

const handlecart=()=>{
    dispatch(cartActions.AddToggle())
}

  return (
    <button onClick={handlecart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
