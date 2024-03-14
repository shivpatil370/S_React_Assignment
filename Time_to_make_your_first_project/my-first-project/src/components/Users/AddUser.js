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
  const [data,setData]=useState([])
  // console.log(nameInputRef.current.value,ageInputRef)
  
// console.log(data)
    const addUserHandler=(event)=>{
        event.preventDefault();
        
        // console.log(ageInputRef.current.value)
        let enteredName=nameInputRef.current.value;
        let enteredAge=ageInputRef.current.value;
        let enteredClgName=clgNmameInputRef.current.value;
        if(enteredName.trim().length===0 || enteredAge.trim().length===0 || enteredClgName.trim().length===0){
            setError({
              title:"Invalid input",
              message:"Please enter a valid username and age and college name (non-empty values)."
            })
            
        }
        else{
          setError("")
          setData([...data,{name:nameInputRef.current.value,age:ageInputRef.current.value,college:clgNmameInputRef.current.value}])
          nameInputRef.current.value="";
          ageInputRef.current.value="";
          clgNmameInputRef.current.value="";
        };

        if(enteredAge.trim().length>0 && Number(enteredAge)<1){
          setError({
            title:"Invalid input",
              message:"Please enter a valid age (> 0)."
          })
        }
        
        
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
    <ul style={{marginLeft:'100px' }}>
      
        {
          data?.map((ele,index)=>(
           
              <li key={index}>{`${ele.name}-${ele.age}-${ele.college}`}</li>
            
          ))
        }
    </ul>
     </Wrapper>
  )
}

export default AddUser
