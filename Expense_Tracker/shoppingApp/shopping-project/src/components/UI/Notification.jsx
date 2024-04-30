import classes from './Notification.module.css';

      let flag=true;
const Notification = (props) => {

        if(flag){
            flag=false;
            return
        }
  let specialClasses = '';

  if (props.note.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.note.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.note.title}</h2>
      <p>{props.note.message}</p>
    </section>
  );
};

export default Notification;