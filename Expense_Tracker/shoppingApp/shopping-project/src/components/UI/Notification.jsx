import { useSelector } from 'react-redux';
import classes from './Notification.module.css';
// import { cartActions } from '../../redux-store/CartReducer';

     
const Notification = (props) => {
  const rdx=useSelector(store=>store.cart.changed)
       
  let specialClasses = '';

  if (props.note.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.note.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return rdx&&(
    <section className={cssClasses}>
      <h2>{props.note.title}</h2>
      <p>{props.note.message}</p>
    </section>
  );
};

export default Notification;