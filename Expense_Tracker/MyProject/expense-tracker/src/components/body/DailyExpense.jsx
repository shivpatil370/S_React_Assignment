// import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useRef, useState } from 'react';

// import {getDatabase,onValue,ref,set} from "firebase/database";
// import { app } from '../../Firebse';

const DailyExpense = () => {
 const [expense,setExpense]=useState({});
 const [dummy,setDummy]=useState([]);
 const [editkey,setEditkey]=useState("");
 const amountRef=useRef()
 const descriptionRef=useRef()
 const categoryRef=useRef()

//  console.log(editkey)


    const handleSubmit=(e)=>{
        e.preventDefault();

        const obj={
            amount:amountRef.current.value,
            description:descriptionRef.current.value,
            category:categoryRef.current.value
        };
        // console.log(obj);

        if(editkey){
          //EDIT  
          fetch(`https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com/expense/${editkey}.json`,{
           method:"PUT",
           body:JSON.stringify(obj),
           headers:{
               "Content-Type":"application/json"
           }
        })
        .then((res)=>{
            if(res.ok){
              return res.json().then((data)=>{
                console.log(data);
                
                setDummy(data)
                setEditkey("")
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
             
        }
        else{

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
                console.log(data);
                
                setDummy(data)
                 setEditkey("")
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
      }

    };

    // console.log(expense)


    

    useEffect(()=>{
       fetch("https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com/expense.json")
       .then((res)=>{
           if(res.ok){
              return res.json().then((data)=>{
                // console.log(data);
                setExpense(data);
                  
              })
           }
           else{
              throw new Error("failed request")
           }
       })
       .catch((err)=>{
        console.log(err);
       });
       //...........................OR...................
      // const db=getDatabase(app);
      // const valRef=ref(db,"expense");
      // onValue(valRef,(snapshot)=>{
      //   const data=snapshot.val();
      // // console.log(data);
      // setExpense(data);
      // });

    },[dummy]);


    // ...................DELETE.....................
    const handleDelete=(key)=>{
      fetch(`https://expense-tracker-app-15d5d-default-rtdb.firebaseio.com/expense/${key}.json`,{
        method:"DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res)=>{
          if(res.ok){
             return res.json().then((data)=>{
               console.log(data);
               setDummy([{dummy:"dummy"}]);
                 
             })
          }
          else{
             throw new Error("failed request")
          }
      })
      .catch((err)=>{
       console.log(err);
      });
    };


    //....................EDIT..............................  
    const handleEdit=(key,ele)=>{
      // console.log(ele)
      setEditkey(key)
        amountRef.current.value=ele.amount;
        categoryRef.current.value=ele.category;
        descriptionRef.current.value=ele.description;
    }


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
    <div style={{width:"fit-Content", margin:"auto",marginBottom:"2rem"}}>
        <h3 className='text-center'>daily expenses</h3>
        {
            Object.entries(expense)?.map(([key,ele])=>{
              // console.log(ele)
                return <h6 className='text-center border p-2 mb-1' key={key}>{`${ele.amount}-${ele.description}-${ele.category}-`}<Button className='bg-danger' size='sm' onClick={()=>handleDelete(key)}>Delete</Button>-<Button className='bg-info' size="sm" onClick={()=>handleEdit(key,ele)}>Edit</Button></h6>
            })
        }
    </div>

    
      
    </div>
  )
}

export default DailyExpense;
