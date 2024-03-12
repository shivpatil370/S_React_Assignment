
import React from 'react'
import ReactDOM  from 'react-dom';
import Card from './Card';
import classes from "./ErrorModal.module.css";

const Backdrop=(props)=>{
    return <div className='classes.backdrop' onClick={props.onConfirm}></div>
};

const ModalOvarlay=(props)=>{
    // console.log(props)
    return <Card className={classes.modal}>
          <header className={classes.header}>
              <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
              <p>{props.message}</p>
          </div>
          <footer>
            <button className={classes.actions} onClick={props.onConfirm}>Okay</button>
          </footer>
    </Card>
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
       {
        ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm}/>,
            document.getElementById('backdrop-root')
        )
       }
       {
        ReactDOM.createPortal(
            <ModalOvarlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
            document.getElementById('overlay-root')
        )
       }
    </React.Fragment>
  )
}

export default ErrorModal
