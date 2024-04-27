import classes from './Counter.module.css';
// import store from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const dispatch=useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showToggle);

  const toggleCounterHandler = () => {
     dispatch(counterActions.toggle())
  };

  const incrementHandler=()=>{
    dispatch(counterActions.INCREMENT(5))
  };

  const decrementHandler=()=>{
    dispatch(counterActions.DECREMENT(5))
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button  onClick={incrementHandler}>IncrementBy5</button>
        <button onClick={decrementHandler}>Decremenenby5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};


export default Counter;
