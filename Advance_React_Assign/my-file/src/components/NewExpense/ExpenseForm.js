import React from 'react'
import "./ExpenseForm.css"
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredtitle ]=useState("");
  const [enteredAmount, setentEredAmount ]=useState("");
  const [enteredDate, setEnteredDate]=useState("");
  // const [userInput,setUserInput]=useState({
  //   enteredtitle:"",
  //   enteredAmount:"",
  //   enteredDate:""
  // })
  // console.log(userInput);

  const titleChangeHandler=(event)=>{
    setEnteredtitle(event.target.value);
    // setUserInput((prevState)=>{
    //    return {...prevState,enteredtitle:event.target.value}
    // })
  }

  const amountChangeHandler=(event)=>{
    setentEredAmount(event.target.value)
  //   setUserInput((prevState)=>{
  //     return {...prevState,enteredAmount:event.target.value}
  //  })
  }

  const dateChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
  //   setUserInput((prevState)=>{
  //     return {...prevState,enteredDate:event.target.value}
  //  })
  }

  const HandleFormSubmit=(event)=>{
     event.preventDefault();
     const expenseDeta={
      title:enteredtitle,
      price:enteredAmount,
      date:new Date(enteredDate)
     };
    //  console.log(expenseDeta);
    props.onSaveExpenseData(expenseDeta)
     setEnteredtitle("");
     setentEredAmount("");
     setEnteredDate("");
  }

  return (
    <div>
      <form onSubmit={HandleFormSubmit}>
        <div className='new-expense__controls'>
              <div className='new-expense__control'>
                    <labe>Title</labe>
                    <input type='text' value={enteredtitle} onChange={titleChangeHandler} required/>
              </div>
              <div className='new-expense__control'>
                    <labe>Amount</labe>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} required/>
              </div>
              <div className='new-expense__control'>
                    <labe>Date</labe>
                    <input type='date' value={enteredDate} min="2019-03-31" max="2026-03-31" onChange={dateChangeHandler} required/>
              </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
