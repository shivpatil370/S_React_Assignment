import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux-store/CartReducer';

const ProductItem = (props) => {
  // console.log(props.ele)
  // const { title, price, description } = props;
const dispatch=useDispatch()

  const handleAddtoCart=(ele)=>{
       dispatch(cartActions.AddData(ele))
  }

  return (
    <li className={classes.item}>
      {
        props?.ele?.map((ele)=>{
     return  <Card key={ele.id}>
        <header>
          <h3>{ele.title}</h3>
          <div className={classes.price}>${ele.price.toFixed(2)}</div>
        </header>
        <p>{ele.description}</p>
        <div className={classes.actions}>
          <button onClick={()=>handleAddtoCart(ele)}>Add to Cart</button>
        </div>
      </Card>
      })
}
    </li>
  );
};

export default ProductItem;
