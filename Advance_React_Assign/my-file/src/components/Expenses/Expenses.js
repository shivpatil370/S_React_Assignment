import React from 'react'
import ExpenseItem from './ExpenseItem'
import { useState } from 'react'
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState("2024");

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }

  
  const myFilter=props?.allData?.filter((ele)=>{
      let myDate=ele?.date?.getFullYear().toString();
        // console.log(ele.date.getFullYear().toString())
              return myDate===filteredYear;
        })
  

  return (
    <div >
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      <ExpensesChart expenses={myFilter}/>
     
      {myFilter.length===0&&(<h3>No expenses found.</h3>)}
      
      {myFilter.length>0&&(myFilter.map((expense)=>{
          return <ExpenseItem key={expense.id} title={expense.title} amount={expense.price} date={expense.date}/>

        }))
      }
      
    </div>
  )
}

export default Expenses
