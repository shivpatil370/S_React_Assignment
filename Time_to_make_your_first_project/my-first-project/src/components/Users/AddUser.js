import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = () => {
  const [enteredUserName, setEnteredUserName]=useState("");
  const [enteredAge, setEnteredAge]=useState("");
  const [error,setError]=useState("");
  // console.log(enteredUserName,enteredAge)

    const addUserHandler=(event)=>{
        event.preventDefault();

        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({
              title:"Invalid input",
              message:"Please enter a valid username and age (non-empty values)."
            })
        }
        else{
          setError("")
        };

        if(enteredAge.trim().length>0 && Number(enteredAge)<1){
          setError({
            title:"Invalid input",
              message:"Please enter a valid age (> 0)."
          })
        }
       
    };
    const handleUserName=(event)=>{
      setEnteredUserName(event.target.value)
    };

    const handleAge=(event)=>{
      setEnteredAge(event.target.value)
    }

    const errorHandler=()=>{
      // console.log(props)
       setError("")
    }


  return (
    <Wrapper>
      {
        error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>
      }
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id='username' type='text' value={enteredUserName} onChange={handleUserName}/>

      <label htmlFor="age">Age (Years)</label>
      <input id='age' type='number' value={enteredAge} onChange={handleAge}/>
      <button type='submit'>Add User</button>

    </form>
    </Card>
     </Wrapper>
  )
}

export default AddUser
