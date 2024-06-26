import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../redux-store/CartReducer';

   
const CartItem = (props) => {
 
   const data=props?.cartItems;
   const dispatch=useDispatch();
  //  const render=useSelector(store=>store.cart.renders)

   const handleincrement=(ele)=>{
    dispatch(cartActions.AddData(ele));
   };

   const handleDecrement=(ele)=>{
      dispatch(cartActions.RemoveData(ele))
   }

      

  return data.length==0?<h1 style={{color:"red"}}>opps! cart emety!</h1>:(
    <li className={classes.item}>
        {
             data.map((ele)=>{
              // console.log(ele)
           return <div key={ele.id}>
                <header>
        <h3>{ele?.title}</h3>
        <div className={classes.price}>
          ${ele?.total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${ele?.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{ele?.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>handleDecrement(ele)}>-</button>
          <button onClick={()=>handleincrement(ele)}>+</button>
        </div>
      </div>
            </div>
          })
        }
    </li>
  );
};

export default CartItem;
