import { useState } from 'react';
import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let obj={
      email:email,
      password:password
    };
    // console.log(obj);
     dispatch(authActions.Login(obj));

     setEmail("");
     setPassword("");

  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
