import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';
import { useRef } from 'react';

const AddUser = () => {
 
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const clgNmameInputRef=useRef();
  const [error,setError]=useState("");
  // console.log(enteredUserName,enteredAge)

    const addUserHandler=(event)=>{
        event.preventDefault();
        
        // console.log(ageInputRef.current.value)
        let enteredName=nameInputRef.current.value;
        let enteredAge=ageInputRef.current.value;
        let enteredClgName=clgNmameInputRef.current.value;
        if(enteredName.trim().length===0 || enteredAge.trim().length===0 || enteredClgName.trim().length===0){
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
        
        nameInputRef.current.value="";
        ageInputRef.current.value="";
        clgNmameInputRef.current.value="";
       
    };


    
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
      <input id='username' type='text' ref={nameInputRef} />

      <label htmlFor="age">Age (Years)</label>
      <input id='age' type='number' ref={ageInputRef} />
      
      <label htmlFor="clgName">College name</label>
      <input id='clgName' type='text' ref={clgNmameInputRef} />
      <button type='submit'>Add User</button>


    </form>
    </Card>
     </Wrapper>
  )
}

export default AddUser
