// import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';

const DailyExpense = () => {
 const [expense,setExpense]=useState([]);
 const amountRef=useRef()
 const descriptionRef=useRef()
 const categoryRef=useRef()

//  console.log(expense)


    const handleSubmit=(e)=>{
        e.preventDefault();

        const obj={
            amount:amountRef.current.value,
            description:descriptionRef.current.value,
            category:categoryRef.current.value
        };
        // console.log(obj);

        // setExpense((prev)=>{
        //     return [...prev, obj]
        // })

        fetch("https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com/expense.json",{
           method:"POST",
           body:JSON.stringify(obj),
           headers:{
               "Content-Type":"application/json"
           }
        })
        .then((res)=>{
            if(res.ok){
              return res.json().then((data)=>{
                // console.log(data);
                setExpense((prev)=>{
                    return [...prev, data]
                })

                amountRef.current.value="",
                descriptionRef.current.value="",
                categoryRef.current.value="";
                  
              })
            }
            else{
              return res.json().then((err)=>{
                console.log(err.error.message);
                  
              })
            }
        })

    };

    // console.log(expense)

    useEffect(()=>{
       fetch("https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com/expense.json")
       .then((res)=>{
           if(res.ok){
              return res.json().then((data)=>{
                // console.log(data);
                setExpense([data]);
                  
              })
           }
           else{
              throw new Error("failed request")
           }
       })
       .catch((err)=>{
        console.log(err);
       })
    },[])


  return (
    <div>
    <div className='w-25 p-4 m-auto mt-5 bg-light'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>expense amount:</Form.Label>
        <Form.Control type="number" placeholder="" ref={amountRef} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description:</Form.Label>
        <Form.Control type="text" placeholder="" ref={descriptionRef} required/>
      </Form.Group>

      <Form.Label>category:</Form.Label>
      <Form.Select className='mb-3' aria-label="Default select example" ref={categoryRef} required>
      <option value="food">Food</option>
      <option value="petrol">Petrol</option>
      <option value="salary ">salary </option>
    </Form.Select>
      
      <Button variant="primary" type="submit">
        Add expenses
      </Button>
    </Form>
    </div>
    <br></br>
    <hr></hr>

    {/* ....................................................................... */}
    <div style={{width:"fit-Content", margin:"auto"}}>
        <h3 className='text-center'>daily expenses</h3>
        {
            expense.map((ele,index)=>{
              console.log(ele)
                return <h6 className='text-center border p-2 mb-1' key={index}>{`${ele.amount}-${ele.description}-${ele.category}`}</h6>
            })
        }
    </div>

    
      
    </div>
  )
}

export default DailyExpense
