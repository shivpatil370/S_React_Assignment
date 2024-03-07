
import React from 'react'
import { useState } from 'react';
import  "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  const [expense,setExpense]=useState(props.amount)

  const HandleClick=()=>{
    setExpense("100")
    // console.log("clicked!");
  }


  return (
    <div style={{display:"flex"}}>
      <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs{expense}/-</div>
            <button onClick={HandleClick}>changes Expense</button>
          </div>
    </div>
  )
}

export default ExpenseDetails
