import classes from './Counter.module.css';
// import store from '../store';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter);
  // const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type:"INCREMENTBY5"})
  };

  const decrementHandler=()=>{
    dispatch({type:"DECREMENTBY5"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button  onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decremenenby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
