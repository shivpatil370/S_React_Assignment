
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  
  return (
    <Card>
        <div className='expense-item'>
          <div style={{display:"flex"}}>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails amount={props.amount} title={props.title}/>
          </div>
        </div>
    </Card>
  )
}

export default ExpenseItem;
