// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

let DUMMY_EXPENSES=[
  {id:"e1",date:new Date(),title:"Food",price:10},
  {id:"e2",date:new Date(),title:"Petrol",price:100},
  {id:"e3",date:new Date(),title:"Movies",price:200}
];
function App() {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    //  console.log(expense)
    setExpenses((prev)=>{
      return [...prev,expense];
    })
  }

  return (
    <div style={{margin:"10% 20%",border:"1px solid black",padding:"3% 5%",borderRadius:"3%",backgroundColor:"lightgray"}}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses allData={expenses}/>
    </div>
  );
}

export default App;